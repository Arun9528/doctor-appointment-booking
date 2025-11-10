"use client"
import { BASE_URL } from "@/base";
import { useEffect, useState } from "react";
type categoryProps = Array<{ _id: string; name: string }>
export default function useGetCategory():categoryProps {
  const [getCategory, setGetCategory] = useState<categoryProps>([]);
  useEffect(() => {
    async function fetchingCategory() {
      try {
        const res = await fetch(`${BASE_URL}category`);
        if (!res.ok) throw new Error(`fetching error ${res?.status}`);
        const data = await res.json();
        setGetCategory(data);
      } catch (error) {
        console.error("error", error);
      }
    }
    fetchingCategory();
  }, []);
  return getCategory
}
