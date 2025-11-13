import { BASE_URL } from "@/lib/config";
import Cards from "@/components/cards";
import { doctorData } from "@/lib/types";

export default async function SpecialtyPage({params}:PageProps<"/doctors/[specialty]">) {
  try {
    const { specialty } = await params;
    const check = specialty === "general-physician" ? "General physician" :  specialty?.charAt(0)?.toUpperCase() + specialty?.slice(1);
    const res = await fetch(`${BASE_URL}doctors?speciality=${check}`);
    const doctorCategory:doctorData[] = await res?.json();
     return (
      <section className=" grid min-md:max-lg:grid-cols-2 min-lg:max-[1350px]:grid-cols-3 min-[1350px]:grid-cols-4 
          min-md:max-lg:justify-items-end max-md:justify-items-center gap-6">
        {doctorCategory?.map(category=> <Cards key={category?._id} data={category} showAvaiable={false} />)}
      </section>
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
