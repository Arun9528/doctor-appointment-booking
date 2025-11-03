import { BASE_URL } from "@/base";
import { UserData } from "@/lib/types";
import CheckingAuth from "@/utils/checkingAuth";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Profile",
  description: "This is User Profile Page ",
};
export default async function UserProfile() {
  try {
    const userAuth = await CheckingAuth();
    console.log(userAuth)
    if(!userAuth){
      throw new Error(`Not authenticated`);
    }
    const res = await fetch(`${BASE_URL}users/${userAuth?._id}`,{method:"GET",credentials:"include"});
    if (!res.ok) throw new Error(`fetching failed ${res?.status}`);
    const UserProfileData:UserData = await res.json();
    console.log(UserProfileData);
    
    return (
      <section className="px-20 flex flex-col items-center pt-10 gap-3">
        <Image
          src={`${userAuth?.photo || "/dog.png" }`}
          alt="User Profile Photo"
          width={170}
          height={100}
        />
        <h2 className="text-2xl text-[#5e5e5e]  font-bold capitalize">{userAuth?.name}</h2>
        <section className="grid grid-cols-2 justify-between w-full gap-x-6 mt-5">
          <div className="border border-gray-300 rounded-lg shadow-md  p-3">
            <h3 className="font-semibold text-lg">Contact Information</h3>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <p>
                <span className="text-[#5e5e5e] font-medium">Email Id : </span>{" "}
                <span>{userAuth?.email}</span>
              </p>
              <p className="justify-self-end">
                <span className="text-[#5e5e5e] font-medium">Phone : </span>{" "}
                <span>{UserProfileData?.phone_no}</span>
              </p>
              <p>
                <span className="text-[#5e5e5e] font-medium">Address : </span>{" "}
                <span>{UserProfileData?.address}</span>
              </p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg shadow-md  p-3">
            <h3 className="font-semibold text-lg">Basic Information</h3>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <p>
                <span className="text-[#5e5e5e] font-medium">Gender : </span>{" "}
                <span>{UserProfileData?.gender}</span>
              </p>
              <p>
                <span className="text-[#5e5e5e] font-medium">DOB : </span>{" "}
                <span>{UserProfileData?.dob}</span>
              </p>
            </div>
          </div>
        </section>
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
