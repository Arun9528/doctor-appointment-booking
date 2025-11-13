import { BASE_URL } from "@/lib/config";
import { loginData } from "@/components/Auth/loginIn";
interface loginBody{
    email:string;
    password:string;
}

export default async function Loginfetching(path:string,bodyData:loginBody):Promise<loginData | undefined>{
    const res = await fetch(`${BASE_URL}${path}`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        credentials:"include",
        body:JSON.stringify(bodyData)
    })
    if(!res.ok){
         let errorMsg = "Login failed";
          try {
            const payload = await res?.json();
            errorMsg = payload?.message || errorMsg;
          } catch (parseErr) {
            // If not JSON (e.g., HTML 404), use status text
            errorMsg = res?.statusText || errorMsg;
          }
          alert(errorMsg);
          return undefined
    }
    return  await res?.json()
}