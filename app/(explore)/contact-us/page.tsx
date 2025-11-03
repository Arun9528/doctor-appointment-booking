import Image from "next/image";
import Link from "next/link";

export default function ContactUs(){
    return (
    <section>
        <h1 className="text-2xl font-bold text-black/80 text-center mt-12" >Contact Us</h1>
        <div className="flex items-center justify-center mt-10 gap-x-10">
            <Image src={"/contact.png"} alt="doctorwithpatient" width={350} height={300} priority/>
            <div className="space-y-5">
                <h2 className="font-semibold text-black/80 text-lg">Our Office</h2>
                <address className="text-[#4B5563]">
                    00000 Willms Station Suite 000, Washington, USA
                </address>
                <div>
                    <strong className="text-black/70">Tel: </strong>
                    <Link href={"tel:+123-456-7890"} className="footer-text">+123-456-7890</Link>
                </div>
                <div>
                    <strong className="text-black/70">Email: </strong>
                    <Link href={"mailto:test@gmail.com"} className="footer-text">test@gmail.com</Link>
                </div>
            </div>
        </div>
    </section>)
}