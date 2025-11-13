"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Inputs from "../inputs";
import { useRouter } from "next/navigation";
import { Route } from "next";
import { BASE_URL } from "@/lib/config";
import { cookiesProps } from "@/utils/auth";
import { UserData } from "@/lib/types";

export interface userRegistrationForm {
  name: string;
  email: string;
  phone_no: string;
  age: string;
  gender: "Male" | "Female" | null;
  address: string;
  profile_photo: FileList | string | undefined;
}
interface userRegistrationProps {
  userReg: cookiesProps;
  userData?: UserData | null;
  isEdit: boolean;
  headingTitle: string;
  handleClickModal?: () => void;
}
export default function User_Registration_Page({
  userReg,
  isEdit = false,
  headingTitle = " ",
  userData,
  handleClickModal,
}: userRegistrationProps) {
  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<userRegistrationForm>({
    defaultValues: {
      name: userReg?.name,
      email: userReg?.email,
      phone_no: userData?.phone_no || "",
      age: userData?.age || "",
      gender: userData?.gender || null,
      address: userData?.address || "",
      profile_photo: undefined,
    },
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<userRegistrationForm> = async (data) => {
    if (!userReg?._id) {
      console.log("id not found");
      route.push("/user/login" as Route);
      return;
    }

    const formData = new FormData();
    if (userReg?.name?.toLowerCase() !== data?.name.toLowerCase().trim()) {
      formData?.append("name", data?.name);
    }
    if (isEdit && data?.email) formData?.append("email", data?.email);
    if (data?.phone_no) formData?.append("phone_no", data?.phone_no);
    if (data?.age) formData?.append("age", data?.age);
    if (data?.gender) formData?.append("gender", data?.gender);
    if (data?.address) formData?.append("address", data?.address);
    if (data?.profile_photo && data?.profile_photo[0]) {
      const file = data?.profile_photo[0];
      formData?.append("profile_photo", file);
    }

    try {
      const res = await fetch(`${BASE_URL}users/${userReg?._id}`, {
        method: "PATCH",
        body: formData,
        credentials: "include",
      });
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await res.text();
        console.error("Non-JSON response:", text);
        alert("Server error - check console");
        return;
      }
      const updated = await res.json();
      if (!res?.ok) {
        alert(updated?.message || "Update failed");
        return;
      }
      if (!isEdit) {
        route.push("/user/profile" as Route);
      } else {
        route.refresh();
      }
      handleClickModal?.();
      reset();
    } catch (error) {
      console.error("Update error:", error);
      alert("Update failed");
    }
  };
  return (
    <section
      className={`${
        isEdit
          ? ""
          : "border border-gray-300 dark:border-gray-700 p-7 rounded-lg shadow-md w-72 min-[400px]:max-[500px]:w-96 min-[500px]:max-sm:w-md sm:w-xl md:w-[46rem] lg:w-[62rem] max-sm:my-10 "
      }
     `}
    >
      <h1 className="text-3xl font-bold">{headingTitle || "Welcome"}</h1>
      {!isEdit && (
        <p className="text-[#5e5e5e] dark:text-white/80 text-sm">
          let us know more about yourself
        </p>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={` grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6`}
      >
        <Inputs
          inputType="text"
          label="Name"
          name="name"
          register={register}
          validation={{
            required: "Name is Required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters ",
            },
          }}
          placeholder="Enter your Name."
          error={errors?.name}
        />
        <Inputs
          inputType="email"
          label="Email"
          name="email"
          register={register}
          validation={{ required: "Email is Required" }}
          placeholder="Enter your Email."
          error={errors?.email}
          disabled={!isEdit}
        />
        <Inputs
          inputType="number"
          label="Phone No."
          name="phone_no"
          register={register}
          validation={{
            required: "Phone is Required",
            pattern: {
              value: /^\d{10}$/,
              message: "Phone must be exactly 10 digits",
            },
          }}
          maxLength={10}
          placeholder="Enter your Phone"
          error={errors?.phone_no}
        />
        <Inputs
          inputType="number"
          label="Age"
          name="age"
          register={register}
          validation={{ required: "Age is Required" }}
          placeholder="Enter your Age."
          error={errors?.age}
        />
        <div>
          <h2 className="text-[#5e5e5e] dark:text-white font-medium">Gender</h2>
          <div className="relative flex items-center gap-x-2 mt-1">
            <Inputs
              inputType="radio"
              label="Male"
              name="gender"
              register={register}
              validation={{ required: "Gender is Required" }}
              divStyle="flex flex-row-reverse"
              labelStyle="text-sm"
              value="Male"
            />
            <Inputs
              inputType="radio"
              label="Female"
              name="gender"
              register={register}
              validation={{ required: "Gender is Required" }}
              divStyle="flex flex-row-reverse"
              labelStyle="text-sm"
              value={"Female"}
            />
            {errors?.gender && (
              <p className="text-red-500 text-xs  absolute top-full">
                {errors?.gender?.message}
              </p>
            )}
          </div>
        </div>
        <Inputs
          inputType="text"
          label="Address"
          name="address"
          register={register}
          validation={{ required: "Address is Required" }}
          placeholder="Enter your Address."
          error={errors?.address}
        />
        <div className="relative">
          <label
            htmlFor="user_profile_photo"
            className="text-[#5e5e5e] font-medium dark:text-white"
          >
            Upload Photo
          </label>
          <input
            type="file"
            id="user_profile_photo"
            {...register("profile_photo")}
            className={
              "w-full py-2 px-3 border outline-0 rounded-md text-black/70 dark:text-white/80 border-gray-300 "
            }
            accept="image/jpeg,image/png"
          />
        </div>
        <button
          type="submit"
          className="bg-sky-600 text-white rounded-md text-sm cursor-pointer w-20 h-9 self-end justify-self-end"
        >
          Save
        </button>
      </form>
    </section>
  );
}
