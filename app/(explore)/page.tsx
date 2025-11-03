import TopDoctorList from "@/components/topdoctorList";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";


export const typeDoctor = [
  "General physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatricians",
  "Neurologist",
  "Gastroenterologist",
];
export default function Home() {
  return (
    <main className="px-20 py-5">
      <section className="bg-[#5f6fff] min-h-[calc(100vh-10rem)] grid grid-cols-2 text-white rounded-lg px-5">
        <div className="self-center space-y-5 px-20">
          <h1 className="text-[50px] font-bold leading-14">
            Book Appointment With Trusted Doctors
          </h1>
          <div className="flex items-center gap-x-4">
            <div className="flex items-center">
              <Image
                src={"/group_profiles.png"}
                alt="group_profile-photo"
                width={150}
                height={30}
                priority
              />
            </div>
            <p className="text-sm">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
          <Link
            href={"/doctors"}
            className="scale_animation w-50 text-sm flex justify-center items-center gap-x-3.5 bg-white text-black/80 rounded-4xl py-3"
          >
            Book AppointMent <FaArrowRightLong />
          </Link>
        </div>
        <Image
          src={"/doc-header-img.png"}
          alt="group-of-doctors"
          className="justify-self-end self-end"
          width={700}
          height={500}
          priority
        />
      </section>
      <section className="text-center space-y-10 h-96 flex flex-col justify-center">
        <div className="space-y-3">
          <h2 className="text-[40px] font-medium">Find by Speciality</h2>
          <p className="text-sm text-[#4B5563]">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>
        <div className="center_content gap-x-5">
          {typeDoctor?.map((doc, i) => (
            <Link
              href={`/doctors/${doc === "General physician" ? "general-physician" : doc?.toLowerCase()}`}
              key={`${doc}-${i}`}
              className="space-y-2 transform_animation"
            >
              <Image
                src={`/doctorType/${doc?.replace(" ", "_")}.png`}
                alt="typeofDoctor"
                width={100}
                height={50}
                priority
              />
              <span className="text-xs font-medium">{doc}</span>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <div className="text-center">
          <h2 className="text-[40px] font-medium text-[#1F2937]">
            Top Doctors to Book
          </h2>
          <p className="text-sm text-[#4B5563]">
            Simply browse through our extensive list of trusted doctors.
          </p>
        </div>
        <TopDoctorList/>
        <div className="text-center">
          <Link href={"/doctors"}
            className="py-2 px-7 bg-gray-200 text-[#4B5563] rounded-4xl cursor-pointer"
          >
            More
          </Link>
        </div>
      </section>
      <section className="bg-[#5f6fff] h-[380px] grid grid-cols-2 items-center rounded-lg px-10 mt-20">
        <div className="space-y-4">
          <h2 className="text-white text-4xl font-bold px-2">
            Book Appointment With 100+ Trusted Doctors
          </h2>
          <Link
            href={"/"}
            className="inline-block rounded-4xl bg-white text-[#4B5563] text-sm py-3 px-8 scale_animation "
          >
            Create Account
          </Link>
        </div>
       <div className="relative  h-full">
         <Image src={"/appointment-doc-img.png"} alt="girl Picture"  width={480} height={100} priority className="absolute bottom-0 right-0 z-50" />
       </div>
      </section>
    </main>
  );
}
