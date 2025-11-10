"use client";

import { BASE_URL } from "@/base";
import Inputs from "@/components/inputs";
// import { useUser } from "@/hooks/userProvider";
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
  // const {setUser} = useUser();
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
      console.log("Signup success:", result);
      // setUser(result?.user)
     
      route?.replace ("/user/registration" as Route);
       reset();
    } catch (error) {
      console?.error("Network error:", error);
      alert("Something went wrong. Check console.");
    }
    reset()
  };
  return (
    <section className="w-fit  py-8 px-7 border border-gray-300 rounded-lg space-y-4 shadow-xl">
      <h2 className="text-3xl text-center font-bold text-[#5e5e5e]">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}  className="space-y-3.5">
        <Inputs
          inputType="text"
          label="Name"
          name="name"
          register={register}
          validation={{ required: "Name is Required" }}
          placeholder="Enter your Name."
          error={errors?.name}
          divStyle="w-80"
        />
        <Inputs
          inputType="text"
          label="Email"
          name="email"
          register={register}
          validation={{ required: "Email is Required" }}
          placeholder="Enter your Email."
          error={errors?.email}
          divStyle="w-80"
        />
        <Inputs
          inputType="password"
          label="Password"
          name="password"
          register={register}
          validation={{ required: "Password is Required" }}
          placeholder="Enter your Password."
          error={errors?.password}
          divStyle="w-80"
        />
        <Inputs
          inputType="password"
          label="Confrim Password"
          name="confirmPassword"
          register={register}
          validation={{ required: "Confirm Password is Required",
            validate:{
                checkMatch: (val) => {
                    const getValue = watch("password");
                    return val?.toLowerCase()?.trim() === getValue?.toLowerCase()?.trim() || "Password Not Match"
                }
            }
          }}
          placeholder="Re-enter your Password."
          error={errors?.confirmPassword}
          divStyle="w-80"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-[#5f6fff] text-white py-2 cursor-pointer font-medium mt-2"
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