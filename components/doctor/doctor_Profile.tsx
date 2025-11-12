"use client";

import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import Inputs from "../inputs";
import { doctorData } from "@/lib/types";
import useGetCategory from "@/hooks/useGetCategory";
import TextArea_Component from "../textarea_component";
import Submit_Cancel_Form_Btn from "../submit_cancel_form_btn";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { BASE_URL } from "@/base";
import { useRouter } from "next/navigation";

interface DoctorProfileProps {
  doctorData: doctorData;
  handleClickModal: () => void;
}
export type doctorForm = Omit<doctorData,"category" | "patients_appointments" | "education"> &
 { category: string,education:{name:string}[] };
export default function Doctor_Profile({
  doctorData,
  handleClickModal,
}: DoctorProfileProps) {
  const route = useRouter();
  const getCategory = useGetCategory();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<doctorForm>({
    defaultValues: {
      name: doctorData?.name || "",
      gender: doctorData?.gender || undefined,
      age: doctorData?.age || 0,
      education: doctorData?.education ?? [""],
      experienceYears: doctorData?.experienceYears || 0,
      about: doctorData?.about || "",
      appointmentFee: doctorData?.appointmentFee || 0,
      category: doctorData?.category?._id || "",
      profile_photo: "",
      address: doctorData?.address || "",
      clinic_address: doctorData?.clinic_address || "",
      isAvailable: doctorData?.isAvailable || false,
    },
    mode: "onChange",
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });
  const onSubmit: SubmitHandler<doctorForm> = async(data) => {
   
    try {
       const formData = new FormData();
       
       if(data?.name) formData.append("name",data?.name);
       if(data?.gender) formData.append("gender",data?.gender);
       if(data?.age) formData.append("age",data?.age?.toString());
       if(data?.experienceYears) formData.append("experienceYears",data?.experienceYears?.toString())
       if(data?.about) formData.append("about",data?.about);
       if(data?.appointmentFee) formData.append("appointmentFee",data?.appointmentFee?.toString())
       if(data?.category) formData.append("category",data?.category);
       if(data?.address) formData.append("address",data?.address);
       if(data?.clinic_address) formData.append("clinic_address",data?.clinic_address);
       if(data?.isAvailable) formData.append("isAvailable",String(data?.isAvailable));
       if(data?.education && data?.education?.length > 0){
          data?.education?.forEach(edu => formData.append("education",edu?.name))
       }
       if(data?.profile_photo && data.profile_photo[0]){
        formData.append("profile_photo", data.profile_photo[0]);
       }
       const res = await fetch(`${BASE_URL}doctors/${doctorData?._id}`,{
        method:"PATCH",
        credentials:"include",
        body:formData
       })
      const contentType = res?.headers?.get("content-type");
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
      route.refresh();
      handleClickModal?.()
    } catch (error) {
       console.error("Update error:", error);
      alert("Update failed");
    }
  };
  useEffect(() => {
    if (doctorData && getCategory?.length > 0) {
      reset({ category: doctorData?.category?._id });
    }
  }, [getCategory]);
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Doctor Profile</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" gap-3 grid grid-cols-3"
      >
        <Inputs
          inputType="text"
          label="Name"
          name="name"
          register={register}
          validation={{ required: "Name is Required" }}
          placeholder="Name"
          error={errors?.name}
        />
        <Inputs
          inputType="number"
          label="Age"
          name={"age"}
          register={register}
          validation={{ required: "Age is Required" }}
          placeholder="Age"
          error={errors?.age}
        />

        <Inputs
          inputType="number"
          label="Experience"
          name={"experienceYears"}
          register={register}
          validation={{ required: "Experience is Required" }}
          placeholder="Experience"
          error={errors?.experienceYears}
        />
        <Inputs
          inputType="number"
          label="Appointment Fee"
          name={"appointmentFee"}
          register={register}
          validation={{ required: "Appointment Fee is Required" }}
          placeholder="appointmentFee"
          error={errors?.appointmentFee}
        />
        <Inputs
          inputType="text"
          label="Personal Address"
          name="address"
          register={register}
          validation={{ required: "Personal Address is Required" }}
          placeholder="Personal Address"
          error={errors?.address}
        />
        <Inputs
          inputType="text"
          label="Clinic Address"
          name="clinic_address"
          register={register}
          validation={{ required: "Clinic Address is Required" }}
          placeholder="Clinic Address"
          error={errors?.clinic_address}
        />
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[#5e5e5e] font-medium">Gender</h2>
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
          <div className="h-full content-end mb-3">
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="available"
                className="size-3.5"
                {...register("isAvailable")}
              />
              <label
                htmlFor="available"
                className="font-medium text-black/70 "
              >
                Available
              </label>
            </div>
          </div>
        </div>
        <div className="relative">
          <label
            htmlFor="doctor-specialist"
            className="block label-title pl-1 "
          >
            Specialist
          </label>
          <select
            id="doctor-specialist"
            defaultValue={doctorData?.category?._id ?? ""}
            {...register("category", { required: "Specialist is Required" })}
            className={`outline-0 border rounded-md px-3 py-2 w-full text-sm 
             ${errors?.category ? "border-red-500" : "border-gray-300"}`}
          >
            {getCategory?.map((spec) => (
              <option key={spec?._id} value={spec?._id}>
                {spec?.name}
              </option>
            ))}
          </select>
          {errors?.category && (
            <p className="text-red-500 text-xs sm:text-sm  absolute top-full">
              {errors?.category?.message}
            </p>
          )}
        </div>
        <div className="relative">
          <label htmlFor="doctor_profile_photo" className="label-title">
            Upload Photo
          </label>
          <input
            type="file"
            id="doctor_profile_photo"
            {...register("profile_photo")}
            className={
              "w-full py-2 px-3 border outline-0 rounded-md text-black/70 border-gray-300 text-sm"
            }
            accept="image/jpeg,image/png"
          />
        </div>

        <div className="col-span-3 ">
          <label className="block mb-1 label-title">Education(Degree)</label>
          <div className="grid grid-cols-3 gap-2">
            {fields?.map((field, i) => (
              <div key={field?.id} className="flex items-center gap-2 mb-2">
                <input
                  type="text"
                  {...register(`education.${i}` as const, {
                    required: "Degree is required",
                  })}
                  placeholder="Enter degree"
                  className="w-full py-2 px-3 border border-gray-300 outline-0 rounded-md text-sm"
                  inputMode="text"
                />{" "}
                <button
                  type="button"
                  onClick={() => remove(i)}
                  className=" size-5 bg-red-600 cursor-pointer text-white rounded-full flex justify-center items-center mt-1 shrink-0"
                >
                  <IoClose />
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => append({name:""})}
            className="text-blue-500 text-sm mt-1 cursor-pointer"
          >
            + Add another degree
          </button>

          {errors.education && (
            <p className="text-red-500 text-sm">
              {errors.education.message as string}
            </p>
          )}
        </div>
        <TextArea_Component
          label="About"
          name="about"
          register={register}
          validation={{ required: "About is Required" }}
          placeholder="Write Something About yourself."
          error={errors?.about}
          divStyle="col-span-3"
        />
        <Submit_Cancel_Form_Btn
          handleClickModal={handleClickModal}
          isSubmitting={isSubmitting}
          divStyle="justify-center col-span-3"
        />
      </form>
    </section>
  );
}
