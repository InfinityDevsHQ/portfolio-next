import Image from "next/image"
import { Underline } from "./General/underline"

export default function About() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 px-4 py-28">
      <div className="relative">
        <h2 className=" text-3xl md:text-[40px] font-bold absolute pb-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 capitalize">
          About me
          <Underline style="h-1" />
        </h2>
        <Image
          width={600}
          height={600}
          src="/about_shape_bg.png"
          alt="about-section-background"
        />
      </div>
      <div className="flex flex-col max-w-2xl gap-8 text-center md:text-start">
        <p className="text-[#8a8fa3] ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-[#8a8fa3]">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nu pariatur excepteur sint occaecat.
        </p>
        <div className="space-x-2 md:space-x-4 mt-4">
          <a
            href="#"
            className="font-medium text-center px-4 sm:px-8 md:px-10 lg:px-12 py-2 md:py-4 mt-2 md:mt-6 md:w-1/2 bg-primary text-white border-2 border-primary hover:bg-transparent hover:border-primary hover:text-primary transition duration-300 ease-in-out"
          >
            View Works
          </a>
          <a
            href="#"
            className="font-medium text-center px-4 sm:px-8 md:px-10 lg:px-12 py-2 md:py-4 mt-2 md:mt-6 md:w-1/2 bg-transparent text-primary border-2 border-primary hover:bg-primary hover:border-primary hover:text-white transition duration-300 ease-in-out"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  )
}
