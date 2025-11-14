import { DoctorListProps } from "@/app/(dashboard)/admin/doctors-list/page";

import { doctorData } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import Doc_Isavailable_Delete_Comp from "./doc_isavailable_delete_comp";
import { IMAGE_URL } from "@/lib/config";
interface CardsProps<T extends doctorData | DoctorListProps> {
  data: T;
  showAvaiable: boolean;
}
export default async function  Cards<T extends doctorData | DoctorListProps>({
  data,
  showAvaiable = false,
}: CardsProps<T>) {
  return (
    <div className={` border border-[#C9D8FF] dark:border-gray-800 shadow-md w-64 sm:w-60 h-[350px] rounded-lg overflow-hidden
       flex flex-col ${showAvaiable ? "" : "transform_animation"}`}>
      <div className="bg-[#EAEFFF] dark:bg-transparent h-60 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px]">
          <Image
            src={`${IMAGE_URL}${data?.profile_photo}`}
            alt="doctorPhoto"
            fill
            priority
            // unoptimized
            className="object-contain"
          />
        </div>
      </div>
      <div className=" px-3 flex-1 flex flex-col justify-center gap-y-1.5 py-3">
        <p className="text-[10px] text-sky-500  font-medium bg-[#CFE4F7] dark:bg-transparent dark:border dark:border-gray-800 
        px-3 py-1 w-fit rounded-4xl">
          {data?.category?.name}
        </p>
        <p className="font-semibold text-lg text-[#1F2937] dark:text-white/85">
          {data?.name}
        </p>
        {showAvaiable ? (
          <Doc_Isavailable_Delete_Comp
            available={data?.isAvailable}
            doctorId={data?._id}
          />
        ) : (
          <Link
            href={`/doctors/${data?.category?.name
              ?.replaceAll(" ", "-")
              ?.toLowerCase()}/${data?.name
              ?.replaceAll(" ", "-")
              ?.toLowerCase()}?id=${data?._id}`}
            className="text-sky-500 border text-center rounded-4xl py-1.5 text-sm hover:bg-sky-600 hover:text-white"
          >
            Book Now
          </Link>
        )}
      </div>
    </div>
  );
}
