import { BASE_URL, IMAGE_URL } from "@/lib/config";
import { myAppointment } from "@/lib/types";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";

export const metadata: Metadata = {
  title: "My Appointments",
  description: "This is User All Appointments Page ",
};
export const dynamic = "force-dynamic";
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
    const formatDate = (cancelDate:string) =>{
       const date = new Date(cancelDate);
       const format = date?.toLocaleString("en-GB",{hour12:true,month:"short",year:"numeric",day:"2-digit",minute:"2-digit",
        hour:"2-digit"})
       return format
    }
    return (
      <section className=" responsive_left-right_padding pb-5  !pt-10  space-y-5">
        <h2 className="text-2xl font-semibold">My Appointments</h2>
        {appointmentList?.map((appointment) => (
          <section
            key={appointment?._id}
            className="border border-gray-300 dark:border-gray-700 rounded-lg shadow-md  p-3 sm:flex sm:items-center
             sm:justify-between max-sm:grid max-sm:grid-cols-1 gap-2"
          >
            <div className="max-sm:grid max-sm:grid-cols-1 sm:flex items-center gap-x-5">
              <div className="bg-gray-200 rounded-lg  justify-self-center">
                <Image
                  src={`${IMAGE_URL}${appointment?.providerId?.profile_photo}`}
                  alt="doctor photo"
                  width={100}
                  height={100}
                  unoptimized
                  className="w-[150px] h-[150px] object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium sm:text-lg">
                  {appointment?.providerId?.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-[#5e5e5e] dark:text-white/50 ">
                  {appointment?.providerId?.category?.name}
                </p>
                <p>
                  <span className="text-[#5e5e5e] font-semibold  text-sm">
                    Address:
                  </span>{" "}
                  <span className="text-black/80 dark:text-white/80 text-xs sm:text-sm">
                    {appointment?.providerId?.clinic_address}
                  </span>
                </p>
                <p>
                  <span className="text-[#5e5e5e] font-semibold text-sm">
                    Date & Time:
                  </span>{" "}
                  <span className="text-black/80 dark:text-white/80 text-xs sm:text-sm">
                    {appointment?.date
                      ?.split("T")[0]
                      ?.split("-")
                      ?.reverse()
                      .join("-")}{" "}
                    | {appointment?.timeSlot}
                  </span>
                </p>
                <p className=" flex items-center gap-x-1 text-sm">
                  <span className="font-semibold text-[#5e5e5e]">
                    Appointment Fee :{" "}
                  </span>
                  <span className="text-black/80 dark:text-white/80 text-xs sm:text-sm">
                    {" "}
                    &#8377; {appointment?.providerId?.appointmentFee}
                  </span>
                </p>
                <p className=" flex items-center gap-x-1 text-sm">
                  <span className="font-semibold text-[#5e5e5e]">
                    Created At :{" "}
                  </span>
                  <span className="text-black/80 dark:text-white/80 text-xs sm:text-sm">
                   {formatDate(appointment?.createdAt)}
                  </span>
                </p>
              </div>
            </div>
            {appointment?.status === "pending" && (
              <button
                type="button"
                className="text-[#5e5e5e] dark:text-white/80 border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md cursor-pointer hover:bg-red-600 hover:text-white transition-colors duration-500 ease-in-out text-sm"
              >
                Cancel Appointment
              </button>
            )}
            {appointment?.status === "cancelled" && (
              <div className=" sm:text-end">
                <p>
                  <span className=" text-sm font-semibold text-[#5e5e5e] ">CancelledAt:</span>{" "}
                  <span className="text-xs sm:text-sm font-medium text-black/90 dark:text-white/80">{formatDate(appointment?.cancellation?.cancelledAt)}</span>
                </p>
                <p >
                 <span className=" text-sm font-semibold text-[#5e5e5e] ">CancelledBy:</span>{" "}
                 <span className="text-xs sm:text-sm">{appointment?.cancellation?.cancelledBy === "patient" ? "You"
                    : appointment?.cancellation?.cancelledBy}</span>
                </p>
                <p>
                  <span className=" text-sm font-semibold text-[#5e5e5e] ">Reason:</span>{" "}
                  <span className="text-black/90 dark:text-white/80 text-xs sm:text-sm">
                    {appointment?.cancellation?.reason}
                  </span>
                </p>
                {/* <p className="capitalize text-red-600 font-medium">{appointment?.status}</p> */}
                <p>
                <span className="font-semibold text-sm text-[#5e5e5e]">Appointment Status:</span>{" "}
                <span className="text-red-600  max-sm:text-sm ">Cancelled</span>
              </p>
              </div>
            )}
            {
              appointment?.status === "confirmed" && (
                //  <button type="button" className="text-sky-600 font-medium max-sm:text-sm">Appointment Confirmed By Doctor</button>
                <p>
                <span className="text-[#5e5e5e] font-semibold text-sm">Appointment Status:</span>{" "}
                <span className="text-green-600  max-sm:text-sm ">Appointment Confirmed By Doctor</span>
              </p>
              )
            }
            {
              appointment?.status === "completed" && (<p >
                <span className="text-[#5e5e5e] font-semibold text-sm" >Appointment Status:</span>{" "}
                <span className="text-green-600  max-sm:text-sm ">Completed</span>
              </p>)
            }
          </section>
        ))}
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
