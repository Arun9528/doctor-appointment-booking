import { IMAGE_URL } from "@/base";
import { doctorData } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
interface CardsProps {
  data: doctorData;
  showAvaiable: boolean;
}
export default async function Cards({
  data,
  showAvaiable = false,
}: CardsProps) {
  return (
    <div className=" border border-[#C9D8FF] dark:border-gray-800 shadow-md w-60 h-[350px] rounded-lg overflow-hidden flex flex-col transform_animation">
      <div className="bg-[#EAEFFF] dark:bg-transparent h-60 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px]">
          <Image
            src={`${IMAGE_URL}${data?.profile_photo}`}
            alt="doctorPhoto"
            fill
            priority
            unoptimized
            className="object-contain"
          />
        </div>
      </div>
      <div className=" px-3 flex-1 flex flex-col justify-center gap-y-1.5 py-3">
        <p className="text-[10px] text-sky-500  font-medium bg-[#CFE4F7] dark:bg-transparent dark:border dark:border-gray-800 px-3 py-1 w-fit rounded-4xl">
          {data?.category?.name}
        </p>
        {/* <div className="flex  items-center gap-x-2">
                 <p className="size-2 rounded-full bg-green-500"></p>
                 <p className="text-xs font-medium text-green-400">Available</p>
              </div> */}
        <p className="font-semibold text-lg text-[#1F2937] dark:text-white/85">
          {data?.name}
        </p>
        {showAvaiable ? (
          <div className="flex items-center justify-center gap-x-1">
            <input
              type="checkbox"
              name="DocAvaible"
              id="available"
              className="size-3"
            />
            <label htmlFor="available" className="font-medium text-sm">
              Available
            </label>
          </div>
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
