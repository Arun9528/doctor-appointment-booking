"use client";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import Modal from "../modal";
import AppointmentRegister from "../doctorAppointmentPage/AppoitmentRegister";
import { BASE_URL } from "@/lib/config";
import { useRouter } from "next/navigation";
import { Route } from "next";
interface exitsProps {
  alreadyRequested: boolean;
  date: string;
  status: string;
  timeSlot: string;
  appointmentId: string;
}
export default function AddAppointment({ doctorId,authCheck}: { doctorId: string,authCheck:boolean}) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isExits, setIsExits] = useState<exitsProps | null>(null);
  const [loading,setLoading] = useState<boolean>(false);
  const route = useRouter();
  useEffect(() => {
    if(!authCheck) return 
    checkAppointmentStatus();
  }, [doctorId]);

   const checkAppointmentStatus = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}appointments/check?providerId=${doctorId}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            cache: "no-store",
            credentials: "include",
          }
        );
        if (!res.ok) {
          if (res.status === 401) {
            console.log("it's int")
            route.push("/user/login" as Route);
            return;
          }
          throw new Error(`Check failed ${res?.status}`);
        }
        const exits = await res.json();
        setIsExits(exits);
       
      } catch (error) {
        console.error("check error", error);
      }
    };
  const handleCancelappointment = async () => {
    setLoading(true)
    try {
      const res = await fetch(
        `${BASE_URL}appointments/${isExits?.appointmentId}/cancel-by-patient`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
          credentials: "include",
        }
      );
      if (!res.ok) {
        if (res.status === 401) {
          route.push("/user/login" as Route);
          return;
        }
        throw new Error(`Check failed ${res?.status}`);
      }
      // const data = await res.json();
      await checkAppointmentStatus()
      setShowModal(false);
      
    } catch (error) {
      console.error("check error", error);
    } finally{
      setLoading(false)
    }
  };
  const handleClickModal = () => {
   if(!authCheck){
      route.push("/user/login" as Route)
   }else{
    setShowModal((prev) => !prev);
   }
    
  }
  const handleBookingSuccess = ()=>{
    checkAppointmentStatus()
    setShowModal(false)
  }
  return (
    <div className="overflow-hidden">
      {isExits?.alreadyRequested && (
        <p className="text-black/70 dark:text-white/90 text-sm text-center mb-2">
          <span>
            {isExits?.date.split("T")[0]?.split("-")?.reverse()?.join("-")}
          </span>{" "}
          & <span>{isExits?.timeSlot}</span>
        </p>
      )}
      <button
        type="button"
        className={`${isExits?.alreadyRequested ? "bg-red-600" : "bg-sky-600 dark:bg-gray-800 "}
       text-white dark:text-sky-600 rounded-lg  text-sm px-4 py-1.5 sm:py-2 cursor-pointer max-sm:mt-2`}
        onClick={handleClickModal}
      >
        {loading ? "Processing...": isExits?.alreadyRequested ? "Cancel Appointment" : "Book Appointment"}
      </button>
      <AnimatePresence mode="wait">
        {showModal && !isExits?.alreadyRequested && (
          <Modal handleClickModal={handleClickModal} sectionStyle="  max-[400px]:w-[19rem] min-[400px]:max-md:w-[24rem] md:w-[47rem] overflow-y-scroll max-md:!h-[40rem]">
            <AppointmentRegister
              doctorId={doctorId}
              handleClickModal={handleClickModal}
              handleBookingSuccess={handleBookingSuccess}
            />
          </Modal>
        )}
        {showModal && isExits?.alreadyRequested && (
          <Modal handleClickModal={handleClickModal} sectionStyle="w-80 min-[400px]:max-[550px]:w-sm min-[550px]:w-lg"  >
            <section>
              <p className="text-lg min-[400px]text-xl sm:text-2xl font-medium">
                Are you sure you want to cancel the appointment?
              </p>
              <div className="text-end space-x-2.5 mt-5">
                <button
                  type="button"
                  className="bg-green-600 px-5 py-1 cursor-pointer text-white rounded-lg text-sm min-[400px]:max-sm:text-base sm:text-lg"
                  onClick={handleCancelappointment}
                  disabled={loading}
                >
                  {loading ? "Booking..." : "Yes"}
                </button>
                <button
                  type="button"
                  className="bg-red-600 px-5 py-1 cursor-pointer text-white rounded-lg text-sm min-[400px]:max-sm:text-base sm:text-lg"
                  onClick={handleClickModal}
                >
                  No
                </button>
              </div>
            </section>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
