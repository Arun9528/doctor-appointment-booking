import { BASE_URL, IMAGE_URL } from "@/lib/config";
import { doctorData } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface sidebarSuggestionProps{
  specialty:string;
  doctorId:string;
}
export default async function SidebarSuggestion({specialty,doctorId}:sidebarSuggestionProps){
    try {
        const check = specialty === "general-physician" ? "General physician" : specialty.charAt(0).toUpperCase() + specialty.slice(1);
        const res = await fetch(`${BASE_URL}doctors?speciality=${check}`);
        const doctorCategory:doctorData[] = await res.json();
        const filterdoctor = doctorCategory?.filter(doc => doc?._id !== doctorId)
        return (
        <aside className="shadow-xl rounded-xl p-5 border border-gray-200 dark:border-gray-700 space-y-3 shrink-0 overflow-hidden">
          <h3 className="font-bold text-lg">Suggestions</h3>
         <div className="overflow-x-scroll my-scroll">
          <div className="max-[1160px]:flex max-sm:mt-5 max-sm:w-3xl ">
           {filterdoctor?.map((suggestDoc) => (
            <Link
              href={`/doctors/${specialty.replaceAll(" ","-")}/${suggestDoc?.name?.replaceAll(" ", "-")?.toLowerCase()}?id=${
                suggestDoc?._id
              }`}
              key={suggestDoc?._id}
              className="flex items-center  gap-x-4 hover:bg-gray-200/65 dark:hover:bg-gray-800 cursor-pointer px-5 py-1.5 rounded-lg transition-all duration-300 ease-in-out"
              aria-label={`View Profile for ${suggestDoc?.name} `}
            >
              <div className="overflow-hidden border border-gray-300 rounded-full size-16 shrink-0">
                <Image
                  src={`${IMAGE_URL}${suggestDoc?.profile_photo}`}
                  alt="doctor-photot"
                  width={70}
                  height={70}
                  className="object-cover"
                  // unoptimized
                />
              </div>
              <div>
                <h5 className="font-medium text-sm">{suggestDoc?.name}</h5>
                <p className="text-xs text-sky-600 font-medium">
                  {suggestDoc?.experienceYears} Years
                </p>
              </div>
            </Link>
          ))}
         </div>
         </div>
        </aside>
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