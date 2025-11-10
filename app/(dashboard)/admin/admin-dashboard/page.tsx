import { BASE_URL, IMAGE_URL } from "@/base";
import Confirmed_Cancelled_Appointment from "@/components/doctor/confirmed_cancelled_appointment";
import { AdminDashboard } from "@/lib/types";
import { Metadata, Route } from "next";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineContentPasteSearch } from "react-icons/md";

export const metadata: Metadata = {
  title: "Admin DashBoard",
  description: "This is Admin DashBoard",
};
export default async function AdminDashBoard() {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore
      .getAll()
      ?.map((c) => `${c?.name}=${c?.value}`)
      .join("; ");
    const res = await fetch(`${BASE_URL}admin/dashboard`, {
      method: "GET",
      headers: { cookie: cookieHeader || " " },
      cache: "no-store",
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(`Fetching failed ${res.status} - ${error.message}`);
    }
    const getData = await res.json();
    const dashboardData: AdminDashboard = getData?.data;
    // console.log(dashboardData);
    return (
      <section className="px-10 py-5 ">
        <div className="grid grid-cols-3 gap-x-7">
          <div className="border border-gray-200 px-5 py-7 rounded-2xl shadow-sm">
            <div className="flex items-center gap-x-4">
              <FaUserDoctor className="text-4xl" />
              <div>
                <p className="font-semibold text-2xl text-[#5e5e5e]">
                  {dashboardData?.summary?.totalDoctors}
                </p>
                <p className="text-gray-600">Doctors</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 px-5 py-7 rounded-2xl shadow-sm">
            <div className="flex items-center gap-x-4">
              <MdOutlineContentPasteSearch className="text-[40px]" />
              <div>
                <p className="font-semibold text-2xl text-[#5e5e5e]">
                  {dashboardData?.summary?.totalAppointments}
                </p>
                <p className="text-gray-600">Appointments</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 px-5 py-7 rounded-2xl shadow-sm">
            <div className="flex items-center gap-x-4">
              <FaUser className="text-4xl " />
              <div>
                <p className="font-semibold text-2xl text-[#5e5e5e]">
                  {dashboardData?.summary?.totalPatients}
                </p>
                <p className="text-gray-600">Patients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border border-gray-200 rounded-2xl shadow-sm px-5 py-4 space-y-6">
         <div className="flex justify-between items-center">
             <h2 className="text-2xl font-semibold">Latest Booking</h2>
             <Link href={"/admin/doctors-appointments" as Route} className="underline-offset-2 hover:underline hover:text-sky-600 text-sm ">See All</Link>
         </div>
          <div className="border rounded-lg overflow-hidden mt-6">
            <table className="w-full table-fixed border-collapse ">
              <thead>
                <tr className="border-b bg-gray-100">
                  <th className="w-20">Sr.No</th>
                  <th>Doctor</th>
                  <th className="w-20">Age</th>
                  <th className="w-52">Date & Time</th>
                  <th>Patient</th>
                  <th className="w-20">Fees</th>
                  <th className="w-36">Status</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData?.latestAppointments?.length > 0 ? (
                  dashboardData?.latestAppointments?.map((appointment, i) => (
                    <tr
                      className="text-center border-b hover:bg-gray-100/70 transition-colors duration-500 ease-in-out cursor-pointer text-sm"
                      key={appointment?._id}
                    >
                      <td>{i + 1}</td>
                      <td className="flex justify-center items-center gap-x-2.5">
                        <Image
                          src={`${IMAGE_URL}${appointment?.providerId?.profile_photo}`}
                          alt="Patient Photo"
                          width={70}
                          height={70}
                          className="size-10 rounded-full object-contain bg-gray-300"
                          unoptimized
                        />
                        <span className="capitalize">
                          {appointment?.providerId?.name}
                        </span>
                      </td>
                      <td>{appointment?.providerId?.age}</td>
                      <td>
                        {new Date(appointment?.date)?.toLocaleString("en-GB", {day: "2-digit",month: "short",year: "numeric",})}{" "}
                        & {appointment?.timeSlot}
                      </td>
                      <td className="flex justify-center items-center gap-x-2.5 ">
                        <Image
                          src={`${IMAGE_URL}${appointment?.userId?.profile_photo}`}
                          alt="Patient Photo"
                          width={70}
                          height={70}
                          className="size-10 rounded-full object-cover bg-gray-300"
                          unoptimized
                        />
                        <span className="capitalize">
                          {appointment?.userId?.name}
                        </span>
                      </td>
                      <td>&#8377; {appointment?.providerId?.appointmentFee}</td>
                      <td>
                        {appointment?.status === "pending" && (
                          //    <Confirmed_Cancelled_Appointment appointmentId={appointment?._id} />
                          <p className="text-yellow-500 font-medium">Pending</p>
                        )}
                        {appointment?.status === "confirmed" && (<p className="text-sky-500 font-medium ">Confirmed</p>)}
                        {appointment?.status === "completed" && (<p className="text-green-600 font-medium "> Complete</p>)}
                        {appointment?.status === "cancelled" && (<p className="text-red-600 font-medium ">Cancelled</p>)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="text-lg text-black/80">
                      There is no Appointment
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
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
