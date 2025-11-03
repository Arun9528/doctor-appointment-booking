import { Metadata } from "next";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Doctor Appointment",
  description: "Thsi Page Show doctor Appointment",
};
export default function DoctorAppointment() {
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
              <th className="w-52">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {[...Array(10)]?.map((_, i) => (
              <tr
                className="text-center border-b hover:bg-gray-100/70 transition-colors duration-500 ease-in-out cursor-pointer text-sm"
                key={i}
              >
                <td>{i + 1}</td>
                <td className="flex justify-center items-center gap-x-2.5">
                  <p className="size-10 rounded-full overflow-hidden">
                    <Image
                      src={"/dog.png"}
                      alt="Patient Photo"
                      width={70}
                      height={50}
                    />
                  </p>
                  <span>John Doe</span>
                </td>
                <td>Cash</td>
                <td>31</td>
                <td>5 Oct 2025,12:00 PM</td>
                <td>$100</td>
                {/* <td className="text-red-600 font-medium">Cancelled</td> */}
                {/* <td className="text-green-600 font-medium">Completed</td> */}
                <td className="flex gap-x-2 justify-center">
                  <button
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
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
