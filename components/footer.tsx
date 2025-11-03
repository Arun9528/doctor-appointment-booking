import Link from "next/link";

export default function Footer(){
    return (
        <footer className=" pt-4 pb-2 text-[#1F2937] px-20 mt-10 h-72  flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-[40%_60%] mt-5">
                <div className="">
                <h3 className="font-semibold text-lg mb-5 text-black/80">Compnay Name/Logo</h3>
                <p className="text-sm text-[#4B5563]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, officiis. Repellat, iste. Ea, consectetur necessitatibus laboriosam ducimus quo ullam, omnis iste qui molestiae voluptas obcaecati assumenda vitae vel cupiditate velit. Eligendi provident autem in sequi eos odio esse quam, dolorem alias odit delectus, accusantium vel eum impedit consequatur temporibus sint?.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 ">
               <div className=" flex flex-col gap-y-1.5 items-center">
                     <h3 className="font-semibold text-lg mb-5">Company</h3>
                     <Link href={"/"} className="footer-text">Home</Link>
                     <Link href={"/doctors"} className="footer-text ">All Doctors</Link>
                     <Link href={"/about"} className="footer-text">About</Link>
                     <Link href={"/contact-us"} className="footer-text">Contact Us</Link>
               </div>
               <div className="flex flex-col gap-y-1.5 items-center">
                  <h3 className="font-semibold text-lg mb-5">Get In Touch</h3>
                  <Link href={"tel:+123-456-7890"} className="footer-text">+123-456-7890</Link>
                  <Link href={"mailto:test@gmail.com"} className="footer-text">test@gmail.com</Link>

               </div>
            </div>
            </div>
            <p className=" sm:col-span-2 text-center">Copyright 2025 by Raj Sir. All Right Reserved</p>
        </footer>
    )
}