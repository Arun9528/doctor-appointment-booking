export interface cookiesProps{
    name:string;
    email:string;
    _id?:string;
}
import { BASE_URL } from "@/base";

export default async function FetchingCookies( cookiesHeader: string): Promise<cookiesProps | null>{
    if (!cookiesHeader) return null;
      try {
        const res = await fetch(`${BASE_URL}users/me`, {
          method: "GET",
          headers: { cookie: cookiesHeader },
          cache: "no-store",
        });
        if (!res.ok) return null;
        const userData = await res.json();
        return  userData
      } catch (error) {
        console.error("Error fetching user:", error);
        return null;
      }
}