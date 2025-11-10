"use client";

import {
  FieldError,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { doctorCancelForm } from "./doctor/doctor_cancel_modal";
import { doctorForm } from "./doctor/doctor_Profile";

interface textAreaProps<T extends doctorCancelForm | doctorForm> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  validation: RegisterOptions<T, Path<T>>;
  error: FieldError | undefined;
  placeholder: string;
  divStyle?:string;
}
export default function TextArea_Component<T extends doctorCancelForm | doctorForm>({
  label,
  register,
  validation,
  name,
  error,
  placeholder,divStyle = ""
}: textAreaProps<T>) {
  return (
    <div className={`relative ${divStyle}`}>
      <label htmlFor={label} className="text-[#5e5e5e] font-medium pl-1">
        {label}
      </label>
      <textarea
        {...register(name, validation)}
        id={label}
        rows={4}
        className="w-full border border-gray-300 rounded-lg shadow-md p-3 outline-none focus:border-sky-600 text-sm"
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
