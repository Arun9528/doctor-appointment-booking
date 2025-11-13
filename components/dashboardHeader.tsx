import DarkModeBtn from "./darkmodebtn";
import DashBoardLogoutBtn from "./dashboard_Logout_btn";

export  default function DashBoardHeader({loginTitle}:{loginTitle:"Admin" | "Doctor"}){
    return (
        <header className="border-b border-gray-300 dark:border-gray-800 shadow-sm py-3 px-2.5 md:px-5 lg:px-10 flex justify-between items-center ">
             <h1 className=" font-bold text-black/80 dark:text-white space-x-2"> 
              <span className="text-base min-[400px]:max-md:text-lg md:text-xl">Compnay Name/Logo</span>
              <span className="px-3 md:px-5 py-0.5 md:py-1 border border-gray-300 rounded-4xl text-[10px] min-[400px]:max-md:text-xs md:text-sm font-medium">{loginTitle}</span>
            </h1>
           <div className="flex items-center gap-x-2">
             <DarkModeBtn/>
             <DashBoardLogoutBtn dashboardTitle={loginTitle === "Admin" ? "admin" : "doctors"}/>
           </div>
        </header>
    )
}