"use client";

import { AnimatePresence } from "motion/react";
import { useState } from "react";
import Modal from "./modal";
import User_Registration_Page from "./Auth/user_registration_page";
import { cookiesProps } from "@/utils/auth";
import { doctorData, UserData } from "@/lib/types";
import Doctor_Profile from "./doctor/doctor_Profile";
interface EditUserProfileProps<T extends UserData | doctorData> {
  authData: cookiesProps;
  ProfileData: T;
  isUserProfile: boolean;
}
export default function EditProfile<T extends UserData | doctorData>({
  authData,
  ProfileData,
  isUserProfile = false,
}: EditUserProfileProps<T>) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleClickModal = () => setShowModal((prev) => !prev);
  return (
    <div>
      <button
        type="button"
        className="bg-sky-600 text-white rounded-lg text-sm max-sm:px-2 max-sm:py-1.5 sm:px-4 py-2 cursor-pointer absolute 
        right-3 sm:right-5 lg:right-10 max-sm:top-3 max-sm:text-xs"
        onClick={handleClickModal}
      >
        Edit Profile
      </button>
      <AnimatePresence mode="wait">
        {showModal && (
          <Modal handleClickModal={handleClickModal} sectionStyle={`${isUserProfile ? "" : "overflow-y-scroll max-md:!h-[42rem] w-72 min-[400px]:max-md:w-96 md:w-3xl lg:w-5xl" }`}>
            {isUserProfile ? (<User_Registration_Page
              isEdit={true}
              headingTitle="Edit Profile"
              userReg={authData}
              userData={ProfileData as UserData}
              handleClickModal={handleClickModal}
            />) :
             (<Doctor_Profile doctorData={ProfileData as doctorData} handleClickModal={handleClickModal} />)}
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
