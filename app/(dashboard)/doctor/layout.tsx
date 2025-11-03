import DashBoardHeader from "@/components/dashboardHeader";
import DashBoardSidebar from "@/components/dashboardSidebar";

export default function DoctorDashboardLayout({children}:Readonly<{children:React.ReactNode}>){
    return (
        <div className="min-h-screen">
            <DashBoardHeader loginTitle="Doctor"/>
            <main className="grid grid-cols-[15%_85%]">
                <DashBoardSidebar isAdmin={false}/>
                {children}
            </main>
        </div>
    )
}