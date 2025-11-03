import { BASE_URL } from "@/base";
import { doctorData } from "@/lib/types";

interface FetchingDataProp{
    id:string;
}
export default async function FetchingData({id}:FetchingDataProp){
    try {
        const res = await fetch(`${BASE_URL}doctor/${id}`)
        if(!res.ok) throw new Error(`fetching error ${res.status}`)
        const doctorDetails:doctorData = await res.json();
    } catch (error) {
        
    }
}