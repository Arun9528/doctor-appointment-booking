import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Profile",
  description: "This is User Profile Page ",
};
export default function UserProfile() {
  return (
    <main className="px-20 flex flex-col items-center pt-10 gap-3">
      <Image
        src={"/dog.png"}
        alt="User Profile Photo"
        width={170}
        height={100}
      />
      <h2 className="text-2xl text-[#5e5e5e]  font-bold">User Name</h2>
      <section className="grid grid-cols-2 justify-between w-full gap-x-6 mt-5">
        <div className="border border-gray-300 rounded-lg shadow-md  p-3">
          <h3 className="font-semibold text-lg">Contact Information</h3>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <p>
              <span className="text-[#5e5e5e] font-medium">Email Id : </span>{" "}
              <span>test@gmail.com</span>
            </p>
            <p className="justify-self-end">
              <span className="text-[#5e5e5e] font-medium">Phone : </span>{" "}
              <span>9999999999</span>
            </p>
            <p>
              <span className="text-[#5e5e5e] font-medium">Address : </span>{" "}
              <span>AECS Layout Xyz,xyz, India</span>
            </p>
          </div>
        </div>
        <div  className="border border-gray-300 rounded-lg shadow-md  p-3">
            <h3 className="font-semibold text-lg">Basic Information</h3>
            <div className="grid grid-cols-2 gap-2 mt-4">
                 <p>
                    <span className="text-[#5e5e5e] font-medium">Gender : </span>{" "}
                    <span>Male</span>
                 </p>
                 <p>
                    <span className="text-[#5e5e5e] font-medium">DOB : </span>{" "}
                    <span>20/10/1995</span>
                 </p>
                 
            </div>
        </div>
      </section>
    </main>
  );
}
