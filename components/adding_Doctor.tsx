"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Inputs from "./inputs";
import { typeDoctor } from "@/app/(explore)/page";
import { FiUser } from "react-icons/fi";
import { useEffect, useState } from "react";
import Image from "next/image";

export interface AddDocForm {
  docPhoto: FileList | null;
  name: string;
  speciality: string;
  email: string;
  degree: string;
  password: string;
  address: string;
  experience: number | null;
  fees: number | null;
  about: string;
}
export default function AddingDoctor() {
  const [preview, setPreview] = useState<string | null>(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<AddDocForm>({
    defaultValues: {
      docPhoto: null,
      name: "",
      speciality: "",
      email: "",
      degree: "",
      password: "",
      address: "",
      experience: null,
      fees: null,
      about: "",
    },
    mode: "onChange",
  });
  const selectedFiles = watch("docPhoto");
  const selectedFile = selectedFiles?.[0];
  const onSubmit: SubmitHandler<AddDocForm> = (data) => {
    console.log(data, data?.docPhoto?.[0]);
  };
  useEffect(() => {
    if (
      selectedFile instanceof File &&
      selectedFile?.type?.startsWith("image/")
    ) {
      const newPreview = URL?.createObjectURL(selectedFile);
      setPreview(newPreview);
    } else {
      setPreview(null);
    }

    // Cleanup previous URL
    return () => {
      if (preview) {
        URL?.revokeObjectURL(preview);
      }
    };
  }, [selectedFile]); // Only depend on selectedFile to avoid loops
  return (
    <section className="border border-gray-300 px-5 py-8 rounded-lg shadow-sm mt-3.5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-7"
      >
        <div className="relative col-span-3 flex flex-col items-center">
          <div className="relative w-fit cursor-pointer">
            <input
              type="file"
              id="doctorPhoto"
              {...register("docPhoto", { required: "Photo is Required" })}
              className=" hidden"
              accept="image/jpeg,image/png"
            />
            <label
              htmlFor="doctorPhoto"
              className="relative overflow-hidden block border border-gray-400 size-20 rounded-full bg-gray-100 cursor-pointer"
            >
              {preview ? (
                <Image
                  src={preview}
                  alt="Doctor Photo Preview"
                  fill
                  className="object-cover"
                />
              ) : (
                <FiUser className="absolute top-1/2 -translate-1/2 left-1/2 -translate-y-1/2 text-2xl text-gray-500" />
              )}
            </label>
          </div>
          <p className="text-[#5e5e5e] font-medium text-lg">Uplaod Doctor</p>
          {errors?.docPhoto && (
            <p className="text-red-500 text-xs sm:text-sm  absolute top-full">
              {errors?.docPhoto?.message}
            </p>
          )}
        </div>
        <Inputs
          inputType="text"
          label="Name"
          name="name"
          register={register}
          validation={{ required: "Name is Required" }}
          placeholder="Name"
          error={errors?.name}
        />
        <div className="relative">
          <label
            htmlFor="specialityDoc"
            className="text-[#5e5e5e] font-medium pl-1 block"
          >
            Speciality
          </label>
          <select
            id="specialityDoc"
            {...register("speciality", { required: "Speciality is Required" })}
            className={`outline-0 border rounded-md w-full py-2.5 px-3 text-black/70 
                     ${
                       errors?.speciality ? "border-red-500" : "border-gray-300"
                     }`}
          >
            <option value="">Select Speciality</option>
            {typeDoctor?.map((d, i) => (
              <option key={`${d}-${i}`} value={d}>
                {d}
              </option>
            ))}
          </select>
          {errors?.speciality && (
            <p className="text-red-500 text-xs sm:text-sm  absolute top-full">
              {errors?.speciality?.message}
            </p>
          )}
        </div>
        <Inputs
          inputType="eamil"
          label="Email"
          name="email"
          register={register}
          validation={{ required: "Email is Required" }}
          placeholder="Email"
          error={errors?.email}
        />
        <Inputs
          inputType="text"
          label="Degree"
          name="degree"
          register={register}
          validation={{ required: "Degree is Required" }}
          placeholder="Degree"
          error={errors?.degree}
        />
        <Inputs
          inputType="password"
          label="Password"
          name="password"
          register={register}
          validation={{ required: "Password is Required" }}
          placeholder="Password"
          error={errors?.password}
        />
        <Inputs
          inputType="text"
          label="Address"
          name="address"
          register={register}
          validation={{ required: "Address is Required" }}
          placeholder="Address"
          error={errors?.address}
        />
        <Inputs
          inputType="number"
          label="Experience"
          name="experience"
          register={register}
          validation={{ required: "Experience is Required" }}
          placeholder="Experience "
          error={errors?.experience}
        />
        <Inputs
          inputType="number"
          label="Fees"
          name="fees"
          register={register}
          validation={{ required: "Fees is Required" }}
          placeholder="Doctor Fees"
          error={errors?.fees}
        />
        <div className="relative col-span-3">
          <label
            htmlFor="aboutDoc"
            className="text-[#5e5e5e] font-medium pl-1 block"
          >
            About
          </label>
          <textarea
            {...register("about", { required: "About is Required" })}
            id="aboutDoc"
            rows={4}
            className={` w-full border  rounded-lg p-3 outline-none ${
              errors?.about ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="About"
          ></textarea>
          {errors?.about && (
            <p className="text-red-500 text-xs sm:text-sm  absolute top-full">
              {errors?.about?.message}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="bg-sky-600 text-white px-5 py-2 rounded-md text-sm cursor-pointer"
          >
            Submit{" "}
          </button>
        </div>
      </form>
    </section>
  );
}
