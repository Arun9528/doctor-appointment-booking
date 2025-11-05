"use client";

import { AnimatePresence } from "motion/react";
import { useState } from "react";
import Modal from "../modal";
import AppointmentRegister from "../doctorAppointmentPage/AppoitmentRegister";
interface UsingModalProps {
  btnName: string;
  id: string;
  children:React.ReactNode
}
export default function UsingModal({
  btnName = "",
  id,
}: UsingModalProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleClickModal = () => setShowModal((prev) => !prev);
  return (
    <section>
      <button
        type="button"
        className="bg-sky-600 text-white rounded-lg text-sm px-4 py-2 cursor-pointer"
        onClick={handleClickModal}
      >
        {btnName}
      </button>
      <AnimatePresence mode="wait">
        {showModal && (
          <Modal handleClickModal={handleClickModal} btnName={"Book Appointment"}>
            <AppointmentRegister
              handleClickModal={handleClickModal}
              doctorId={id}
            />
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
}
