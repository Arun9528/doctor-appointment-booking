"use client";

import { BASE_URL } from "@/base";
import { useRouter } from "next/navigation";

export default function Complete_Appointment({
  appointmentId,
}: {
  appointmentId: string;
}) {
  const route = useRouter();
  const handleCompleteAppointment = async () => {
    try {
      const res = await fetch(`${BASE_URL}appointments/${appointmentId}/complete-by-doctor`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`fetching error: ${res.status} - ${errorData.message || "Unknown error"}`);
      }
      const b = await res.json();
      console.log("complete",b)
      route.refresh();
      
    } catch (error) {
      console.error("canceling error", error);
    }
  };
  return (
    <button
      type="button"
      className="text-green-600 font-medium border border-green-600 cursor-pointer py-2 px-3 rounded-md transition-colors 
      duration-300 ease-in-out hover:bg-green-600 hover:text-white "
      onClick={handleCompleteAppointment}
    >
      Completed
    </button>
  );
}
