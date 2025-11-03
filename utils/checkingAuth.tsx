import { cookies } from "next/headers";
import FetchingCookies, { cookiesProps } from "./auth";

export default async function CheckingAuth():Promise<cookiesProps | null>{
  const cookieStore = await cookies();
  const cookieHeader = cookieStore?.getAll()?.map((c) => `${c?.name}=${c?.value}`)?.join("; ");
  const user = await FetchingCookies(cookieHeader)
  return user
}