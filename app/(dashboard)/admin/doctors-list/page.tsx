import Cards from "@/components/cards";
import { doctorsBySpecialty } from "@/public/db";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctor List",
  description: "In this Page Admin Select the Doctor how or not in Website",
};
export default function DoctorList() {
  return (
    <section className="p-4">
      <h1 className="text-2xl font-medium">All Doctor</h1>
      <div className="grid grid-cols-4 gap-y-8 mt-5 border justify-center">
        {doctorsBySpecialty?.map((doc) =>
          doc?.doctors?.map((d) => (
            <Cards key={d?.id} specialty={doc?.specialty} data={d} showAvaiable={true} />
          ))
        )}
      </div>
    </section>
  );
}
