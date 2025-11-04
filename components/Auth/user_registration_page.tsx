"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Inputs from "../inputs";
import { useRouter } from "next/navigation";
import { Route } from "next";
import { BASE_URL } from "@/base";
import { cookiesProps } from "@/utils/auth";

export interface userRegistrationForm {
  name: string;
  email: string;
  phone_no: string;
  dob: string;
  gender: "Male" | "Female" | null;
  address: string;
  profile_photo: FileList | undefined;
}

export default function User_Registration_Page({
  userReg,
}: {
  userReg: cookiesProps;
}) {
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
      phone_no: "",
      dob: "",
      gender: null,
      address: "",
      profile_photo: undefined,
    },
    mode: "onChange",
  });
  const today = new Date().toISOString().split("T")[0];
  const onSubmit: SubmitHandler<userRegistrationForm> = async(data) => {
    if (!userReg?._id) {
      console.log("id not found");
      route.push("/user/login" as Route);
      return;
    }
 
    const formData = new FormData();
    if (userReg?.name?.toLowerCase() !== data?.name.toLowerCase().trim()){
       formData?.append("name", data?.name);
    }
    if (data?.phone_no) formData?.append("phone_no", data?.phone_no);
    if (data?.dob) formData?.append("dob", data?.dob);
    if (data?.gender) formData?.append("gender", data?.gender);
    if (data?.address) formData?.append("address", data?.address);
    if (data?.profile_photo && data?.profile_photo[0]) {
      const file = data?.profile_photo[0];
      formData?.append("profile_photo", file);
       console.log("Appending file:", file.name, file.size, file.type);
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
      route.push("/user/profile" as Route);
      reset();
    } catch (error) {
      console.error("Update error:", error);
      alert("Update failed");
    }
  };
  return (
    <section className=" border border-gray-300 p-7 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold">Welcome</h1>
      <p className="text-[#5e5e5e] text-sm">let us know more about yourself</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
      >
        <Inputs
          inputType="text"
          label="Name"
          name="name"
          register={register}
          validation={{ required: "Name is Required" }}
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
          disabled={true}
        />
        <Inputs
          inputType="number"
          label="Phone No."
          name="phone_no"
          register={register}
          validation={{ required: "Phone is Required",pattern:{value:/^\d{10}$/,message:"Phone must be exactly 10 digits"} }}
          maxLength={10}
          placeholder="Enter your Phone"
          error={errors?.phone_no}
        />
        <Inputs
          inputType="date"
          label="Date of Birth"
          name="dob"
          register={register}
          validation={{ required: "DOB is Required",validate:(val)=> val && val <= today || "DOB cannot be in the future" }}
          placeholder="Enter your DOB."
          error={errors?.dob}
          max={today}
        />
        <div>
          <label htmlFor="genderid" className="text-[#5e5e5e] font-medium">
            Gender
          </label>
          <div className="relative flex items-center gap-x-2 mt-1">
            <Inputs
              inputType="radio"
              label="Male"
              name="gender"
              register={register}
              validation={{ required: "Gender is Required" }}
              divStyle="flex flex-row-reverse"
              labelStyle="text-sm"
            />
            <Inputs
              inputType="radio"
              label="Female"
              name="gender"
              register={register}
              validation={{ required: "Gender is Required" }}
              divStyle="flex flex-row-reverse"
              labelStyle="text-sm"
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
        <div>
          <label
            htmlFor="user_profile_photo"
            className="text-[#5e5e5e] font-medium"
          >
            Upload Photo
          </label>
          <input
            type="file"
            id="user_profile_photo"
            {...register("profile_photo")}
            className={
              "w-full py-2 px-3 border outline-0 rounded-md text-black/70 border-gray-300"
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
