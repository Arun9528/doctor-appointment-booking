import TopDoctorList from "@/components/topdoctorList";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "@/components/compoents_style_css/home.module.css"

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
    <main className="responsive_left-right_padding !py-5">
      <section className="bg-[#5f6fff] min-h-[calc(100vh-20rem)] lg:min-h-[calc(100vh-15rem)]  xl:min-h-[calc(100vh-10rem)] grid md:grid-cols-2 text-white rounded-lg">
        <div className="self-center space-y-5 px-5 lg:px-20">
          <h1 className={styles.header_text}>
            Book Appointment With Trusted Doctors
          </h1>
          <div className="flex max-lg:flex-col items-center max-sm:justify-center gap-x-4 max-sm:gap-y-3">
              <Image
                src={"/group_profiles.png"}
                alt="group_profile-photo"
                width={150}
                height={150}
                className="max-sm:w-[100px] min-sm:max-md:w-[120px] md:w-[150px] md:h-[40px]  max-md:h-auto object-contain"
                priority
              />
            <p className=" max-[400px]:text-[10px] min-[400px]:max-sm:text-xs lg:text-sm max-lg:text-center">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
          <Link
            href={"/doctors"}
            className="scale_animation text-xs lg:text-sm flex sm:justify-center items-center justify-self-center font-medium  bg-white text-black/80 rounded-4xl gap-x-1.5 w-fit px-7 md:gap-x-2 py-1.5 sm:py-2 lg:gap-x-3 xl:py-2.5 xl:gap-x-3.5 shrink-0 "
          >
            Book AppointMent <FaArrowRightLong />
          </Link>
        </div>
        <Image
          src={"/doc-header-img.png"}
          alt="group-of-doctors"
          className="justify-self-end self-end  "
          width={800}
          height={800}
          
          priority
        />
      </section>
      <section className="text-center space-y-10 h-96 flex flex-col justify-center">
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-medium">Find by Speciality</h2>
          <p className="text-[10px] sm:text-xs lg:text-sm text-[#4B5563] dark:text-white/80">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>
        <div className="center_content gap-x-5  max-sm:overflow-x-scroll my-scroll">
          {typeDoctor?.map((doc, i) => (
            <Link
              href={`/doctors/${
                doc === "General physician"
                  ? "general-physician"
                  : doc?.toLowerCase()
              }`}
              key={`${doc}-${i}`}
              className="space-y-2 transform_animation "
            >
              <div className="relative size-16 md:size-20 lg:size-24 overflow-hidden">
                <Image
                  src={`/doctorType/${doc?.replace(" ", "_")}.png`}
                  alt="typeofDoctor"
                  sizes="96px"
                  fill
                  // style={{objectFit:"cover",height:"auto",width:"100%"}}
                  priority
                />
              </div>
              <span className="text-[10px] md:text-xs font-medium">{doc}</span>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <div className="text-center">
          <h2 className="text-4xl lg:text-[40px] font-medium text-[#1F2937] dark:text-white">
            Top Doctors to Book
          </h2>
          <p className="text-[10px] sm:text-xs lg:text-sm text-[#4B5563] dark:text-white/80">
            Simply browse through our extensive list of trusted doctors.
          </p>
        </div>
        <TopDoctorList />
        <div className="text-center">
          <Link
            href={"/doctors"}
            className="py-2 px-7 bg-gray-200 text-[#4B5563] rounded-4xl cursor-pointer"
          >
            More
          </Link>
        </div>
      </section>
      <section className="bg-[#5f6fff] max-md:py-9 px-5 md:h-[380px] grid md:grid-cols-2 items-center rounded-lg md:px-10 mt-20 relative ">
        <div className="space-y-4">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold px-2">
            Book Appointment With 100+ Trusted Doctors
          </h2>
          <Link
            href={"/"}
            className="inline-block rounded-4xl bg-white text-[#4B5563] text-sm py-2 px-5  sm:py-3 sm:px-8 scale_animation "
          >
            Create Account
          </Link>
        </div>
        <div className= "hidden md:block absolute  right-0 -top-[98px]">
          <div className="relative w-[500px] h-[500px]">
          <Image
            src="/appointment-doc-img.png"
            alt="Girl Picture"
            fill
            priority
            sizes="(max-width: 768px) 80vw, 500px"
            className="object-contain  z-50"
          />
        </div>
        </div>
      </section>
    </main>
  );
}
