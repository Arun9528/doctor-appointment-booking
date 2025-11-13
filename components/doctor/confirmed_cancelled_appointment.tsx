"use client";
import { BASE_URL } from "@/lib/config";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Modal from "../modal";
import Doctor_Cancel_Modal from "./doctor_cancel_modal";
import { useRouter } from "next/navigation";

export default function Confirmed_Cancelled_Appointment({appointmentId}: {appointmentId: string;}) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const route = useRouter();
  const handleClickModal = () => setShowModal((prev) => !prev);
  const handleConfirmAppointment = async()=>{
      try {
        const res = await fetch(`${BASE_URL}appointments/${appointmentId}/confirm-by-doctor`,{
          method:"PATCH",
          headers:{"Content-Type":"application/json"},
          credentials:"include"
        })
        if(!res.ok){
          const errorData = await res.json()
          throw new Error(`fetching error: ${res.status} - ${errorData.message || 'Unknown error'}`);
        }
        route.refresh();
      } catch (error) {
        console.error("canceling error", error);
      }
  }
  return (
    <div>
      <div className="flex  justify-center gap-x-2">
        <button
          type="button"
          className="border border-gray-300 transition-colors duration-500 ease-in-out size-8 min-[450px]:size-10 rounded-full justify-items-center
         hover:bg-green-600 hover:text-white cursor-pointer text-green-600"
           onClick={handleConfirmAppointment}
        >
          <FaCheck />
        </button>
        <button
          type="button"
          className=" border border-gray-300  transition-colors duration-500 ease-in-out   hover:bg-red-600 hover:text-white 
        cursor-pointer text-red-600 size-8 min-[450px]:size-10 rounded-full text-xl justify-items-center"
          onClick={handleClickModal}
        >
          <IoClose />
        </button>
      </div>
      <AnimatePresence mode="wait">
        {showModal && (
          <Modal handleClickModal={handleClickModal} sectionStyle="w-72 min-[400px]:max-[500px]:w-96 min-[500px]:max-sm:w-md sm:w-xl md:w-2xl lg:w-3xl">
            <Doctor_Cancel_Modal
              handleClickModal={handleClickModal}
              appointmentId={appointmentId}
            />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
