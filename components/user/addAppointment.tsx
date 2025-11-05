"use client";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import Modal from "../modal";
import AppointmentRegister from "../doctorAppointmentPage/AppoitmentRegister";
export default function AddAppointment({ doctorId }: { doctorId: string }) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleClickModal = () => setShowModal((prev) => !prev);
  return (
    <div>
      <button
        type="button"
        className="bg-sky-600 text-white rounded-lg text-sm px-4 py-2 cursor-pointer"
        onClick={handleClickModal}
      >
        Book Appointment
      </button>
      <AnimatePresence mode="wait">
        {showModal && (
          <Modal handleClickModal={handleClickModal}>
            <AppointmentRegister
              doctorId={doctorId}
              handleClickModal={handleClickModal}
            />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
