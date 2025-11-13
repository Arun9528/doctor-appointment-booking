import Link from "next/link";

export default function Footer(){
    return (
        <footer className="max-sm:gap-y-5 !pt-4 !pb-2 text-[#1F2937] mt-10 h-72 flex flex-col justify-between responsive_left-right_padding ">
            <div className="grid grid-cols-1 sm:grid-cols-[40%_60%] gap-4">
                <div className="">
                <h3 className="font-semibold text-lg mb-2 sm:mb-5 text-black/80 dark:text-white">Compnay Name/Logo</h3>
                <p className="text-xs sm:text-sm text-[#4B5563] dark:text-white/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, officiis. Repellat, iste. Ea, consectetur necessitatibus laboriosam ducimus quo ullam, omnis iste qui molestiae voluptas obcaecati assumenda vitae vel cupiditate velit. Eligendi provident autem in sequi eos odio esse quam, dolorem alias odit delectus, accusantium vel eum impedit consequatur temporibus sint?.</p>
            </div>
            <div className="grid grid-cols-2 ">
               <div className=" flex flex-col gap-y-1 sm:gap-y-1.5 items-center ">
                     <h3 className="font-semibold text-lg mb-1 sm:mb-5 dark:text-white">Company</h3>
                     <Link href={"/"} className="footer-text">Home</Link>
                     <Link href={"/doctors"} className="footer-text ">All Doctors</Link>
                     <Link href={"/about"} className="footer-text">About</Link>
                     <Link href={"/contact-us"} className="footer-text">Contact Us</Link>
               </div>
               <div className="flex flex-col gap-y-1.5 items-center">
                  <h3 className="font-semibold text-lg mb-1 sm:mb-5 dark:text-white">Get In Touch</h3>
                  <Link href={"tel:+123-456-7890"} className="footer-text">+123-456-7890</Link>
                  <Link href={"mailto:test@gmail.com"} className="footer-text">test@gmail.com</Link>

               </div>
            </div>
            </div>
            <p className=" text-center dark:text-white pb-3 max-sm:text-xs">Copyright 2025 by Raj Sir. All Right Reserved</p>
        </footer>
    )
}