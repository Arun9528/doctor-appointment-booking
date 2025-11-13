"use client";
import { BASE_URL } from "@/lib/config";
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
        route.replace("/")
      }else{
           route.replace("/");
      }
    }
  };
  return (
    <button
      type="button"
      className="bg-sky-600 px-4 md:px-8 py-1 md:py-1.5 rounded-4xl text-white cursor-pointer text-[10px] min-[400px]:max-sm:text-xs md:text-sm"
      onClick={handleClick}
    >
      Logout
    </button>
  );
}
