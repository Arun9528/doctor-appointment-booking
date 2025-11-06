"use client";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import Modal from "../modal";
import AppointmentRegister from "../doctorAppointmentPage/AppoitmentRegister";
import { BASE_URL } from "@/base";
import { useRouter } from "next/navigation";
import { Route } from "next";
interface exitsProps {
  alreadyRequested: boolean;
  date: string;
  status: string;
  timeSlot: string;
  appointmentId: string;
}
export default function AddAppointment({ doctorId }: { doctorId: string }) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isExits, setIsExits] = useState<exitsProps | null>(null);
  const [loading,setLoading] = useState<boolean>(false)
  const route = useRouter();
  useEffect(() => {
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
  const handleClickModal = () => setShowModal((prev) => !prev);
  const handleBookingSuccess = ()=>{
    checkAppointmentStatus()
    setShowModal(false)
  }
  return (
    <div>
      {isExits?.alreadyRequested && (
        <p className="text-black/70 text-sm text-center mb-2">
          <span>
            {isExits?.date.split("T")[0]?.split("-")?.reverse()?.join("-")}
          </span>{" "}
          & <span>{isExits?.timeSlot}</span>
        </p>
      )}
      <button
        type="button"
        className={`${isExits?.alreadyRequested ? "bg-red-600" : "bg-sky-600"}
       text-white rounded-lg text-sm px-4 py-2 cursor-pointer`}
        onClick={handleClickModal}
      >
        {loading ? "Processing...": isExits?.alreadyRequested ? "Cancel Appointment" : "Book Appointment"}
      </button>
      <AnimatePresence mode="wait">
        {showModal && !isExits?.alreadyRequested && (
          <Modal handleClickModal={handleClickModal}>
            <AppointmentRegister
              doctorId={doctorId}
              handleClickModal={handleClickModal}
              handleBookingSuccess={handleBookingSuccess}
            />
          </Modal>
        )}
        {showModal && isExits?.alreadyRequested && (
          <Modal handleClickModal={handleClickModal} sectionStyle="w-fit">
            <section>
              <p className="text-2xl font-medium">
                Are you sure you want to cancel the appointment?
              </p>
              <div className="text-end space-x-2.5 mt-5">
                <button
                  type="button"
                  className="bg-green-600 px-5 py-1 cursor-pointer text-white rounded-lg text-lg"
                  onClick={handleCancelappointment}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="bg-red-600 px-5 py-1 cursor-pointer text-white rounded-lg text-lg"
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
