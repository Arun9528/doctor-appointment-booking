"use client";
import Inputs from "@/components/inputs";
import Loginfetching from "@/utils/loginfetching";
import { Route } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
    formState: { errors ,isSubmitting},
    reset,
  } = useForm<loginForm>({
    defaultValues: {
      userId: "admin@gmail.com",
      password: "admin12345",
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
        payload = await Loginfetching("users/login",bodyData)
        if(!payload) return 
        route.push("/" as Route);
      } else if (headingName === "Admin") {
        payload = await Loginfetching("admin/login",bodyData)
        console.log(payload,"admin")
        if(!payload) return 
        route.push("/admin/admin-dashboard" as Route);
      } else if (headingName === "Doctor") {
        payload = await Loginfetching("doctors/login",bodyData)
        console.log(payload)
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
          {isSubmitting ? "Submiting..." : "Login"}
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
