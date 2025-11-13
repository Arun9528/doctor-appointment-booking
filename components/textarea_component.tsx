"use client";

import {
  FieldError,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { doctorCancelForm } from "./doctor/doctor_cancel_modal";
import { doctorForm } from "./doctor/doctor_Profile";
import { newDoctorForm } from "./adding_Doctor";

interface textAreaProps<T extends doctorCancelForm | doctorForm | newDoctorForm> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  validation: RegisterOptions<T, Path<T>>;
  error: FieldError | undefined;
  placeholder: string;
  divStyle?:string;
}
export default function TextArea_Component<T extends doctorCancelForm | doctorForm | newDoctorForm>({
  label,
  register,
  validation,
  name,
  error,
  placeholder,divStyle = ""
}: textAreaProps<T>) {
  return (
    <div className={`relative ${divStyle}`}>
      <label htmlFor={label} className="text-[#5e5e5e] dark:text-white font-medium pl-1">
        {label}
      </label>
      <textarea
        {...register(name, validation)}
        id={label}
        rows={4}
        className={`w-full border  rounded-lg shadow-md p-3 outline-none  text-sm
          ${error ? "border-red-500" : "border-gray-300"}`}
        placeholder={placeholder}
      ></textarea>
      {error && (
        <p className="text-red-500 text-xs  absolute top-full">
          {error?.message}
        </p>
      )}
    </div>
  );
}
