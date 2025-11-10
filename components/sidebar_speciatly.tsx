"use client";

import { BASE_URL } from "@/base";
import useGetCategory from "@/hooks/useGetCategory";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar_Speciatly() {
  const Path = usePathname()?.split("/")[2];
  const getCategory = useGetCategory();
  if (getCategory.length <= 0) {
    return (
      <div className=" border text-center pt-10  rounded-md">
        <h1 className="  md:text-lg lg:text-xl font-semibold">Loading...</h1>
      </div>
    );
  }

  return (
    <aside className="flex flex-col gap-y-4">
      {getCategory?.map((doc, i) => {
        const correctPath =
          doc?.name === "General physician"
            ? "general-physician"
            : doc?.name?.toLowerCase();
        return (
          <Link
            key={doc?._id}
            href={`/doctors/${
              doc?.name === "General physician"
                ? "general-physician"
                : doc?.name?.toLowerCase()
            }`}
            className={`text-[#4B5563] dark:text-white/90 text-sm border border-gray-300 dark:border-gray-800 
              cursor-pointer px-2 py-1.5 rounded-md
              ${
                correctPath === Path
                  ? "bg-[#5f6fff] text-white  "
                  : "hover:bg-[#bdc4ff] hover:text-black/70"
              }`}
          >
            {doc?.name}
          </Link>
        );
      })}
    </aside>
  );
}
