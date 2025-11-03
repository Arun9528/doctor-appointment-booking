import Header from "@/components/header";
import CheckingAuth from "@/utils/checkingAuth";
import { Route } from "next";
import { redirect } from "next/navigation";


export default async function UserDashboardLayout({children}:Readonly<{children:React.ReactNode}>){
    const userAuth = await CheckingAuth();
    if (!userAuth) redirect('/user/login' as Route);
    return (
        <main className="min-h-screen">
            <Header userCookie={userAuth}/>
            {children}
        </main>
    )
}