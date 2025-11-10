import { BASE_URL, IMAGE_URL } from "@/base";
import EditProfile from "@/components/editProfile";
import { doctorData } from "@/lib/types";
import CheckingAuth from "@/utils/checkingAuth";
import { Metadata, Route } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Doctor Profile",
  description: "Thsi Page Show doctor Profile",
};
export default async function DoctorProfile() {
  try {
    const doctorAuth = await CheckingAuth();
    if (!doctorAuth?._id) {
      redirect("/doctor-login" as Route);
    }
    const res = await fetch(`${BASE_URL}doctors/${doctorAuth?._id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`fetching error ${res?.status}`);
    const doctorDetails: doctorData = await res.json();
    return (
      <section className="p-5 space-y-4">
        <EditProfile authData={doctorAuth}  ProfileData={doctorDetails} isUserProfile={false}/>
        <div className="justify-items-center">
            <Image
              src={`${IMAGE_URL}${doctorDetails?.profile_photo}`}
              alt="doctor Profile Photo"
              width={176}
              height={176}
              className="size-44 rounded-full bg-gray-100 object-contain shadow-md bg-center "
              unoptimized
            />
          <h1 className="text-2xl font-semibold">{doctorDetails?.name}</h1>
        </div>

        <div className="grid grid-cols-2 border border-gray-300 rounded-2xl p-4 shadow-md">
          <p>
            <span className="doctor-details-heading">Age: </span>
            <span className="doctor-details-title">
              {doctorDetails?.age}
            </span>
          </p>
          <p>
            <span className="doctor-details-heading">Gender: </span>
            <span className="doctor-details-title">
              {doctorDetails?.gender}
            </span>
          </p>
          <p>
            <span className="doctor-details-heading">Specialist: </span>
            <span className="doctor-details-title">
              {doctorDetails?.category?.name}
            </span>
          </p>
          <p>
            <span className="doctor-details-heading">Education: </span>
            {doctorDetails?.education?.map((edu, i) => (
              <span key={`${edu}-${i}`} className="doctor-details-title">
                {edu}{", "}
              </span>
            ))}
          </p>
          <p>
            <span className="doctor-details-heading">Experience: </span>
            <span className="doctor-details-title">
              {doctorDetails?.experienceYears} Years
            </span>
          </p>
          <p>
            <span className="doctor-details-heading">Appointment fee: </span>
            <span className="doctor-details-title">
              &#8377;{doctorDetails?.appointmentFee}
            </span>
          </p>
          <p>
            <span className="doctor-details-heading">Personal Address: </span>
            <span className="doctor-details-title ">
              {doctorDetails?.address}
            </span>
          </p>
          <p>
            <span className="doctor-details-heading">Clinic Address: </span>
            <span className="doctor-details-title ">
              {doctorDetails?.clinic_address}
            </span>
          </p>
        </div>

        <div className="border border-gray-300 rounded-2xl p-4 shadow-md">
          <p className="doctor-details-heading">About</p>
          <p className="doctor-details-title">
            {doctorDetails?.about}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            minima consectetur unde delectus velit quo iusto doloremque cumque
            veniam autem, provident nesciunt mollitia! Sed similique, illum
            placeat molestiae facilis odio aspernatur perspiciatis ullam. Minus
            excepturi voluptatum possimus ut? Sit accusamus illum eaque ea
            repudiandae hic nulla, animi saepe explicabo beatae ullam ducimus
            dolore nisi quo magni.
          </p>
        </div>

        <p className="flex items-center my-3 gap-x-1">
          <span
            className={`size-3 rounded-full block ${
              doctorDetails?.isAvailable ? "bg-green-600" : "bg-red-600"
            }`}
          ></span>
          <span className="font-medium text-sm text-black/90"> {doctorDetails?.isAvailable ? "Available" : "Not Available" }</span>
        </p>
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
    );
  }
}
