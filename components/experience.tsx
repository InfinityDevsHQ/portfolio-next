import { experienceArray } from "../constants";
import { Underline } from "./General/underline";

export default function Experience() {
  return (
    <div
      className="max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-28"
      id="experience"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-40 md:text-5xl relative font-bold text-center pb-3 mb-4 md:pb-6 md:mb-8">
          Work Experience
          <Underline style="h-1" />
        </h2>
        <p className="text-secondary text-center max-w-3xl mx-auto mb-8 md:mb-20">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natur
        </p>
      </div>
      <div className="grid md:grid-cols-3">
        {experienceArray.map((exp, index) => (
          <div
            className="px-4 py-8 md:px-10 md:py-14 border border-zinc-100 bg-white text-secondary hover:text-black/80 hover:bg-primary transition duration-300 ease-in-out"
            key={index}
          >
            <div className="flex flex-col gap-4 items-start justify-center ">
              <span>June 2020-2024</span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-black/80">
                {exp.title}
              </h3>
              <span>Adobe Inc.</span>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, coectetur adipisicing elit, sed do
                eiusmod temp incididunt ut labore.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
