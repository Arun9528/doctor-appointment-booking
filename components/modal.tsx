"use client";
import { motion } from "motion/react";
interface ModalProps {
  children: React.ReactNode;
  handleClickModal: () => void;
}
export default function Modal({ children,handleClickModal}: ModalProps) {
  return (
    <section>
      
      <motion.div
      className="fixed inset-0 bg-black/80 center_content min-h-screen "
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
        className="w-3xl h-auto bg-white rounded-lg p-4 "
      >
        {children}
      </motion.section>
    </motion.div>
    </section>
  );
}
