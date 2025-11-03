import { doctorData } from "@/lib/types";
import Cards from "./cards";
import { BASE_URL } from "@/base";

export default async function TopDoctorList(){
    try {
     const res = await fetch(`${BASE_URL}doctors?limit=10`);
    if(!res.ok) throw new Error(`fetching error ${res.status}`)
    const data:doctorData[] = await res.json();
    return (
        <div className="flex flex-wrap gap-5 justify-between py-10">
          {data?.map(doc => <Cards key={doc?._id}  data={doc} showAvaiable={false} />)}
        </div>
        )
    } catch (error) {
        const typeError = error as Error
        console.error("error",error)
        return (
            <div className="min-h-screen center_content">
             <h1 className="text-lg sm:text-2xl: md:text-3xl lg:text-4xl font-semibold">{typeError?.message}</h1>
          </div>
        )
    }
}