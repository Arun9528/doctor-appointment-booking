import DashBoardHeader from "@/components/dashboardHeader";
import DashBoardSidebar from "@/components/dashboardSidebar";
import Header from "@/components/header";

export default function AdminDashBaordLayout({children}:Readonly<{children:React.ReactNode}>){
    return (
        <div className="min-h-screen">
            <DashBoardHeader loginTitle="Admin"/>
            <main className="grid grid-cols-[15%_85%]">
                <DashBoardSidebar isAdmin={true}/>
                {children}
            </main>
            
        </div>
    )
}