"use client";
import { BASE_URL } from "@/base";
import { Route } from "next";
import { useRouter } from "next/navigation";

export default function DashBoardLogoutBtn({dashboardTitle}:{dashboardTitle:string}) {
  const route = useRouter();
  const handleClick = async () => {
    try {
      await fetch(`${BASE_URL}${dashboardTitle}/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      if(dashboardTitle === "admin"){
        route.replace("/admin-login" as Route)
      }else{
           route.replace("/doctor-login" as Route);
      }
    }
  };
  return (
    <button
      type="button"
      className="bg-sky-600 px-8 py-1.5 rounded-4xl text-white cursor-pointer"
      onClick={handleClick}
    >
      Logout
    </button>
  );
}
