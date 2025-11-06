import { Metadata } from "next";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { FaCheck, FaUserDoctor } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdOutlineContentPasteSearch } from "react-icons/md";

export const metadata: Metadata = {
  title: "Doctor DashBoard",
  description: "this is a Doctor Dashboard Page.",
};
export default function DoctorDashBoard() {
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
              <p className="font-semibold text-xl text-[#5e5e5e]">6</p>
              <p className="text-gray-600">Appointments</p>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 px-5 py-7 rounded-2xl shadow-sm">
          <div className="flex items-center gap-x-4">
            <FaUser className="text-4xl " />
            <div>
              <p className="font-semibold text-xl text-[#5e5e5e]">15</p>
              <p className="text-gray-600">Patients</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border border-gray-200 rounded-2xl shadow-sm px-5 py-4 space-y-6">
        <h2 className="text-2xl font-semibold">Latest Booking</h2>
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
          <div className="flex gap-x-2">
            <button
              type="button"
              className="border border-gray-300 transition-colors duration-500 ease-in-out size-10 rounded-full justify-items-center
                               hover:bg-green-600 hover:text-white cursor-pointer text-green-600"
            >
              <FaCheck/>
            </button>
            <button
              type="button"
              className=" border border-gray-300  transition-colors duration-500 ease-in-out hover:bg-red-600 hover:text-white cursor-pointer
               text-red-600 size-10 rounded-full text-xl justify-items-center"
            >
            <IoClose />
            </button>
          </div>
        </div>
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
}
