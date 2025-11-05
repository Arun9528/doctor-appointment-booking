"use client";

import { AnimatePresence } from "motion/react";
import { useState } from "react";
import Modal from "../modal";
import User_Registration_Page from "../Auth/user_registration_page";
import { cookiesProps } from "@/utils/auth";
import { UserData } from "@/lib/types";
interface EditUserProfileProps {
  userData: cookiesProps;
  userProfileData: UserData;
}
export default function EditUserProfile({
  userData,
  userProfileData,
}: EditUserProfileProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleClickModal = () => setShowModal((prev) => !prev);
  return (
    <div>
      <button
        type="button"
        className="bg-sky-600 text-white rounded-lg text-sm px-4 py-2 cursor-pointer absolute right-20"
        onClick={handleClickModal}
      >
        Edit Profile
      </button>
      <AnimatePresence mode="wait">
        {showModal && (
          <Modal handleClickModal={handleClickModal} >
            <User_Registration_Page
              isEdit={true}
              headingTitle="Edit Profile"
              userReg={userData}
              userData={userProfileData}
              handleClickModal={handleClickModal}
            />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
