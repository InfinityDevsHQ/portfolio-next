import Link from "next/link";
import { experienceArray } from "../constants";
import { Underline } from "./General/underline";

export default function Experience() {
  return (
    <section id="experiences" className="bg-background border-b border-primary">
      <div className="max-w-[1200px] mx-auto px-4 py-16 md:py-20 lg:py-28">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-[45px] relative font-bold text-center pb-3 mb-4 md:pb-6 md:mb-8 text-primaryDark">
            Work Experience
            <Underline style="h-1" />
          </h2>
          <p className="text-secondary text-center max-w-3xl mx-auto mb-8 md:mb-20">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natur
          </p>
        </div>
        <div className="grid md:grid-cols-3">
          {experienceArray.map((exp, index) => (
            <Link
              href="/"
              className="px-4 py-8 md:px-10 md:py-14 lg:py-20 border border-[#edecec] bg-white text-secondary hover:text-black/80 hover:bg-primaryYellow transition duration-300 ease-in-out group"
              key={index}
            >
              <div className="flex flex-col gap-1 items-center md:items-start md:text-start justify-center md:justify-start text-sm">
                <span>June 2020-2024</span>
                <h3 className="text-2xl font-semibold text-primaryDark ">
                  {exp.title}
                </h3>
                <span className="group-hover:text-secondary">Adobe Inc.</span>
                <span className="text-sm mt-4 text-center md:text-start">
                  Lorem ipsum dolor sit amet, coectetur adipisicing elit, sed do
                  eiusmod temp incididunt ut labore.
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
