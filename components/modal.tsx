"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import AppointmentRegister from "./doctorAppointmentPage/AppoitmentRegister";
interface ModalProps{
  doctorId:string;
}
export default function Modal({doctorId}:ModalProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleClickModal = () => setShowModal((prev) => !prev);
  return (
    <section>
      <button
        type="button"
        className="bg-sky-600 text-white rounded-lg text-sm px-4 py-2 cursor-pointer"
        onClick={handleClickModal}
      >
        Book Appointment
      </button>
      <AnimatePresence mode="wait">
        {showModal && (
          <section>
            <motion.div
              className="fixed inset-0 bg-black/70 center_content min-h-screen "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={handleClickModal}
              role="dialog"
              aria-modal="true"
            >
              <motion.section
                onClick={(e: React.MouseEvent<HTMLElement>) =>
                  e?.stopPropagation()
                }
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 300,
                }}
                className="w-2xl h-auto bg-white rounded-lg p-4 "
              >
                 <AppointmentRegister handleClickModal={handleClickModal} doctorId={doctorId}/> 
              </motion.section>
            </motion.div>
          </section>
        )}
      </AnimatePresence>
    </section>
  );
}

