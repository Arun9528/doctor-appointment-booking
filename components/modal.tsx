"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import AppointmentRegister from "./doctorAppointmentPage/AppoitmentRegister";
interface ModalProps {
  children: React.ReactNode;
}
export default function Modal({ children }: ModalProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleClickModal = () => setShowModal((prev) => !prev);
  return (
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
        onClick={(e: React.MouseEvent<HTMLElement>) => e?.stopPropagation()}
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
        {/* <AppointmentRegister handleClickModal={handleClickModal} doctorId={doctorId}/>  */}
        {children}
      </motion.section>
    </motion.div>
  );
}
