import { Outfit } from "next/font/google";
import "@/app/globals.css"
 const geistOutfit = Outfit({
  subsets:["latin"],
  // variable:'--font-outfit'
 })

export default async function DashboardLayout({children}:Readonly<{children:React.ReactNode}>){
    return (
           <html lang="en">
             <body className={`antialiased min-h-screen ${geistOutfit} dark:bg-gray-900`}>
                {children}
             </body>
           </html>
         );
}