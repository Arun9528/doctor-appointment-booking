"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Inputs from "../inputs";
import { useRouter } from "next/navigation";
import { Route } from "next";

export interface userRegistrationForm {
  name: string;
  email: string;
  phone_no: number | null;
  dob: string;
  gender: "Male" | "Female" | null;
  address: string;
  profile_photo: string;
}
export default function User_Registration_Page() {
  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },reset,
  } = useForm<userRegistrationForm>({
    defaultValues: {
        name:"",
        email:"",
        phone_no:null,
        dob:"",
        gender: null,
        address:"",
        profile_photo:""
    },
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<userRegistrationForm> = (data) => {
    console.log(data);
    route.replace("/user/login" as Route)
  };
  return (
    <section className=" border border-gray-300 p-7 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="text-[#5e5e5e] text-sm">let us know more about yourself</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-9"
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
        />
        <Inputs
          inputType="number"
          label="Phone No."
          name="phone_no"
          register={register}
          validation={{ required: "Phone is Required" }}
          placeholder="Enter your Phone"
          error={errors?.email}
        />
        <Inputs
          inputType="date"
          label="Date of Birth"
          name="dob"
          register={register}
          validation={{ required: "DOB is Required" }}
          placeholder="Enter your DOB."
          error={errors?.dob}
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
            <label htmlFor="user_profile_photo" className="text-[#5e5e5e] font-medium" >Upload Photo</label>
            <input type="file" id="user_profile_photo" {...register("profile_photo")} 
            className={"w-full py-2 px-3 border outline-0 rounded-md text-black/70 border-gray-300"}
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
