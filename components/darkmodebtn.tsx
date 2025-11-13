"use client"

import { useEffect, useState } from "react"
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

export default function DarkModeBtn(){
    const [isDark,setIsDark] = useState<boolean>(false)
    useEffect(()=>{
        const checkDarkMode = sessionStorage.getItem("isDark") || false;
        if(checkDarkMode){
            const parsedData = JSON.parse(checkDarkMode);
            document.documentElement.classList.toggle("dark",parsedData)
            setIsDark(parsedData)
        }
    },[])
    const handleDarkMode = ()=>{
        setIsDark(prev => {
            const next = !prev;
            sessionStorage.setItem("isDark",JSON.stringify(next));
            document.documentElement.classList.toggle("dark",next)
            return next
        })
    }
    return  (
        <button type="button" className="cursor-pointer text-base sm:text-lg hover:outline-8 hover:outline-gray-200/80 hover:bg-gray-200/80 dark:hover:outline-gray-500 dark:hover:bg-gray-500 hover:rounded-full transition-normal duration-300 ease-in-out" 
        onClick={handleDarkMode}>{isDark ? <FaSun className="text-yellow-400"/> : <FaMoon />}</button>
    )
}