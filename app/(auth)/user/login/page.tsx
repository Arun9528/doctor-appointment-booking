import LoginIn from "@/components/Auth/loginIn";
import CheckingAuth from "@/utils/checkingAuth";
import { Metadata, Route } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login page",
  description: "This is Login Page for User",
};
export default async function Login() {
  const userAuth = await CheckingAuth();
  if(userAuth){
    redirect("/")
  }
 
  return (
    <LoginIn
      headingName="Login"
      paraTitle="Create an new account?"
      linkRoute={"/user/sign-up" as Route}
    />
  );
}
