import { Metadata } from "next"
import Image from "next/image"

export const metadata:Metadata = {
    title:"Doctors Appointments",
    description:"In This Page All Appointments doctors Received by Patients."
}
export default function DoctorsAppointments(){
  return (
    <section className="p-5">
        <h1 className="text-2xl font-bold ">All Appointments</h1>
        <div className="border rounded-lg overflow-hidden mt-6">
            <table className="w-full table-fixed border-collapse ">
            <thead>
                <tr className="border-b bg-gray-100">
                    <th className="w-20">Sr.No</th>
                    <th>Patient Name</th>
                    <th className="w-20">Age</th>
                    <th className="w-52">Date & Time</th>
                    <th>Doctor</th>
                    <th className="w-20">Fees</th>
                    <th className="w-36">Action</th>
                </tr>
            </thead>
              <tbody className="">
                 {[...Array(10)].map((_,i)=> (
                     <tr className="text-center border-b hover:bg-gray-100/70 transition-colors duration-500 ease-in-out cursor-pointer text-sm" key={i}>
                        <td>{i + 1}</td>
                        <td className="flex justify-center items-center gap-x-2.5">
                            <p className="size-10 rounded-full overflow-hidden">
                                <Image src={"/dog.png"} alt="Patient Photo" width={70} height={50}/>
                            </p>
                            <span>John Doe</span>
                        </td>
                         <td>31</td>
                         <td>5 Oct 2025,12:00 PM</td>
                         <td className="flex justify-center items-center gap-x-2.5 ">
                             <p className="size-10 rounded-full overflow-hidden bg-gray-200">
                                <Image src={"/docPhotos/image (1).png"} alt="Patient Photo" width={50} height={50}/>
                            </p>
                            <span>Dr. Richard James</span>
                         </td>
                         <td>$100</td>
                         {/* <td className="text-red-600 font-medium">Cancelled</td> */}
                         {/* <td className="text-green-600 font-medium">Completed</td> */}
                         <td>
                            <button type="button" className="py-2 px-5 border rounded-md transition-colors duration-500 ease-in-out
                         hover:bg-red-600 hover:text-white cursor-pointer">Cancel</button>
                         </td>
                    </tr>
                 ))}
                </tbody>
        </table>
        </div>
    </section>
  )
}