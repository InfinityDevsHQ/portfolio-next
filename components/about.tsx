import Image from "next/image";
import { Underline } from "./General/underline";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-4 px-4 py-28 xl:py-32"
    >
      <div className="relative xl:w-[500px] xl:h-[290px]">
        <h2 className=" text-3xl md:text-[45px] font-bold absolute pb-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 capitalize whitespace-nowrap">
          About me
          <Underline style="h-1" />
        </h2>

        <Image
          src="/about_shape_bg.png"
          width={600}
          height={600}
          className="lg:w-[470px]"
          alt="about-section-background"
        />
      </div>
      <div className="flex flex-col gap-8 text-center md:text-start lg:max-w-xl">
        <p className="text-secondary ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-secondary">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nu pariatur excepteur sint occaecat.
        </p>
        <div className="space-x-2 md:space-x-4 mt-4">
          <Link
            href="#"
            className="font-medium text-center px-4 sm:px-8 md:px-10 lg:px-10 py-2 md:py-4 mt-2 md:mt-6 rounded-md bg-primaryYellow text-white border-2 border-primary hover:bg-transparent hover:border-primary hover:text-primary transition duration-300 ease-in-out"
          >
            View Works
          </Link>
          <Link
            href="#"
            className="font-medium text-center px-4 sm:px-8 md:px-10 lg:px-10 py-2 md:py-4 mt-2 md:mt-6 rounded-md bg-transparent text-primary border-2 border-primary hover:bg-primaryYellow hover:border-primary hover:text-white transition duration-300 ease-in-out"
          >
            Download CV
          </Link>
        </div>
      </div>
    </section>
  );
}
