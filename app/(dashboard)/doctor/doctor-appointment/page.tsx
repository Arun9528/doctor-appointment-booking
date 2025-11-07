import { BASE_URL, IMAGE_URL } from "@/base";
import Complete_Appointment from "@/components/doctor/complete_appointment";
import Confirmed_Cancelled_Appointment from "@/components/doctor/confirmed_cancelled_appointment";
import { doctorAppointment } from "@/lib/types";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Doctor Appointment",
  description: "Thsi Page Show doctor Appointment",
};
export default async function DoctorAppointment() {
  try {
     const cookieStore = await cookies();
     const cookieHeader = cookieStore?.getAll()?.map((c) => `${c?.name}=${c?.value}`).join("; ");
     const res = await fetch(`${BASE_URL}appointments/doctor`,{
       method:"GET",
       headers: { cookie: cookieHeader || "" },
      cache: "no-store",
     })
     if (!res.ok) throw new Error(`fetching error ${res.status}`);
     const Appointments:doctorAppointment = await res.json();
     const allAppointment = Appointments?.data
     console.log(allAppointment);
     return (
    <section className="p-5">
      <h1 className="text-2xl font-bold pl-1">All Appointments</h1>
      <div className="border rounded-lg overflow-hidden mt-6">
        <table className="w-full table-fixed border-collapse ">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="w-20">Sr.No</th>
              <th>Patient</th>
              <th className="w-20">Payment</th>
              <th className="w-20">Age</th>
              <th>Date & Time</th>
              <th className="w-20">Fees</th>
              <th>Remark</th>
              <th>Status</th>
              <th className="w-52">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {
             allAppointment?.appointments?.length > 0 ? (
              allAppointment?.appointments?.map((patient,i) => (
              <tr
                className="text-center border-b hover:bg-gray-100/70 transition-colors duration-500 ease-in-out text-sm"
                key={patient?._id}
              >
                <td>{i + 1}</td>
                <td className="flex justify-center items-center gap-x-2.5">
                  <div className="size-10 rounded-full overflow-hidden">
                    <Image
                      src={`${IMAGE_URL}${patient?.userId?.profile_photo}`}
                      alt="Patient Photo"
                      width={70}
                      height={70}
                      unoptimized
                    />
                  </div>
                  <span className="capitalize">{patient?.userId?.name}</span>
                </td>
                <td>Cash</td>
                <td>{patient?.userId?.age}</td>
                <td>{new Date(patient?.date)?.toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric"})} & {patient?.timeSlot}</td>
                <td>&#8377; {patient?.providerId?.appointmentFee}</td>
                <td>{patient?.cancellation?.remarkToPatient || ""}</td>
                <td className={`capitalize font-medium`}>{patient?.status}</td>
                {/* <td className="text-red-600 font-medium">Cancelled</td> */}
                {/* <td className="text-green-600 font-medium">Completed</td> */}
                <td>
                  {/* <button
                    type="button"
                    className="border border-gray-300 transition-colors duration-500 ease-in-out size-10 rounded-full justify-items-center hover:bg-green-600 hover:text-white cursor-pointer text-green-600"
                  >
                    <FaCheck />
                  </button>
                  <button
                    type="button"
                    className=" border border-gray-300  transition-colors duration-500 ease-in-out hover:bg-red-600
                     hover:text-white cursor-pointer text-red-600 size-10 rounded-full text-xl justify-items-center"
                  >
                    <IoClose />
                  </button> */}
                  {
                    patient?.status === "pending" && (<Confirmed_Cancelled_Appointment appointmentId={patient?._id} />)
                  }
                  {
                    patient?.status === "confirmed" && (<Complete_Appointment appointmentId={patient?._id}/>)
                  }
                  {patient?.status === "completed" && (<p className="text-green-600 font-medium">Completed</p>)}
                  {patient?.status === "cancelled" && (<p className="text-red-600 font-medium ">Cancelled</p>)}
                </td>
              </tr>
            ))
             ) : (
              <div className="text-center">
                <p className="text-lg text-black/80">There is no Appointment</p>
              </div>
             )
            }
          </tbody>
        </table>
      </div>
    </section>
  );
  } catch (error) {
    
  }
}
