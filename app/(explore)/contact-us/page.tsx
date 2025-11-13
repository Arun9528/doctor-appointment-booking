import Image from "next/image";
import Link from "next/link";

export default function ContactUs(){
    return (
    <section className="px-2 sm:px-5 md:px-10">
        <h1 className="text-2xl font-bold text-black/80 text-center mt-12 dark:text-white" >Contact Us</h1>
        <div className="flex max-sm:flex-col max-sm:gap-y-6 items-center justify-center mt-10 gap-x-10">
            <Image src={"/contact.png"} alt="doctorwithpatient" width={350} height={300} priority/>
            <div className="space-y-5">
                <h2 className="font-semibold text-black/80 text-lg dark:text-white">Our Office</h2>
                <address className="text-[#4B5563] dark:text-white">
                    00000 Willms Station Suite 000, Washington, USA
                </address>
                <div>
                    <strong className="text-black/70 dark:text-white">Tel: </strong>
                    <Link href={"tel:+123-456-7890"} className="footer-text">+123-456-7890</Link>
                </div>
                <div>
                    <strong className="text-black/70 dark:text-white">Email: </strong>
                    <Link href={"mailto:test@gmail.com"} className="footer-text">test@gmail.com</Link>
                </div>
            </div>
        </div>
    </section>)
}