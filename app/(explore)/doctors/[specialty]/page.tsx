import { BASE_URL } from "@/base";
import Cards from "@/components/cards";
import { doctorData } from "@/lib/types";
import { doctorsBySpecialty } from "@/public/db";

export default async function SpecialtyPage({params}:PageProps<"/doctors/[specialty]">) {
  try {
    const { specialty } = await params;
    const check = specialty === "general-physician" ? "General physician" :  specialty.charAt(0).toUpperCase() + specialty.slice(1);
    const res = await fetch(`${BASE_URL}doctors?speciality=${check}`);
    const doctorCategory:doctorData[] = await res.json();
     return (
      <section className=" grid grid-cols-4 gap-6">
        {doctorCategory?.map(category=> <Cards key={category._id} data={category} showAvaiable={false} />)}
          {/* {filterDoc?.map(doc => doc?.doctors?.map((d) => (<Cards key={d?.id} specialty={doc?.specialty} data={d} showAvaiable={false} />)))} */}
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
  // const filterDoc = doctorsBySpecialty?.filter((doc) => {
  //   const check = doc?.specialty === "General physician" ? "general-physician" : doc?.specialty?.toLowerCase();
  //   return check === specialty;
  // });
  
  // return (
  //   <section className=" grid grid-cols-4 gap-6">
  //    {filterDoc?.map(doc => doc?.doctors?.map((d) => (<Cards key={d?.id} specialty={doc?.specialty} data={d} showAvaiable={false} />)))}
  //   </section>
  // );
}
