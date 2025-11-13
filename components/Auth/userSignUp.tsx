"use client";

import { BASE_URL } from "@/lib/config";
import Inputs from "@/components/inputs";
import { Route } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
export interface signUpForm {
  name:string;
  email: string;
  password: string;
  confirmPassword:string;
}
export default function UserSignUp(){
  const route = useRouter()
  const {
    handleSubmit,
    register,watch,
    formState: { errors },reset,
  } = useForm<signUpForm>({
    defaultValues: {
      name: "",
      email:"",
      password: "",
      confirmPassword:""
    },
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<signUpForm> = async(data) => {
   
    try {
     
      const res = await fetch(`${BASE_URL}users/sign-up`,{method:"POST",headers:{ "Content-Type": "application/json",},
        body:JSON.stringify({name:data?.name,email:data?.email,password:data?.confirmPassword}),credentials:"include"})
       
      const result = await res?.json()
      if (!res.ok) {
        console?.error("Signup failed:", result?.message);
        alert(result?.message || "Signup failed");
        return;
      }
      route?.replace ("/user/registration" as Route);
       reset();
    } catch (error) {
      console?.error("Network error:", error);
      alert("Something went wrong. Check console.");
    }
    reset()
  };
  return (
    <section className="w-fit  py-8 px-7 border border-gray-300 dark:border-gray-600 rounded-lg space-y-4 shadow-xl">
      <h2 className="text-3xl text-center font-bold text-[#5e5e5e] dark:text-white">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}  className="space-y-3.5">
        <Inputs
          inputType="text"
          label="Name"
          name="name"
          register={register}
          validation={{ required: "Name is Required",minLength:{value:3,message:"Name Must be at least 3 Charcter"} }}
          placeholder="Enter your Name."
          error={errors?.name}
          divStyle="w-60 min-[400px]:max-sm:w-72 sm:w-80"
        />
        <Inputs
          inputType="email"
          label="Email"
          name="email"
          register={register}
          validation={{ required: "Email is Required",pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:"Please enter a valid email format"} }}
          placeholder="Enter your Email."
          error={errors?.email}
          divStyle="w-60 min-[400px]:max-sm:w-72 sm:w-80"
        />
        <Inputs
          inputType="password"
          label="Password"
          name="password"
          register={register}
          validation={{ required: "Password is Required",minLength:{value:8,message:"Password must be at least 8 char"}}}
          placeholder="Enter your Password."
          error={errors?.password}
          divStyle="w-60 min-[400px]:max-sm:w-72 sm:w-80"
        />
        <Inputs
          inputType="password"
          label="Confrim Password"
          name="confirmPassword"
          register={register}
          validation={{ required: "Confirm Password is Required",minLength:{value:8,message:"Password must be at least 8 char"},
            validate:{
                checkMatch: (val) => {
                    const getValue = watch("password");
                    return val?.toLowerCase()?.trim() === getValue?.toLowerCase()?.trim() || "Password Not Match"
                }
            }
          }}
          placeholder="Re-enter your Password."
          error={errors?.confirmPassword}
          divStyle="w-60 min-[400px]:max-sm:w-72 sm:w-80"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-[#5f6fff] text-white py-1.5 sm:py-2 cursor-pointer font-medium mt-2 max-sm:text-sm"
        >
          Get Started
        </button>
      </form>
      <p className="text-sm text-[#5e5e5e]">
        Aleardy have a account? &nbsp;
        <Link
          href={"/user/login" as Route}
          className="underline-offset-1 underline text-[#5f6fff]"
        >
          Click here
        </Link>
      </p>
    </section>
  );
}