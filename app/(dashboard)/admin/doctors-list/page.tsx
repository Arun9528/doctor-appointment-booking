import { BASE_URL } from "@/lib/config";
import Cards from "@/components/cards";

import { Metadata } from "next";
export interface DoctorListProps{
  _id:string;
  category:{_id:string,name:string;};
  name:string;
  profile_photo:string;
  isAvailable:boolean
}
export const metadata: Metadata = {
  title: "Doctor List",
  description: "In this Page Admin Select the Doctor show or not in Website",
};
export const dynamic = "force-dynamic";
export default async function DoctorList() {
  try {
    const res = await fetch(`${BASE_URL}doctors`,{method:"GET",credentials:"include",cache:"no-store"});
    if(!res.ok){
      const error = await res.json();
      throw new Error(`fetching Failed ${res?.status} - ${error?.message}`);
    }
    const doctorList:DoctorListProps[] = await res.json();
    return (
      <section className="p-4">
        <h1 className="text-2xl font-medium">All Doctor</h1>
        <div className="flex flex-wrap gap-10 mt-5 justify-center  ">
           {
             doctorList?.length > 0 ? (
              doctorList?.map(doc => (<Cards key={doc?._id} data={doc} showAvaiable={true} />))
             ) : (<p className="text-lg text-black/80">There is no Doctor</p>)
           }
        </div>
      </section>
    );
  } catch (error) {
    const typeError = error as Error;
    console.error(error);
    return (
      <div className="min-h-screen center_content">
        <h1 className="text-lg sm:text-2xl: md:text-3xl lg:text-4xl font-semibold">
          {typeError?.message}
        </h1>
      </div>
      )
  }
}
