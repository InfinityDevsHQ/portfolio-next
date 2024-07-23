import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="flex flex-col-reverse gap-6 justify-center md:grid md:grid-cols-2 max-w-7xl mx-auto items-center justify-items-center px-4 py-8"
      id="home"
    >
      <div className="flex flex-col gap-4 items-center justify-center md:items-start md:justify-start">
        <h2 className="text-5xl md:text-7xl font-semibold">I’m Michael</h2>
        <h4 className="text-xl md:text-2xl text-[#666] text-center md:text-start">
          Freelance Web &amp; Mobile UI/UX Designer
        </h4>
        <Link
          href="#"
          className="text-xl font-medium text-center px-12 md:px-14 lg:px-16 py-2 md:py-4 mt-2 md:mt-6 md:w-1/2 bg-primary text-white border-2 border-primary hover:bg-transparent  hover:border-blue-500 hover:text-primary transition duration-300 ease-in-out"
        >
          Hire Me
        </Link>
      </div>
      <div className="">
        <Image
          width={600}
          height={600}
          src="/hero-image.png"
          alt="hero-image"
        />
      </div>
    </div>
  );
}
