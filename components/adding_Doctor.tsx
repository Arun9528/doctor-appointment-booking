"use client";

import { Controller, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import Inputs from "./inputs";
import { FiUser } from "react-icons/fi";
import { useEffect, useState } from "react";
import Image from "next/image";
import { doctorData } from "@/lib/types";
import useGetCategory from "@/hooks/useGetCategory";
import TextArea_Component from "./textarea_component";
import { IoClose } from "react-icons/io5";
import { timeSlots } from "@/public/timeSlotsList";
import SortTimeSlots from "@/utils/sorttimeSlots";
import { BASE_URL } from "@/lib/config";
export type newDoctorForm = Omit<doctorData,"profile_photo" | "category" | "patients_appointments" | "education"> &
 { category: string,profile_photo:FileList | null,education:{name:string;}[]}
export default function AddingDoctor() {
  const [preview, setPreview] = useState<string | null>(null);
  const getCategory = useGetCategory();
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,control,trigger,setError,reset
  } = useForm<newDoctorForm>({
    defaultValues: {
       name:"",
       gender:undefined,
       email:"",
       password:"",
       age:null,
       education:[{name:""}],
       experienceYears:null,
       about:"",
       appointmentFee:null,
       category:"",
       profile_photo:null,
       booking_time_Slots:[],
       address:"",
       clinic_address:"",
       isAvailable:false
    },
    mode: "onChange",
  });
  const selectedFiles = watch("profile_photo");
  const selectedFile = selectedFiles?.[0];
  const {append,remove,fields} = useFieldArray({control,name:"education"})
  const onSubmit: SubmitHandler<newDoctorForm> = async(data) => {
    try {
       const formData = new FormData();
       if(data?.name) formData.append("name",data?.name);
       if(data?.email) formData.append("email",data?.email);
       if(data?.password) formData.append("password",data?.password);
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
       if(data?.profile_photo && data?.profile_photo[0]){
        formData.append("profile_photo", data?.profile_photo[0]);
       }
       if(data?.booking_time_Slots && data?.booking_time_Slots?.length > 0){
          const sorted = SortTimeSlots(data?.booking_time_Slots)
          sorted?.forEach(time => formData.append("booking_time_Slots",time))
       }
       const res  = await fetch(`${BASE_URL}admin/doctor`,{
        method:"POST",
        credentials:"include",
        body:formData
       });
       const contentType = res?.headers?.get("content-type");
       if (!contentType || !contentType.includes("application/json")) {
        const text = await res.text();
        console.error("Non-JSON response:", text);
        alert("Server error - check console");
        return;
      }
      
      if (!res?.ok) {
        const updated = await res.json();
        alert(updated?.message || "Update failed");
        return;
      }
      reset()
    } catch (error) {
        console.error("Update error:", error);
        alert("Update failed");
    }

  };
  useEffect(() => {
    if (selectedFile instanceof File && selectedFile?.type?.startsWith("image/")) {
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

  const handleAppend = async()=>{
    const lastFieldIndex = fields?.length - 1;
    const lookUp = `education.${lastFieldIndex}.name` as const
    const isValid = await trigger(lookUp);
    if(!isValid){
        setError(lookUp,{type:"manual",message:"Please fill this field if u  want to add another field. "})
    }else{
      append({name:""})
    }
  }
  return (
    <section className="border border-gray-300 dark:border-gray-800 px-5 py-8 rounded-lg shadow-sm mt-3.5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <div className="relative md:col-span-2 lg:col-span-3 flex flex-col items-center">
          <div className="relative w-fit cursor-pointer">
            <input
              type="file"
              id="doctorPhoto"
              {...register("profile_photo", { required: "Photo is Required" })}
              className=" hidden"
              accept="image/jpeg,image/png"
            />
            <label
              htmlFor="doctorPhoto"
              className={`relative overflow-hidden block border size-20 rounded-full bg-gray-100 cursor-pointer
                ${errors.profile_photo ? "border-red-500"  : "border-gray-400"}`}
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
          {errors?.profile_photo && (
            <p className="text-red-500 text-xs  absolute top-full">
              {errors?.profile_photo?.message}
            </p>
          )}
        </div>
        <Inputs
          inputType="text"
          label="Name"
          name="name"
          register={register}
          validation={{ required: "Name is Required" ,minLength:{value:3,message:"Name Must be at least 3 Charcter"}}}
          placeholder="Name"
          error={errors?.name}
        />
        
       <div className="relative">
          <label
            htmlFor="doctor-specialist"
            className="block label-title pl-1 "
          >
            Specialist
          </label>
          <select
            id="doctor-specialist"
            {...register("category", { required: "Specialist is Required" })}
            className={`outline-0 border rounded-md px-3 py-2 w-full text-sm  text-black/90 dark:text-white/80
             ${errors?.category ? "border-red-500" : "border-gray-300"}`}
          >
            {<option value="">Select Specialist</option>}
            {getCategory?.map((spec) => (
              <option key={spec?._id} value={spec?._id}>
                {spec?.name}
              </option>
            ))}
          </select>
          {errors?.category && (
            <p className="text-red-500 text-xs  absolute top-full">
              {errors?.category?.message}
            </p>
          )}
        </div>
        <Inputs
          inputType="eamil"
          label="Email"
          name="email"
          register={register}
          validation={{ required: "Email is Required",pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message:"Please enter a valid email format"}}}
          placeholder="Email"
          error={errors?.email}
        />
        <Inputs
          inputType="password"
          label="Password"
          name="password"
          register={register}
          validation={{ required: "Password is Required" ,minLength:{value:8,message:"Password must be at least 8 char"}}}
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
          inputType="text"
          label="Clinic Address"
          name="clinic_address"
          register={register}
          validation={{ required: "Clinic Address is Required" }}
          placeholder="Clinic Address"
          error={errors?.clinic_address}
        />        
        <Inputs
          inputType="number"
          label="Experience"
          name="experienceYears"
          register={register}
          validation={{ required: "Experience is Required",min:{value:1,message:"Experience is Required"} }}
          placeholder="Experience "
          error={errors?.experienceYears}
        />
        <Inputs
          inputType="number"
          label="Appointment Fee"
          name="appointmentFee"
          register={register}
          validation={{ required: "Fees is Required",min:{value:100,message:"doctor fees at aleast 100 rupess."} }}
          placeholder="Doctor Fees"
          error={errors?.appointmentFee}
        />
        <Inputs
          inputType="number"
          label="Age"
          name={"age"}
          register={register}
          validation={{ required: "Age is Required",min:{value:18,message:"doctor Age at least be 18 years old."} }}
          placeholder="Age"
          error={errors?.age}
        />        
        <div className="  md:col-span-2 grid  grid-cols-1  min-[400px]:grid-cols-2">
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
          <div className="h-full  content-end mb-3 relative">
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="available"
                className="size-3.5"
                {...register("isAvailable",{validate:(val)=> Boolean(val) || "isAvailable should be checked"})}
              />
              <label
                htmlFor="available"
                className="font-medium text-black/70 dark:text-white "
              >
                Available
              </label>
            </div>
            {errors?.isAvailable && (
                    <p className="text-red-500 text-xs absolute top-full">
                      {errors?.isAvailable?.message }
                    </p>
                )}
          </div>
        </div>  
        <div className="md:col-span-2 lg:col-span-3 relative">
           <p className="label-title ">TimeSlot</p>
           <Controller
            name="booking_time_Slots"
            control={control}
            defaultValue={[]}
            rules={{validate:(v:string[] | undefined)=> (Array.isArray(v) && v?.length > 1) || "Please select a time slot"}}
            render={({field})=>{
              const { value = [],onChange} = field;
              const toggle = (slot:string)=>{
                const exists = value?.includes(slot);
                if(exists){
                  onChange(value.filter((s) => s !== slot));
                  return ;
                }
                onChange([...value,slot]);
              }
              return (
                <div className={`flex flex-wrap z items-center gap-3 p-2 border rounded-md  text-black/80 dark:text-white/80
                ${errors?.booking_time_Slots ? "border-red-500" : "border-gray-300 dark:border-gray-800"}`}>
               {timeSlots?.map((time,i) => {
                const isSelected = value?.includes(time);
                
                return (
                  <button key={`${time}-${i}`} type="button" 
                  onClick={()=> toggle(time)}
                  // disabled = {isSelected}
                  // aria-disabled={isSelected}
                  aria-pressed= {isSelected}
                  aria-label={`${isSelected ? "Unselect" : "Select"} ${time}`}
               className={`border p-2 rounded-md text-xs lg:text-sm cursor-pointer duration-300 transition-colors ease-in-out 
                ${isSelected ? "bg-sky-600 text-white" : "hover:bg-sky-500 hover:text-white border-gray-300 dark:border-gray-800"}`}>
                  {time}</button>
                )
               })}
           </div>
              )
            }}
           />
            {errors?.booking_time_Slots && (
              <p className="text-red-600 text-xs absolute top-full">{errors?.booking_time_Slots?.message as string}</p>
            )}
        </div>   
        <div className="md:col-span-2 lg:col-span-3 relative">
          <label className="block mb-1 label-title">Education(Degree)</label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {fields?.map((field, i) => (
              <div key={field?.id} className="flex items-center gap-2 mb-2 relative shrink-0">
                <input
                  type="text"
                  {...register(`education.${i}.name` as const, {
                    required: "Degree is required",minLength:{value:2,message:"Must be at least 2 characters"}
                  })}
                  defaultValue={field?.name}
                  placeholder="Enter degree"
                  className={`w-full py-2 px-3 border outline-0 rounded-md text-sm 
                    ${errors.education?.[i]?.name  ? "border-red-500" : "border-gray-300"}`}
                  inputMode="text"
                />{" "}
                {
                  fields.length > 1 && (
                    <button
                  type="button"
                  onClick={() => remove(i)}
                  className=" size-5 bg-red-600 cursor-pointer text-white rounded-full flex justify-center items-center"
                >
                  <IoClose />
                </button>
                  )
                }
                {errors.education?.[i]?.name && (
                    <p className="text-red-500 text-xs absolute top-full">
                      {errors.education?.[i]?.name?.message }
                    </p>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handleAppend}
            className="text-blue-500 text-sm mt-2 cursor-pointer"
          >
            + Add another degree
          </button>

          {errors?.education && (
            <p className="text-red-500 text-xs absolute top-full">
              {errors?.education?.message as string}
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
          divStyle="md:col-span-2 lg:col-span-3"
        />        
        <div>
          <button
            type="submit"
            className="bg-sky-600 text-white px-5 py-2 pt mt-1 rounded-md text-sm cursor-pointer"
          >
            Submit{" "}
          </button>
        </div>
      </form>
    </section>
  );
}
