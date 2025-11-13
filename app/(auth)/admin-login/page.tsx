
import LoginIn from "@/components/Auth/loginIn";
import { Metadata, Route } from "next";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "This is Login Page for Admin",
};
export default function AdminLogin(){
    return (
        <main className="min-h-screen center_content">
            <LoginIn headingName="Admin" paraTitle="Doctor Login? " linkRoute={"/doctor-login" as Route} 
            IsspanTag = {true} headingStyle="text-sky-600" loginProps={{email:"admin@gmail.com",password:"admin12345"}} />
        </main>
    )
}