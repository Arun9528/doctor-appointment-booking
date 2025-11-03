import Doctor_Profile from "@/components/doctor_Profile";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Doctor Profile",
  description: "Thsi Page Show doctor Profile",
};
export default function DoctorProfile(){
    return (
      <Doctor_Profile/>
        // <section className="p-4">
        //    <div className="relative  w-fit bg-sky-400 rounded-lg overflow-hidden ">
        //      <Image src={"/docPhotos/image (1).png"} alt="doctor Profile Photo" width={180} height={100} className="object-cover"/>
        //    </div>
        //    <h1 className="text-2xl font-semibold">Dr. Richard James</h1>
        //    <div className="flex items-center gap-x-3.5 text-[#5e5e5e] text-sm">
        //         <p>MBBS - General Physician</p>
        //         <p className="px-4 py-1 border border-gray-300 rounded-2xl">4 Years</p>
        //    </div>
        //    <div>
        //      <p className="text-gray-600 font-semibold">About</p>
        //      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil minima consectetur unde delectus velit quo iusto doloremque cumque veniam autem, provident nesciunt mollitia! Sed similique, illum placeat molestiae facilis odio aspernatur perspiciatis ullam. Minus excepturi voluptatum possimus ut? Sit accusamus illum eaque ea repudiandae hic nulla, animi saepe explicabo beatae ullam ducimus dolore nisi quo magni, consequatur illo reprehenderit expedita laudantium pariatur iste eius error ad porro! Earum atque fuga laudantium illum obcaecati? Pariatur, corrupti! Aperiam voluptas magnam suscipit tempore iure sint dolores accusantium hic recusandae ad minima debitis laudantium, praesentium minus. Consequatur necessitatibus natus sed sint molestiae blanditiis perspiciatis.</p>
        //    </div>
        //    <p>
        //     <span className="text-[#5e5e5e] font-medium">Appointment fee: </span>
        //     <span className="font-medium text-black/90">$100</span>
        //    </p>
        //    <p>
        //       <span className="text-[#5e5e5e] font-medium">Address: </span>
        //       <span className="font-medium text-black/90">24, Main Street, xyz, Xyz</span>
        //     </p>
            
        // </section>
    )
}