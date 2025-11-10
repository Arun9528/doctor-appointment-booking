"use client";

import { useState } from "react";
import {
  FieldError,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { loginForm } from "./Auth/loginIn";
import { signUpForm } from "./Auth/userSignUp";
import { AddDocForm } from "./adding_Doctor";
import { doctorForm } from "./doctor/doctor_Profile";
import { userRegistrationForm } from "./Auth/user_registration_page";
import { doctorCancelForm } from "./doctor/doctor_cancel_modal";

interface InputsProps<
  T extends
    | loginForm
    | signUpForm
    | AddDocForm
    | userRegistrationForm
    | doctorCancelForm
    | doctorForm
> {
  inputType: string;
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  validation?: RegisterOptions<T, Path<T>>;
  error?: FieldError | undefined;
  placeholder?: string;
  divStyle?: string;
  disabled?: boolean;
  labelStyle?: string;
  maxLength?: number;
  max?:string | number;
  value?: "Male" | "Female" | null
}
export default function Inputs<
  T extends
    | loginForm
    | signUpForm
    | AddDocForm
    | userRegistrationForm
    | doctorCancelForm
    | doctorForm
>({
  inputType,
  label,
  name,
  register,
  validation,
  error,
  placeholder = "",
  divStyle = "",
  disabled = false,
  labelStyle = " ",
  maxLength,max = "",value = null
}: InputsProps<T>) {
  const [showPwd, setShowPwd] = useState<boolean>(false);
  const handleClick = () => {
    setShowPwd((prev) => !prev);
  };
  let inputMode:
    | React.HTMLAttributes<HTMLInputElement>["inputMode"]
    | undefined;
  if (inputType === "number" || inputType === "tel") inputMode = "numeric";
  else if (inputType === "email") inputMode = "email";
  else if (inputType === "text") inputMode = "text";
  else inputMode = undefined; 
  return (
    <div className={`relative ${divStyle}`}>
      <label
        htmlFor={`${label}-${inputType}`}
        className={`text-[#5e5e5e] font-medium pl-1 ${labelStyle}`}
      >
        {label}
      </label>
      <input
        type={
          inputType === "password" ? (showPwd ? "text" : "password") : inputType
        }
        id={`${label}-${inputType}`}
        {...register(name, validation)}
        placeholder={placeholder}
        className={`w-full py-2 px-3 border outline-0 rounded-md text-sm
        ${error ? "border-red-500" : "border-gray-300"}
        ${disabled ? "bg-gray-300 cursor-not-allowed text-gray-500" : ""}
        `}
        autoComplete="off"
        disabled={disabled}
        inputMode={inputMode}
        maxLength={maxLength || undefined}
        max={max || undefined}
        value={value || undefined}
      />
      {error && (
        <p className="text-red-500 text-xs  absolute top-full">
          {error?.message}
        </p>
      )}
      {inputType === "password" && (
        <button
          type="button"
          className={`absolute right-3.5 top-1/2 translate-1  cursor-pointer
         ${error ? "text-red-500" : "text-black/80"}`}
          onClick={handleClick}
        >
          {showPwd ? <FaEye /> : <FaEyeSlash />}
        </button>
      )}
    </div>
  );
}
