import User_Registration_Page from "@/components/Auth/user_registration_page";
import CheckingAuth from "@/utils/checkingAuth";
import { Metadata, Route } from "next";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "Registration page",
  description: "In This page user register there Personal Information",
};
export default async function UserRegistration(){
   const userAuth = await CheckingAuth();
     if(!userAuth){
       redirect("/user/login" as Route)
     }
    return <User_Registration_Page  userReg={userAuth}/>
}