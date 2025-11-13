"use client"
import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserFriends } from "react-icons/fa";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { LuCalendarDays } from "react-icons/lu";
import { RiHomeSmile2Line } from "react-icons/ri";

interface SidebarProps {
  title: string;
  icon: React.ReactNode;
  titleLink: Route;
  pathCheck:string;
}

const adminSidebar: SidebarProps[] = [
  {
    title: "Dashboard",
    icon: <RiHomeSmile2Line className="text-[26.5px] " />,
    titleLink: "/admin/admin-dashboard" as Route,
    pathCheck:"admin-dashboard"
  },
  {
    title: "Appointments",
    icon: <LuCalendarDays className="text-[23px]" />,
    titleLink: "/admin/doctors-appointments" as Route,
    pathCheck:"doctors-appointments"
  },
  {
    title: "Add Doctors",
    icon: <HiOutlineViewGridAdd className="text-2xl" />,
    titleLink: "/admin/add-doctor" as Route,
    pathCheck:"add-doctor"
  },
  {
    title: "Doctors List",
    icon: <FaUserFriends className="text-2xl " />,
    titleLink: "/admin/doctors-list" as Route,
    pathCheck:"doctors-list"
  },
];
const doctorSidebar:SidebarProps[] = [
  {
    title: "Dashboard",
    icon: <RiHomeSmile2Line className="text-[26.5px] " />,
    titleLink: "/doctor/doctor-dashboard" as Route,
    pathCheck:"doctor-dashboard"
  },
  {
    title: "Appointments",
    icon: <LuCalendarDays className="text-[23px]" />,
    titleLink: "/doctor/doctor-appointment" as Route,
    pathCheck:"doctor-appointment"
  },
  {
    title:"Profile",
    icon:<FaUserFriends className="text-2xl " />,
    titleLink:"/doctor/doctor-profile" as Route,
    pathCheck:"doctor-profile"
  }
]

export default function DashBoardSidebar({isAdmin}:{isAdmin:boolean}) {
    const path = usePathname();
    const CheckPath = path.split("/")[2];
  return (
    <aside className="border-r border-gray-300 dark:border-gray-800 min-h-[calc(100vh-3.8rem)] shadow-lg  w-10 md:w-60 shrink-0">
      <nav className="mt-5 ">
        {
          isAdmin ? (adminSidebar?.map((d) =>{
            const isPath = CheckPath === d?.pathCheck
            return  (
          <Link
            key={d?.title}
            href={d?.titleLink}
            className={`w-full flex max-md:justify-center  md:pl-10 items-center md:gap-3 py-3.5 
            ${isPath ? "bg-sky-600" : "hover:bg-gray-200/70"}`}
          >
            <span className={`${isPath ? "text-white" : "text-black/80 dark:text-gray-300"}`}>{d?.icon}</span>
            <span className={`${isPath ? "text-white" : "text-gray-600"} hidden md:inline `}>{d?.title}</span>
          </Link>
        )
        })) :
        (
          doctorSidebar?.map((d) =>{
            const isPath = CheckPath === d?.pathCheck
            return  (
          <Link
            key={d?.title}
            href={d?.titleLink}
            className={`w-full flex max-md:justify-center  md:pl-10 items-center md:gap-3 py-3.5
            ${isPath ? "bg-sky-600" : "hover:bg-gray-200/70"}`}
          >
            <span className={`${isPath ? "text-white" : "text-black/80 dark:text-gray-300"} `}>{d?.icon}</span>
            <span className={`${isPath ? "text-white" : "text-gray-600"} hidden md:inline`}>{d?.title}</span>
          </Link>
        )
        }))
        }
      </nav>
    </aside>
  );
}
