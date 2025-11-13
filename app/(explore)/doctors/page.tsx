import { BASE_URL } from "@/lib/config";
import Cards from "@/components/cards";
import { doctorData } from "@/lib/types";


export default async function Doctors() {
   try {
      const res = await fetch(`${BASE_URL}doctors`)
      if(!res?.ok) throw new Error(`fetching Failed ${res?.status}`);
      const allDoctorlist:doctorData[] = await res.json();
      return (
         <section className=" grid min-md:max-lg:grid-cols-2 min-lg:max-[1350px]:grid-cols-3 min-[1350px]:grid-cols-4 gap-6
          min-md:max-lg:justify-items-end max-md:justify-items-center" >
            {
                allDoctorlist?.map((doclist)=> <Cards key={doclist?._id}  data={doclist} showAvaiable={false} /> )
            }
         </section>
      )
   } catch (error) {
      const typeError = error as Error
      console.error(error)
      return (
          <div className="min-h-screen center_content">
             <h1 className="text-lg sm:text-2xl: md:text-3xl lg:text-4xl font-semibold">{typeError?.message}</h1>
          </div>
      )
   }
}
