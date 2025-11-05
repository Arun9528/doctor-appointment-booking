import { BASE_URL, IMAGE_URL } from "@/base";
import { myAppointment } from "@/lib/types";
import CheckingAuth from "@/utils/checkingAuth";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";

export const metadata: Metadata = {
  title: "My Appointments",
  description: "This is User All Appointments Page ",
};
export default async function MyAppointments() {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore
      ?.getAll()
      ?.map((c) => `${c?.name}=${c?.value}`)
      .join("; ");
    const res = await fetch(`${BASE_URL}appointments/my`, {
      method: "GET",
      headers: { cookie: cookieHeader || "" },
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`fetching error ${res.status}`);
    const data = await res.json();
    const appointmentList: myAppointment[] = data?.appointments;
    console.log(appointmentList);
    
    return (
      <section className="px-20 pb-5  pt-10  space-y-5">
        <h2 className="text-2xl font-semibold">My Appointments</h2>
       {
        appointmentList?.map(appointment => (
           <section key={appointment?._id} className="border border-gray-300 rounded-lg shadow-md  p-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-x-5">
              <div className="bg-gray-200 rounded-lg">
                <Image
                  src={`${IMAGE_URL}${appointment?.providerId?.profile_photo}`}
                  alt="doctor photo"
                  width={100}
                  height={100}
                  unoptimized
                  className="w-[100px] h-[100px] object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium text-lg">{appointment?.providerId?.name}</h3>
                <p className="text-xs text-[#5e5e5e] ">{appointment?.providerId?.category?.name}</p>
                <p>
                  <span className="text-[#5e5e5e] font-semibold text-sm">
                    Address:
                  </span>{" "}
                  <span className="text-black/80 text-sm">
                    {appointment?.providerId?.clinic_address}
                  </span>
                </p>
                <p>
                  <span className="text-[#5e5e5e] font-semibold text-sm">
                    Date & Time:
                  </span>{" "}
                  <span className="text-black/80 text-sm">
                   {appointment?.date?.split("T")[0]?.split("-")?.reverse().join("-")} | {appointment?.timeSlot}
                  </span>
                </p>
              </div>
            </div>
      
            <button
              type="button"
              className="text-[#5e5e5e] border border-gray-300 px-3 py-2 rounded-md cursor-pointer hover:bg-red-600
           hover:text-white transition-colors duration-500 ease-in-out text-sm"
            >
              Cancel Appointment
            </button>
           
          </section>
        ))
       }
      </section>
    );
  } catch (error) {
    const typeError = error as Error;
    console.error(error);
    return (
      <div className="min-h-screen center_content">
        <h1 className="text-lg sm:text-2xl: md:text-3xl lg:text-4xl font-semibold">
          {typeError?.message}
        </h1>
      </div>
    );
  }
}
