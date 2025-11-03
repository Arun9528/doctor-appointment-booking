import UserSignUp from "@/components/Auth/userSignUp";
import CheckingAuth from "@/utils/checkingAuth";
import { Metadata, Route } from "next";
import { redirect } from "next/navigation";
export const metadata:Metadata = {
  title:"Sign Up",
  description:"This is Sign-Up Page for User"
}

export default async function SignUp() {
  const userAuth = await CheckingAuth();
  if(userAuth){
    redirect("/")
  }
  return <UserSignUp/>
}
