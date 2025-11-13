import DashBoardHeader from "@/components/dashboardHeader";
import DashBoardSidebar from "@/components/dashboardSidebar";

export default function AdminDashBaordLayout({children}:Readonly<{children:React.ReactNode}>){
    return (
        <div className="min-h-screen">
            <DashBoardHeader loginTitle="Admin"/>
            <main className="flex">
                <DashBoardSidebar isAdmin={true}/>
                {children}
            </main>
            
        </div>
    )
}