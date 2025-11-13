"use client";

import { BASE_URL } from "@/lib/config";
import { AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import Modal from "./modal";

export default function Doc_Isavailable_Delete_Comp({
  available,
  doctorId,
}: {
  available: boolean;
  doctorId: string;
}) {
  const [isAvailable, setIsAvailable] = useState<boolean>(available);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const router = useRouter();
  const handleAvailabilityChange = async (checked: boolean) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `${BASE_URL}admin/doctor/${doctorId}/availability`,
        {
          method: "PATCH",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ isAvailable: checked }),
        }
      );

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to update");
      }

      setIsAvailable(checked);
      router.refresh();
    } catch (error: any) {
      console.error("Availability update failed:", error);
      alert("Failed to update availability: " + error?.message);
      setIsAvailable(!checked);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}admin/doctor/${doctorId}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(`deleting Failed ${res?.status}- ${err?.message}`);
      }
      handleClickModal()
      router.refresh();
    } catch (error) {
      console.error("delete failed:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleClickModal = () => setShowModal((prev) => !prev);
  return (
    <>
      <div className="flex justify-between ">
        <div className="flex items-center  gap-x-1">
          <input
            type="checkbox"
            name="DocAvaible"
            id={`${"available"}-${doctorId}`}
            className="size-3.5"
            checked={isAvailable}
            disabled={isLoading}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleAvailabilityChange(e?.target?.checked)
            }
          />
          <label htmlFor={`${"available"}-${doctorId}`} className="font-medium text-sm">
            {isLoading ? "Saving..." : "Available"}
          </label>
        </div>
        <button
          type="button"
          className="py-1 px-3 bg-red-600 text-white rounded-md cursor-pointer text-sm"
          onClick={handleClickModal}
        >
          Delete
        </button>
      </div>
      <AnimatePresence mode="wait">
        {showModal && (
          <Modal sectionStyle="w-80 min-[400px]:max-[550px]:w-sm min-[550px]:w-lg" handleClickModal={handleClickModal}>
            <section>
              <p className="text-lg min-[400px]text-xl sm:text-2xl font-medium">
                Are you sure you want to Delete this Doctor?
              </p>
              <div className="text-end space-x-2.5 mt-5">
                <button
                  type="button"
                  className="bg-green-600 px-5 py-1 cursor-pointer text-white rounded-lg text-sm min-[400px]:max-sm:text-base sm:text-lg"
                  onClick={handleDelete}
                  disabled={isLoading}
                >
                  {isLoading ? "Deleting..." : "Yes"}
                </button>
                <button
                  type="button"
                  className="bg-red-600 px-5 py-1 cursor-pointer text-white rounded-lg text-sm min-[400px]:max-sm:text-base sm:text-lg "
                  onClick={handleClickModal}
                >
                  No
                </button>
              </div>
            </section>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
