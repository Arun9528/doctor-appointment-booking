import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "My Appointments",
  description: "This is User All Appointments Page ",
};
export default function MyAppointments() {
  return (
    <main className="px-20 pb-5  pt-10  space-y-5">
      <h2 className="text-2xl font-semibold">My Appointments</h2>
        {[...Array(5)]?.map((_,i)=> (
            <section key={i} className="border border-gray-300 rounded-lg shadow-md  p-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-x-5">
           <div className="bg-gray-200 rounded-lg">
             <Image
            src={"/docPhotos/image (1).png"}
            alt="doctor photo"
            width={140}
            height={100}
            />
           </div>
          <div>
            <h3 className="font-medium text-lg">Dr. Richar James</h3>
            <p className="text-xs text-[#5e5e5e] ">General Physician</p>
            <p>
              <span className="text-[#5e5e5e] font-semibold text-sm">Address:</span>{" "}
              <span className="text-black/80 text-sm">
                123,main street, xyz road ,xyx
              </span>
            </p>
            <p>
              <span className="text-[#5e5e5e] font-semibold text-sm">Date & Time:</span>{" "}
              <span className="text-black/80 text-sm">27 Oct 2025 | 12:00 PM</span>
            </p>
          </div>
        </div>
        {/* <div> */}
        <button
          type="button"
          className="text-[#5e5e5e] border border-gray-300 px-3 py-2 rounded-md cursor-pointer hover:bg-red-600
           hover:text-white transition-colors duration-500 ease-in-out text-sm"
        >
          Cancel Appointment
        </button>
        {/* </div> */}
      </section>
        ))}
    </main>
  );
}
