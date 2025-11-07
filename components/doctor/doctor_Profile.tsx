"use client";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddDocForm } from "../adding_Doctor";
import Inputs from "../inputs";
import { typeDoctor } from "@/app/(explore)/page";
export type ProfileProps = Omit<AddDocForm, "password">;
export default function Doctor_Profile() {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [savedData, setSavedData] = useState<ProfileProps | null>(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ProfileProps & { isAvaible: boolean }>({
    defaultValues: {
      docPhoto: null,
      name: "",
      speciality: "General physician",
      email: "",
      degree: "MBBS",
      address: "",
      experience: null,
      fees: null,
      about: "",
      isAvaible: false,
    },
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<ProfileProps & { isAvaible: boolean }> = (
    data
  ) => {
    setSavedData(data);
    console.log(data);
  };
  if (!savedData && !isEdit) {
    return (
      <section className="p-4">
        <div className="justify-items-center col-span-2">
          <div className="relative  w-fit bg-sky-400 rounded-lg overflow-hidden border  ">
            <Image
              src={"/docPhotos/image (1).png"}
              alt="doctor Profile Photo"
              width={180}
              height={100}
              className="object-cover"
            />
          </div>
        </div>
        <h1 className="text-2xl font-semibold">Dr. Richard James</h1>

        <div className="flex items-center gap-x-3.5 text-[#5e5e5e] text-sm">
          <p>MBBS - General Physician</p>

          <p className="px-4 py-1 border border-gray-300 rounded-2xl">
            4 Years
          </p>
        </div>

        <p>
          <span className="text-[#5e5e5e] font-medium">Appointment fee: </span>
          <span className="font-medium text-black/90 text-sm">$100</span>
        </p>
        <p>
          <span className="text-[#5e5e5e] font-medium">Address: </span>
          <span className="font-medium text-black/90 text-sm ">
            24, Main Street, xyz, Xyz
          </span>
        </p>

        <p className="text-gray-600 font-semibold">About</p>
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil minima
          consectetur unde delectus velit quo iusto doloremque cumque veniam
          autem, provident nesciunt mollitia! Sed similique, illum placeat
          molestiae facilis odio aspernatur perspiciatis ullam. Minus excepturi
          voluptatum possimus ut? Sit accusamus illum eaque ea repudiandae hic
          nulla, animi saepe explicabo beatae ullam ducimus dolore nisi quo
          magni, consequatur illo reprehenderit expedita laudantium pariatur
          iste eius error ad porro! Earum atque fuga laudantium illum obcaecati?
          Pariatur, corrupti! Aperiam voluptas magnam suscipit tempore iure sint
          dolores accusantium hic recusandae ad minima debitis laudantium,
          praesentium minus. Consequatur necessitatibus natus sed sint molestiae
          blanditiis perspiciatis.
        </p>

        <p className="flex items-center my-3 gap-x-1">
          <span className="size-3 rounded-full bg-red-600 block"></span>
          <span className="font-medium text-sm text-black/90"> Available</span>
        </p>

        <button
          type="button"
          className="py-1.5 px-7 rounded-md bg-sky-600 text-white cursor-pointer  "
          onClick={() => setIsEdit((prev) => !prev)}
        >
          Edit
        </button>
      </section>
    );
  }
  return (
    <section className="p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 gap-x-3 grid grid-cols-2"
      >
        <div className="justify-items-center col-span-2">
          <div className="relative  w-fit bg-sky-400 rounded-lg overflow-hidden border  ">
            <Image
              src={"/docPhotos/image (1).png"}
              alt="doctor Profile Photo"
              width={180}
              height={100}
              className="object-cover"
            />
          </div>
        </div>
        {/* <h1 className="text-2xl font-semibold">Dr. Richard James</h1> */}
        <div>
          <Inputs
            inputType="text"
            label=""
            name="name"
            register={register}
            validation={{ required: "Name is Required" }}
            placeholder="Name"
            error={errors?.name}
            divStyle="w-96"
          />
        </div>
        <div className="flex items-center gap-x-3.5 text-[#5e5e5e] text-sm">
          {/* <p>MBBS - General Physician</p> */}
          <Inputs
            inputType="text"
            label=""
            name="degree"
            register={register}
            validation={{ required: "Degree is Required" }}
            error={errors.degree}
            disabled={isEdit}
          />
          -
          <div className="relative">
            <select
              id="specialityDoc"
              {...register("speciality", {
                required: "Speciality is Required",
              })}
              className={`outline-0 border rounded-md w-full py-[9px] px-3 text-black/70 
                ${errors?.speciality ? "border-red-500" : "border-gray-300"}`}
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
            inputType="number"
            label=""
            name="experience"
            register={register}
            validation={{ required: "Experience is Required" }}
            placeholder="Experience "
            error={errors?.experience}
          />
          {/* <p className="px-4 py-1 border border-gray-300 rounded-2xl">
            4 Years
          </p> */}
        </div>
        <Inputs
          inputType="number"
          label=""
          name="fees"
          register={register}
          validation={{ required: "Fees is Required" }}
          placeholder="Doctor Fees"
          error={errors?.fees}
          // divStyle="w-sm flex items-center"
          // labelStyle="w-52"
        />
        {/* <p>
          <span className="text-[#5e5e5e] font-medium">Appointment fee: </span>
          <span className="font-medium text-black/90">$100</span>
        </p> */}
        {/* <p>
        <span className="text-[#5e5e5e] font-medium">Address: </span>
        <span className="font-medium text-black/90 ">
          24, Main Street, xyz, Xyz
        </span>
      </p> */}
        {/* <div>
          <label htmlFor="" className="text-[#5e5e5e] font-medium ">
            Address:{" "}
          </label>
          <input
            type="text"
            name=""
            id=""
            value={"24, Main Street, xyz, Xyz"}
            className=" px-3 py-2 rounded-md"
            disabled={isEdit}
          />
        </div> */}
        <Inputs
          inputType="text"
          label=""
          name="address"
          register={register}
          validation={{ required: "Address is Required" }}
          placeholder="Address"
          error={errors?.address}
          // divStyle="w-full flex items-center"
          // labelStyle="w-24"
        />

        <div className="col-span-2">
          {/* <p className="text-gray-600 font-semibold">About</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            minima consectetur unde delectus velit quo iusto doloremque cumque
            veniam autem, provident nesciunt mollitia! Sed similique, illum
            placeat molestiae facilis odio aspernatur perspiciatis ullam. Minus
            excepturi voluptatum possimus ut? Sit accusamus illum eaque ea
            repudiandae hic nulla, animi saepe explicabo beatae ullam ducimus
            dolore nisi quo magni, consequatur illo reprehenderit expedita
            laudantium pariatur iste eius error ad porro! Earum atque fuga
            laudantium illum obcaecati? Pariatur, corrupti! Aperiam voluptas
            magnam suscipit tempore iure sint dolores accusantium hic recusandae
            ad minima debitis laudantium, praesentium minus. Consequatur
            necessitatibus natus sed sint molestiae blanditiis perspiciatis.
          </p> */}
          <div className="relative ">
            {/* <label
              htmlFor="aboutDoc"
              className="text-[#5e5e5e] font-medium pl-1 block"
            >
              About
            </label> */}
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
        </div>

        <div className="flex items-center gap-x-1 mb-2  ">
          <input
            type="checkbox"
            name="DocAvaible"
            id="available"
            className="size-3.5"
          />
          <label
            htmlFor="available"
            className="font-medium text-sm text-black/90"
          >
            Available
          </label>
        </div>
        <button
          type="submit"
          className="py-1.5 px-7 rounded-md bg-sky-600 text-white cursor-pointer  "
        >
          Save
        </button>
      </form>
    </section>
  );
}
