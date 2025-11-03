"use client"

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
import { ProfileProps } from "./doctor_Profile";
import { userRegistrationForm } from "./Auth/user_registration_page";

interface InputsProps<T extends loginForm | signUpForm | AddDocForm | ProfileProps | userRegistrationForm> {
  inputType: string;
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  validation?: RegisterOptions<T, Path<T>>;
  error?: FieldError | undefined;
  placeholder?: string;
  divStyle?: string;
  disabled?:boolean;
  labelStyle?:string;
}
export default function Inputs<T extends loginForm | signUpForm | AddDocForm | ProfileProps | userRegistrationForm>({
  inputType,
  label,
  name,
  register,
  validation,
  error,
  placeholder = "",
  divStyle = "",disabled = false,labelStyle = " "
}: InputsProps<T>) {
    const [showPwd,setShowPwd] = useState<boolean>(false);
    const handleClick = ()=>{
        setShowPwd(prev => !prev)
    } 
  return (
    <div className={`relative ${divStyle}`}>
      <label htmlFor={`${label}-${inputType}`} className={`text-[#5e5e5e] font-medium pl-1 ${labelStyle}`}>{label}</label>
      <input
        type={inputType === "password" ? showPwd ? "text" : "password" : inputType}
        id={`${label}-${inputType}`}
        {...register(name, validation)}
        placeholder={placeholder}
        className={`w-full py-2 px-3 border outline-0 rounded-md text-black/70 
        ${error ? "border-red-500" : "border-gray-300"}`}
        autoComplete="off"
        disabled = {disabled}
      />
      {error && (
        <p className="text-red-500 text-xs  absolute top-full">
          {error?.message}
        </p>
      )}
      {inputType === "password" && (
        <button type="button" className={`absolute right-3.5 top-1/2 translate-1  cursor-pointer
         ${error ? "text-red-500" : "text-black/80"}`} onClick={handleClick}>
            {showPwd ? <FaEye/> : <FaEyeSlash/>}
        </button>
      )}
    </div>
  );
}
