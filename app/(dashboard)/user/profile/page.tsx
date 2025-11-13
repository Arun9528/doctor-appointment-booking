import { BASE_URL, IMAGE_URL } from "@/lib/config";
import EditUserProfile from "@/components/editProfile";
import { UserData } from "@/lib/types";
import CheckingAuth from "@/utils/checkingAuth";
import { Metadata, Route } from "next";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "Profile",
  description: "This is User Profile Page ",
};
export const dynamic = "force-dynamic";
export default async function UserProfile() {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore
      ?.getAll()
      ?.map((c) => `${c?.name}=${c?.value}`)
      .join("; ");
    const userAuth = await CheckingAuth();

    if (!userAuth?._id) {
      redirect("/user/login" as Route);
    }
    const res = await fetch(`${BASE_URL}users/${userAuth?._id}`, {
      method: "GET",
      headers: { cookie: cookieHeader || "" },
      cache: "no-store",
    });
    if (!res.ok) {
      if (res.status === 401) {
        redirect("/user/login" as Route);
      }
      throw new Error(`fetching failed ${res?.status}`);
    }
    const UserProfileData: { user: UserData } = await res.json();
    return (
      <section className="responsive_left-right_padding flex flex-col items-center !pt-10 gap-3 relative">
      <EditUserProfile authData={userAuth}  ProfileData={UserProfileData?.user} isUserProfile={true}/>
        <Image
          src={userAuth?.photo ? `${IMAGE_URL}${userAuth.photo}` : "/dog.png"}
          alt="User Profile Photo"
          width={200}
          height={200}
          unoptimized
          loading="eager"
          className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-cover rounded-full"
        />
        <h2 className="text-2xl text-[#5e5e5e] dark:text-white font-bold capitalize">
          {userAuth?.name}
        </h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 sm:justify-between w-full max-sm:gap-y-6 sm:gap-x-6 mt-5">
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg shadow-md  p-3">
            <h3 className="font-semibold text-lg">Contact Information</h3>
            <div className="grid lg:grid-cols-2 gap-2 mt-4">
              <p>
                <span className="text-[#5e5e5e] font-medium">Email Id : </span>{" "}
                <span>{userAuth?.email}</span>
              </p>
              <p className="">
                <span className="text-[#5e5e5e] font-medium">Phone : </span>{" "}
                <span>{UserProfileData?.user?.phone_no}</span>
              </p>
              <p>
                <span className="text-[#5e5e5e] font-medium">Address : </span>{" "}
                <span>{UserProfileData?.user?.address}</span>
              </p>
            </div>
          </div>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg shadow-md  p-3">
            <h3 className="font-semibold text-lg">Basic Information</h3>
            <div className="grid lg:grid-cols-2 gap-2 mt-4">
              <p>
                <span className="text-[#5e5e5e] font-medium">Gender : </span>{" "}
                <span>{UserProfileData?.user?.gender}</span>
              </p>
              <p>
                <span className="text-[#5e5e5e] font-medium">Age : </span>{" "}
                <span>{UserProfileData?.user?.age} Year</span>
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
