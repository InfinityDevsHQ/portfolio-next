import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row gap-6 justify-center xl:justify-between max-w-[1200px] mx-auto items-center lg:items-start px-4 pt-20 sm:pt-24 md:pt-28 lg:pt-40 lg:px-0 xl:pt-[185px]"
    >
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start xl:max-w-lg lg:pt-32 lg:px-4">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-primaryDark text-center md:text-start mb-1 ">
          I’m Michael
        </h2>
        <h4 className="text-lg md:text-xl lg:text-2xl text-secondaryDark text-center md:text-start max-w-md mb-4 sm:mb-6 lg:mb-12">
          Freelance Web &amp; Mobile UI/UX Designer
        </h4>
        <Link
          href="#contactForm"
          className="text-xl font-medium text-center px-12 md:px-8 md:py-4 lg:px-16 py-2 md:w-1/2 bg-[#fec110] text-white border-2 border-primary hover:bg-transparent  hover:border-[#edecec] hover:text-primary rounded transition duration-300 ease-in-out whitespace-nowrap"
        >
          Hire Me
        </Link>
      </div>
      <div className="xl:w-[670px] xl:h-[635]">
        <Image
          src="/hero-image.png"
          alt="hero image"
          width={670}
          height={635}
        />
      </div>
    </section>
  );
}
