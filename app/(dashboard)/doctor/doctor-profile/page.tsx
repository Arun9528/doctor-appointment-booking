import { BASE_URL } from "@/base";
import Doctor_Profile from "@/components/doctor/doctor_Profile";
import CheckingAuth from "@/utils/checkingAuth";
import { Metadata, Route } from "next";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Doctor Profile",
  description: "Thsi Page Show doctor Profile",
};
export default async function DoctorProfile(){
  try {
     const cookieStore = await cookies();
      const userAuth = await CheckingAuth();
      if (!userAuth?._id) {
           redirect("/doctor-login" as Route );
         }
     const res = await fetch(`${BASE_URL}doctor/${userAuth?._id}`,{
      method:"GET",
      headers:{"Content-Type":"application/json"},
      credentials:"include",
      cache:"no-store"
     })
     if(!res.ok) throw new Error (`fetching error ${res?.status}`)
     const doctorDetails = await res.json();
    console.log(doctorDetails)
    return (
    <section className="p-4">
      <div className="justify-items-center col-span-2">
        <div className="relative  w-fit bg-sky-400 rounded-lg overflow-hidden border  ">
          <Image
            src={"/docPhotos/image (1).png"}
            alt="doctor Profile Photo"
            width={180}
            height={100}
            className="object-cover"
          />
        </div>
      </div>
      <h1 className="text-2xl font-semibold">Dr. Richard James</h1>

      <div className="flex items-center gap-x-3.5 text-[#5e5e5e] text-sm">
        <p>MBBS - General Physician</p>

        <p className="px-4 py-1 border border-gray-300 rounded-2xl">4 Years</p>
      </div>

      <p>
        <span className="text-[#5e5e5e] font-medium">Appointment fee: </span>
        <span className="font-medium text-black/90 text-sm">$100</span>
      </p>
      <p>
        <span className="text-[#5e5e5e] font-medium">Address: </span>
        <span className="font-medium text-black/90 text-sm ">
          24, Main Street, xyz, Xyz
        </span>
      </p>

      <p className="text-gray-600 font-semibold">About</p>
      <p className="text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil minima
        consectetur unde delectus velit quo iusto doloremque cumque veniam
        autem, provident nesciunt mollitia! Sed similique, illum placeat
        molestiae facilis odio aspernatur perspiciatis ullam. Minus excepturi
        voluptatum possimus ut? Sit accusamus illum eaque ea repudiandae hic
        nulla, animi saepe explicabo beatae ullam ducimus dolore nisi quo magni,
        consequatur illo reprehenderit expedita laudantium pariatur iste eius
        error ad porro! Earum atque fuga laudantium illum obcaecati? Pariatur,
        corrupti! Aperiam voluptas magnam suscipit tempore iure sint dolores
        accusantium hic recusandae ad minima debitis laudantium, praesentium
        minus. Consequatur necessitatibus natus sed sint molestiae blanditiis
        perspiciatis.
      </p>

      <p className="flex items-center my-3 gap-x-1">
        <span className="size-3 rounded-full bg-red-600 block"></span>
        <span className="font-medium text-sm text-black/90"> Available</span>
      </p>

      <button
        type="button"
        className="py-1.5 px-7 rounded-md bg-sky-600 text-white cursor-pointer  "
        //  onClick={() => setIsEdit((prev) => !prev)}
      >
        Edit
      </button>
      <Doctor_Profile/>
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
      )
  }
  
}
