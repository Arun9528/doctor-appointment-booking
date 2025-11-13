import DashBoardHeader from "@/components/dashboardHeader";
import DashBoardSidebar from "@/components/dashboardSidebar";

export default function DoctorDashboardLayout({children}:Readonly<{children:React.ReactNode}>){
    return (
        <div className="min-h-screen">
            <DashBoardHeader loginTitle="Doctor"/>
            <main className="flex ">
                <DashBoardSidebar isAdmin={false}/>
                {children}
            </main>
        </div>
    )
}