"use client";
import { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import { AnimatePresence, motion } from "motion/react";
import { BASE_URL } from "@/base";
import { cookiesProps } from "@/utils/auth";
interface SidebarLinksValue {
  label: string;
  href: Route;
}
interface headerProps{
  userCookie:cookiesProps | null
}
const sidebarLinks: SidebarLinksValue[] = [
  { label: "Home", href: "/" },
  { label: "All Doctors", href: "/doctors" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact-us" },
];

export default function Header({userCookie}:headerProps) {
  const [showOption, setShowOption] = useState<boolean>(false);
  const [cookieData, setCookieData] = useState<cookiesProps | null>(userCookie)
  const path = usePathname();
  const selectPath = path?.split("/")[1];
  const containerRef = useRef<HTMLDivElement>(null);
  const route = useRouter();
  useEffect(() => {
    if (!showOption) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef?.current &&
        !containerRef?.current?.contains(event.target as Node)
      ) {
        setShowOption(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showOption]);
  const handelClickOption = () => {
    setShowOption((prev) => !prev);
  };
  const handleNavigation = async ( )=>{
     try {
      // call backend logout which should clear the HttpOnly cookie
      await fetch(`${BASE_URL}users/logout`, {
        method: "POST",
        credentials: "include", // important — sends cookies
      });
    } catch (err) {
      console.error("Logout failed:", err);
      // still redirect client-side even if backend fails
    } finally {
      // client-side redirect to login or homepage
      route.replace("/");
      setCookieData(null)
    }
  }
  
  return (
    <header className="border-b border-gray-300 shadow-sm py-3 px-20 flex justify-between items-center ">
      <Link href={"/"} className="text-xl font-bold text-black/80">
        Compnay Name/Logo
      </Link>
      <nav className=" font-medium text-base flex items-center gap-x-8 ">
        {sidebarLinks?.map(({ label, href }, i) => {
          const checkPath = path === "/";
          const conditionLink = checkPath
            ? href === "/"
            : `/${selectPath}` === href;
          return (
            <div key={`${label}-${i}`} className="relative group">
              <Link
                href={href}
                className={`${
                  conditionLink
                    ? "text-[#3245f3] font-semibold"
                    : "group-hover:text-[#3245f3] "
                } `}
              >
                {label}
              </Link>
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-0 bg-[#3245f3] transition-all duration-300 ${
                  conditionLink ? "" : "group-hover:w-full"
                }`}
              ></span>
            </div>
          );
        })}
        <Link
          href={"/admin-login" as Route}
          className="px-5 py-1.5 text-xs border border-gray-300 rounded-4xl text-black/80 hover:bg-sky-600 hover:text-white hover:border-sky-500 "
        >
          Admin Panel
        </Link>
      </nav>
      {cookieData ? (
          <div
        ref={containerRef}
        className="cursor-pointer flex items-center gap-x-1.5 relative"
        onClick={handelClickOption}
        role="button"
        aria-expanded={showOption}
        aria-haspopup="menu"
        aria-controls="options-menu"
      >
        <button
          type="button"
          className="size-8 rounded-full overflow-hidden cursor-pointer"
        >
          <Image src={"/dog.png"} alt="profile Photo" width={100} height={50} />
        </button>
        <motion.button
          initial={{ rotate: 180 }}
          animate={{ rotate: showOption ? 360 : 180 }}
          exit={{ rotate: 180 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          type="button"
          className="text-lg cursor-pointer"
        >
          <RiArrowUpSLine />
        </motion.button>
        <AnimatePresence mode="wait">
          {showOption && (
            <motion.div
              layout
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="z-50 absolute top-12 -right-1 flex flex-col w-max bg-gray-100 rounded-lg px-2 py-2 gap-.5 shadow-2xl overflow-hidden "
            >
              <p className="text-center font-medium text-sm pt-3 pb-1 ">{cookieData?.name}</p>
              <hr className="border-2 border-black/10" />
              <Link
                href={"/user/profile" as Route}
                className="hover:bg-gray-200 rounded-md px-4 py-1 mt-2"
              >
                Profile
              </Link>
              <Link
                href={"/user/my-appointments" as Route}
                className="hover:bg-gray-200 rounded-md px-4 py-1"
              >
                My Appointments
              </Link>
              <button
                type="button"
                className="hover:bg-gray-200 rounded-md px-4 py-1 text-start"
                onClick={handleNavigation}
              >
                Logout
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      ) : (<Link
        href={"/user/login" as Route} 
        className="bg-sky-500 px-5 py-2 rounded-3xl text-white cursor-pointer text-sm font-medium"
      >
        Login / SignUp
      </Link>) }
      
      
    </header>
  );
}
