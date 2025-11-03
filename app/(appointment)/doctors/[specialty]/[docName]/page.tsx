import { BASE_URL, IMAGE_URL } from "@/base";
import SidebarSuggestion from "@/components/doctorAppointmentPage/sidebarSuggestion";
import Modal from "@/components/modal";
import { doctorData } from "@/lib/types";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default async function DocAppointment(props: PageProps<"/doctors/[specialty]/[docName]">){
  try {
    const specialtyName = (await props?.params)?.specialty;
    const getId = await props?.searchParams;
    const res = await fetch(`${BASE_URL}doctors/${getId?.id}`)
    if(!res.ok) throw new Error(`fetching error ${res?.status}`)
    const doctorDetails:doctorData = await res?.json();
    return (
        <main className=" min-h-[calc(100vh-3.8rem)] px-20 pt-10 space-y-3.5">
      <h1 className="text-2xl font-bold ">Details</h1>
      <section className="grid grid-cols-[75%_23%] gap-x-7">
        <section className="space-y-6">
          <div className="border border-gray-200 rounded-lg flex items-center justify-between shadow-lg p-5">
            <div className="flex items-center gap-x-10">
              <Image
                src={`${IMAGE_URL}${doctorDetails?.profile_photo}`}
                alt="Doctor Photo"
                width={150}
                height={150}
                unoptimized
                className="object-cover"
                priority
              />
              <div className="space-y-2">
                <h3 className="font-medium text-xl">{doctorDetails?.name}</h3>
                <p className="text-gray-500 flex items-center gap-x-2 text-sm">
                  <FaGraduationCap className="text-lg" />
                  {doctorDetails?.education?.map(edu=> <span key={edu}>{edu},</span>)}
                  <span>{doctorDetails?.experienceYears} Years of Experience</span>
                </p>
                <p className="text-gray-500 flex items-center gap-x-2 text-sm">
                  <FaLocationDot />
                  <span>{doctorDetails?.clinic_address}</span>
                </p>
                <p className="text-[10px] text-sky-500 font-semibold bg-[#CFE4F7] px-3 py-1 w-fit rounded-4xl capitalize">
                  {specialtyName?.replace("-", " ")}
                </p>
              </div>
            </div>
            <Modal doctorId={getId.id as string}/>
          </div>
          <div className="border border-gray-200 rounded-lg p-5 shadow-lg space-y-2">
            <h2 className="text-xl font-bold ">About Me</h2>
            <p className="text-[#5e5e5e] text-sm">
              {doctorDetails?.about} Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Delectus esse maxime enim fuga temporibus. A corporis
              voluptatum dicta, reprehenderit praesentium mollitia fugiat
              dolorem quisquam blanditiis doloribus, ullam, earum iure obcaecati
              ipsum expedita. Quasi mollitia enim autem totam excepturi tempora
              ducimus similique voluptatem, eum dolor aut. Voluptatem aliquam
              quidem aspernatur corrupti. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quam sapiente quidem repellendus
              inventore accusamus! Asperiores officia, illum exercitationem
              animi consequatur consequuntur velit. Et sint voluptate maiores
              commodi suscipit quas adipisci error modi, at, sit qui
              consequuntur delectus aperiam cum praesentium tempore. Praesentium
              nisi dolorem consectetur consequuntur unde, odit ullam magnam.
            </p>
          </div>
        </section>
       <SidebarSuggestion specialty={specialtyName}/>
      </section>
    </main>
    )
   
  } catch (error) {
    const typeError = error as Error
     console.error("error",error)
        return (
            <div className="min-h-screen center_content">
             <h1 className="text-lg sm:text-2xl: md:text-3xl lg:text-4xl font-semibold">{typeError?.message}</h1>
          </div>
        )
  }
}
