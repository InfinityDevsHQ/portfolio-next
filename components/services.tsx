import Image from "next/image";
import { Underline } from "./General/underline";
import { servicesArray } from "../constants";

export default function Services() {
  return (
    <div
      className="max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-28"
      id="services"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-[45px] font-bold relative text-center pb-3 mb-4 md:pb-6 md:mb-8">
          Services
          <Underline style="h-1" />
        </h2>
        <p className="text-[#8a8fa3] text-center max-w-3xl mx-auto mb-8 md:mb-20">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natur
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        {servicesArray.map((service, index) => (
          <div
            className="text-white px-4 py-6 sm:px-10 sm:py-8 md:px-14 md:py-12 lg:px-20 lg:py-16 rounded-2xl"
            style={service.style}
            key={index}
          >
            <div className="flex flex-col gap-4 items-center md:items-start justify-center text-center md:text-start">
              <Image
                width={40}
                height={60}
                src="/phone_icon.png"
                alt="phone-logo"
              />
              <h3 className="text-2xl md:text-3xl font-semibold">
                {service.title}
              </h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                dolore dolore eu fugiat.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
