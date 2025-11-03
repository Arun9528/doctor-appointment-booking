import { Metadata } from "next"
import Image from "next/image"
import { FaUser } from "react-icons/fa"
import { FaUserDoctor } from "react-icons/fa6"
import { MdOutlineContentPasteSearch } from "react-icons/md"

export const metadata:Metadata = {
    title:"Admin DashBoard",
    description:"This is Admin DashBoard"
}
export default function AdminDashBoard(){
    return (
         <section className="px-10 py-5 ">
             {/* <div className="border border-gray-200 px-5 py-10 flex justify-between items-center rounded-2xl shadow-md">
                 <div className="flex items-center gap-x-4">
                    <FaUserDoctor className="text-4xl"/>
                    <div>
                        <p className="font-semibold text-2xl text-[#5e5e5e]">15</p>
                        <p className="text-gray-600">Doctors</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-x-4">
                    <MdOutlineContentPasteSearch className="text-[40px]"/>
                    <div>
                        <p className="font-semibold text-2xl text-[#5e5e5e]">6</p>
                        <p className="text-gray-600">Appointments</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-x-4">
                    <FaUser className="text-4xl "/>
                    <div>
                        <p className="font-semibold text-2xl text-[#5e5e5e]">15</p>
                        <p className="text-gray-600">Doctors</p>
                    </div>
                 </div>
             </div> */}
             <div className="grid grid-cols-3 gap-x-7">
                <div className="border border-gray-200 px-5 py-7 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-x-4">
                    <FaUserDoctor className="text-4xl"/>
                    <div>
                        <p className="font-semibold text-2xl text-[#5e5e5e]">15</p>
                        <p className="text-gray-600">Doctors</p>
                    </div>
                 </div>
                </div>
                <div className="border border-gray-200 px-5 py-7 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-x-4">
                    <MdOutlineContentPasteSearch className="text-[40px]"/>
                    <div>
                        <p className="font-semibold text-2xl text-[#5e5e5e]">6</p>
                        <p className="text-gray-600">Appointments</p>
                    </div>
                 </div>
                </div>
                <div className="border border-gray-200 px-5 py-7 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-x-4">
                    <FaUser className="text-4xl "/>
                    <div>
                        <p className="font-semibold text-2xl text-[#5e5e5e]">15</p>
                        <p className="text-gray-600">Doctors</p>
                    </div>
                 </div>
                </div>

             </div>
             <div className="mt-10 border border-gray-200 rounded-2xl shadow-sm px-5 py-4 space-y-6">
                <h2 className="text-2xl font-semibold">Latest Booking</h2>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                        <div className="size-16 rounded-full bg-gray-200 overflow-hidden  ">
                            <Image src={"/docPhotos/image (1).png"} alt="doctor Photo" width={100} height={20} className="bg-center"/>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">Dr. Richard James</p>
                            <p className="text-gray-400 text-sm">Booking on 5 Oct 2024 | 10:00 AM</p>
                        </div>
                    </div>
                    <div>
                        <button type="button" className="py-2 px-5 border rounded-md transition-colors duration-500 ease-in-out
                         hover:bg-red-600 hover:text-white cursor-pointer">Cancel</button>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                        <div className="size-16 rounded-full bg-gray-200 overflow-hidden  ">
                            <Image src={"/docPhotos/image (1).png"} alt="doctor Photo" width={100} height={20} className="bg-center"/>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">Dr. Richard James</p>
                            <p className="text-gray-400 text-sm">Booking on 5 Oct 2024 | 10:00 AM</p>
                        </div>
                    </div>
                    <p className="text-red-600">Cancelled</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                        <div className="size-16 rounded-full bg-gray-200 overflow-hidden  ">
                            <Image src={"/docPhotos/image (1).png"} alt="doctor Photo" width={100} height={20} className="bg-center"/>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">Dr. Richard James</p>
                            <p className="text-gray-400 text-sm">Booking on 5 Oct 2024 | 10:00 AM</p>
                        </div>
                    </div>
                    <p className="text-green-700">Completed</p>
                </div>
             </div>
         </section>
    )
}