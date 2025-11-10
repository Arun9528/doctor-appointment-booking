import { BASE_URL, IMAGE_URL } from "@/base";
import { Admin_All_Appointment } from "@/lib/types";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Doctors Appointments",
  description: "In This Page All Appointments doctors Received by Patients.",
};
export default async function DoctorsAppointments() {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore
      .getAll()
      ?.map((c) => `${c?.name}=${c?.value}`)
      .join("; ");
    const res = await fetch(`${BASE_URL}admin/appointments`, {
      method: "GET",
      headers: { cookie: cookieHeader || " " },
      cache: "no-store",
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(`Fetching failed ${res.status} - ${error.message}`);
    }
    const getData = await res.json();
    const appointmentList: Admin_All_Appointment = getData?.data;
    // console.log(appointmentList);
    return (
      <section className="p-5">
        <h1 className="text-2xl font-bold ">All Appointments</h1>
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
            {appointmentList?.appointments?.length > 0 ? (
              appointmentList?.appointments?.map((appointment, i) => (
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
                    {new Date(appointment?.date)?.toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}{" "}
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
                       <p className="text-yellow-500 font-medium">Pending</p>
                    )}
                    {appointment?.status === "confirmed" && (
                      <p className="text-sky-500 font-medium ">Confirmed</p>
                    )}
                    {appointment?.status === "completed" && (
                      <p className="text-green-600 font-medium "> Complete</p>
                    )}
                    {appointment?.status === "cancelled" && (
                      <p className="text-red-600 font-medium ">Cancelled</p>
                    )}
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
