"use client";
import { BASE_URL } from "@/base";
import Inputs from "@/components/inputs";
import Loginfetching from "@/utils/loginfetching";
import { Route } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
export interface loginForm {
  userId: string;
  password: string;
}
interface LoginInProps {
  headingName: "Admin" | "Doctor" | "Login";
  paraTitle: string;
  linkRoute: Route;
  IsspanTag?: boolean;
  headingStyle?: string;
}
export interface loginData{
  message:string;
  success:boolean;
  email?:string;
  name?:string;
  photo?:string;
  _id?:string;
}
export default function LoginIn({
  headingName,
  paraTitle,
  linkRoute,
  headingStyle = "",
  IsspanTag = false,
}: LoginInProps) {
  const route = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<loginForm>({
    defaultValues: {
      userId: "gp_001@example.com",
      password: "1",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<loginForm> = async (data) => {
    const bodyData = {
      email: data?.userId,
      password: data?.password,
    }
    try {
      let payload;
      if (headingName === "Login") {
        // const res = await fetch(`${BASE_URL}users/login`, {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   credentials: "include",
        //   body: JSON.stringify({
        //     email: data?.userId,
        //     password: data?.password,
        //   }),
        // });
        // if (!res.ok) {
        //   let errorMsg = "Login failed";
        //   try {
        //     const payload = await res?.json();
        //     errorMsg = payload?.message || errorMsg;
        //   } catch (parseErr) {
        //     // If not JSON (e.g., HTML 404), use status text
        //     errorMsg = res?.statusText || errorMsg;
        //   }
        //   alert(errorMsg);
        //   return;
        // }
        // const payload = await res?.json();
        // // console.log("Logged in:", payload?.user);
        // const { name } = payload;
        payload = await Loginfetching("users/login",bodyData)
        if(!payload) return 
        
        route.push("/" as Route);
      } else if (headingName === "Admin") {
        route.push("/admin/admin-dashboard" as Route);
      } else if (headingName === "Doctor") {
        payload = await Loginfetching("doctors/login",bodyData)
        if(!payload) return 
        route.push("/doctor/doctor-dashboard" as Route);
      }
    } catch (error) {
      console.error(error);
      alert("Network error");
    }
    reset();
  };

  return (
    <section className="w-fit  py-8 px-7 border border-gray-300 rounded-lg space-y-4 shadow-xl">
      <h2
        className={`text-3xl text-center ${
          headingStyle
            ? `${headingStyle} font-semibold`
            : "text-[#5e5e5e] font-bold"
        }`}
      >
        {headingName}{" "}
        {IsspanTag ? <span className="!text-[#5e5e5e]">Login</span> : ""}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Inputs
          inputType="text"
          label="User Id"
          name="userId"
          register={register}
          validation={{ required: "User Id is Required" }}
          placeholder="Enter your User Id."
          error={errors?.userId}
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
        <button
          type="submit"
          className="w-full rounded-lg bg-[#5f6fff] text-white py-2 cursor-pointer font-medium mt-2"
        >
          Login
        </button>
      </form>
      <p className="text-sm text-[#5e5e5e]">
        {paraTitle} &nbsp;
        <Link
          href={linkRoute}
          className="underline-offset-1 underline text-[#5f6fff]"
        >
          Click here
        </Link>
      </p>
    </section>
  );
}
