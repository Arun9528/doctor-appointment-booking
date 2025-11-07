import { BASE_URL, IMAGE_URL } from "@/base";
import Confirmed_Cancelled_Appointment from "@/components/doctor/confirmed_cancelled_appointment";
import { doctorAppointment } from "@/lib/types";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineContentPasteSearch } from "react-icons/md";

export const metadata: Metadata = {
  title: "Doctor DashBoard",
  description: "this is a Doctor Dashboard Page.",
};
export default async function DoctorDashBoard() {
  try {
    const cookieStore = await cookies();
    //  console.log(cookieStore.get("token"))
    const cookieHeader = cookieStore
      ?.getAll()
      ?.map((c) => `${c?.name}=${c?.value}`)
      .join("; ");
    //  console.log(cookieHeader)
    const res = await fetch(`${BASE_URL}appointments/doctor?status=pending&limit=6`, {
      method: "GET",
      headers: { cookie: cookieHeader || "" },
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`fetching error ${res.status}`);
    const doctorAppointment: doctorAppointment = await res.json();
    const Appointmentdata = doctorAppointment?.data;
    console.log(doctorAppointment)
    return (
      <section className="px-10 py-5 ">
        <div className="grid grid-cols-3 gap-x-7">
          <div className="border border-gray-200 px-5 py-7 rounded-2xl shadow-sm">
            <div className="flex items-center gap-x-4">
              <FaUserDoctor className="text-4xl" />
              <div>
                <p className="font-semibold text-xl text-[#5e5e5e]">$1000</p>
                <p className="text-gray-600">Earnings</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 px-5 py-7 rounded-2xl shadow-sm">
            <div className="flex items-center gap-x-4">
              <MdOutlineContentPasteSearch className="text-[40px]" />
              <div>
                <p className="font-semibold text-xl text-[#5e5e5e]">
                  {Appointmentdata?.summary?.totalInDatabase}
                </p>
                <p className="text-gray-600">Appointments</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 px-5 py-7 rounded-2xl shadow-sm">
            <div className="flex items-center gap-x-4">
              <FaUser className="text-4xl " />
              <div>
                <p className="font-semibold text-xl text-[#5e5e5e]">
                  {Appointmentdata?.summary?.totalInDatabase}
                </p>
                <p className="text-gray-600">Patients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border border-gray-200 rounded-2xl shadow-sm px-5 py-4 space-y-6">
          <h2 className="text-2xl font-semibold">Latest Booking</h2>
          {
            Appointmentdata.appointments.length > 0 ? (
              Appointmentdata?.appointments?.map((patient) => (
            <div
              key={patient?.userId?._id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-x-4">
                <div className="size-12 relative rounded-full bg-gray-200 overflow-hidden  ">
                  <Image
                    src={`${IMAGE_URL}${patient?.userId?.profile_photo}`}
                    alt="doctor Photo"
                    width={50}
                    height={50}
                    className="bg-center w-auto h-auto "
                    unoptimized
                  />
                </div>
                <div>
                  <p className=" font-medium">{patient?.userId?.name}</p>
                  <p className="text-gray-400 text-xs">
                    Booking on{" "}
                    {new Date(patient?.date)?.toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    | {patient?.timeSlot}
                  </p>
                </div>
              </div>
              {patient?.status === "pending" && (
               <Confirmed_Cancelled_Appointment appointmentId={patient?._id} />
              )}
              {patient?.status === "confirmed" && (
                <button type="button" className="text-sky-500 font-medium ">
                    confirmed
                </button>
              )}
              {patient?.status === "completed" && (
                <button type="button" className="text-green-600 font-medium ">
                    Complete
                </button>
              )}
              {patient?.status === "cancelled" && (
                <button type="button" className="text-red-600 font-medium ">
                    Cancelled
                </button>
              )}
            </div>
          ))
            ) : <div className="text-center">
                <p className="text-lg text-black/80">There is no Appointment</p>
            </div>
          }

          {/* <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <div className="size-12 relative rounded-full bg-gray-200 overflow-hidden  ">
              <Image
                src={"/docPhotos/image (1).png"}
                alt="doctor Photo"
                width={100}
                height={20}
                className="bg-center"
              />
            </div>
            <div>
              <p className=" font-medium">Dr. Richard James</p>
              <p className="text-gray-400 text-xs">
                Booking on 5 Oct 2024 | 10:00 AM
              </p>
            </div>
          </div>
          <p className="text-red-600 text-sm font-medium">Cancelled</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <div className="size-12 relative rounded-full bg-gray-200 overflow-hidden  ">
              <Image
                src={"/docPhotos/image (1).png"}
                alt="doctor Photo"
                width={100}
                height={20}
                className="bg-center"
              />
            </div>
            <div>
              <p className=" font-medium">Dr. Richard James</p>
              <p className="text-gray-400 text-xs">
                Booking on 5 Oct 2024 | 10:00 AM
              </p>
            </div>
          </div>
          <p className="text-green-700 text-sm font-medium">Completed</p>
        </div> */}
        </div>
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
