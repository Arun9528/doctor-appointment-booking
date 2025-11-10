import DashBoardLogoutBtn from "./dashboard_Logout_btn";

export  default function DashBoardHeader({loginTitle}:{loginTitle:"Admin" | "Doctor"}){
    return (
        <header className="border-b border-gray-300 shadow-sm py-3 px-10 flex justify-between items-center ">
             <h1 className="text-xl font-bold text-black/80 space-x-2"> 
              <span>Compnay Name/Logo</span>
              <span className="px-5 py-1 border border-gray-300 rounded-4xl text-sm font-medium">{loginTitle}</span> </h1>
            <DashBoardLogoutBtn dashboardTitle={loginTitle === "Admin" ? "admin" : "doctors"}/>
        </header>
    )
}