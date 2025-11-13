import Image from "next/image";

export default function About() {
  return (
    <section className="px-5 sm:px-10">
      <h1 className="text-2xl font-bold text-black/80 text-center mt-12 dark:text-white">
        About US
      </h1>
      <div className="grid grid-cols-1 min-[830px]:grid-cols-2 max-[830px]:gap-y-5 my-10 ">
        <Image
          src={"/about.png"}
          alt="doctorPhoto"
          width={350}
          height={350}
          priority
          className="justify-self-center "
        />
        <div className="text-sm lg:text-base space-y-5 text-[#4B5563] dark:text-white/80 self-center">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you&#39;re booking your first appointment or
            managing ongoing care, Prescripto is here to support you every step
            of the way.
          </p>
          <h3 className="text-lg font-semibold text-[#1F2937] dark:text-white">
            Our Vision
          </h3>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-black/80 dark:text-white">
          WHY CHOOSE US
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:h-52 border border-gray-300 text-gray-600  mt-5">
          <div className="border-b sm:border-r border-gray-300 text-center content-center h-full 
           hover:bg-[#5f6fff] hover:text-white transition-colors duration-300 ease-in-out px-3 max-sm:py-8 ">
            <h4 className="text-sm font-semibold dark:text-white/80">
              EFFICIENCY:
            </h4>
            <p className="text-xs lg:text-[13px] dark:text-white/80">
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="border-b sm:border-r border-gray-300 text-center content-center h-full
           hover:bg-[#5f6fff] hover:text-white transition-colors duration-300 ease-in-out  px-3 max-sm:py-8 ">
            <h4 className="text-sm font-semibold dark:text-white/80">
              CONVENIENCE:
            </h4>
            <p className="text-xs lg:text-[13px] dark:text-white/80">
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div className="border-r border-gray-300 text-center content-center h-full hover:bg-[#5f6fff]
           hover:text-white transition-colors duration-300 ease-in-out px-3 max-sm:py-8 ">
            <h4 className="text-sm font-semibold dark:text-white/80">
              PERSONALIZATION:
            </h4>
            <p className="text-xs lg:text-[13px] dark:text-white/80">
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
