"use client"
import { createContext, useContext, useState } from "react";
type User = {id: string; name: string; email: string } | null;
const userContext = createContext<{user:User,setUser:(u:User)=> void}>({user:null,setUser:()=>{} })
export function UserProvider({children}:Readonly<{children:React.ReactNode}>){
    const [user,setUser] = useState<User>(null);
    return <userContext.Provider value={{user,setUser}}>{children}</userContext.Provider>
}
export const useUser = ()=> useContext(userContext)

