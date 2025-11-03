
import { Outfit } from "next/font/google";
import "@/app/globals.css"
 const geistOutfit = Outfit({
  subsets:["latin"],
  // variable:'--font-outfit'
 })

export default function AuthLayout({children}:Readonly<{children:React.ReactNode}>){
    return (
           <html lang="en">
             <body
               className={`antialiased min-h-screen ${geistOutfit}`}
             >
               {/* <main className="center_content min-h-[calc(100vh-3.8rem)]"> */}
                {children}
               {/* </main> */}
             </body>
           </html>
         );
}