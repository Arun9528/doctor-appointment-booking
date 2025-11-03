import LoginIn from "@/components/Auth/loginIn";
import { Route } from "next";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctor Login",
  description: "This is Login Page for Doctor",
};
export default function Doctorlogin(){
    return (
          <main className="min-h-screen center_content">
                <LoginIn headingName="Doctor" paraTitle="Admin Login? " linkRoute={"/admin-login" as Route}
                IsspanTag = {true} headingStyle="text-sky-600"
                />
          </main>
    )
}