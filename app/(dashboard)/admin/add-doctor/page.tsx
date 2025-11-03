import AddingDoctor from "@/components/adding_Doctor"
import { Metadata } from "next"

export const metadata:Metadata = {
    title:"Add Doctor",
    description:"This Page Admin add the Dotor"
}
export default function AddDoctor(){
    return (
        <section className="p-5">
            <h1 className="text-2xl font-bold pl-1 ">Add Doctor</h1>
            <AddingDoctor/>
        </section>
    )
}