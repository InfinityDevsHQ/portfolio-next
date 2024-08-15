import Link from "next/link";
import {
  EmailIcon,
  FacebookIcon,
  LinkedIn,
  LocationIcon,
  PhoneIcon,
  TwitterIcon,
  WorldIcon,
} from "./General/icons";
import { Underline } from "./General/underline";

const socialIcons = [
  { icon: <FacebookIcon className="size-4 no-bg" /> },
  { icon: <TwitterIcon className="size-4 no-bg" /> },
  { icon: <LinkedIn className="size-4 no-bg" /> },
];

const contactInfo = [
  {
    icon: <LocationIcon className="size-5 text-[#727b86] " />,
    text: "DroitThemes, Mirpur DOHS, Dhaka",
  },
  {
    icon: <EmailIcon className="size-5 text-[#727b86]" />,
    text: "inova.theme@gmail.com",
  },
  {
    icon: <PhoneIcon className="size-5 text-[#727b86] mt-1" />,
    text: "+92548616475 <br /> +92548616475",
  },
  {
    icon: <WorldIcon className="size-5 text-[#727b86]" />,
    text: "www.droitthemes.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white w-full">
      <div className="max-w-[1200px] mx-auto px-4 py-16 md:py-20 lg:py-28">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-[45px] relative font-bold text-center pb-3 mb-4 md:pb-6 md:mb-8">
            Contact Me
            <Underline style="h-1" />
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h4 className="text-lg text-darkText font-medium">Contact Info</h4>
            <ul className="flex flex-col gap-4 md:gap-8 my-4 md:my-6">
              {contactInfo.map((info, index) => (
                <li
                  key={index}
                  className="flex items-center lg:items-start gap-2"
                >
                  {info.icon}
                  <span
                    className="text-[#727b86]"
                    dangerouslySetInnerHTML={{ __html: info.text }}
                  />
                </li>
              ))}
            </ul>

            <h5 className="text-lg lg:text-xl text-darkText">Follow Me</h5>
            <ul>
              <li className="flex items-center gap-1.5 my-4">
                {socialIcons.map((icon, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="p-1.5 rounded-full transition-all duration-500 ease-in-out hover:fill-primary"
                  >
                    {icon.icon}
                  </Link>
                ))}
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <form>
              <div>
                <label className="uppercase text-sm text-darkText">Name</label>
                <br />
                <input
                  className="input-shadow placeholder:text-placeholderText w-full h-16 py-2 px-6 my-2 md:my-4 focus:outline-none"
                  placeholder="Type your name"
                  type="text"
                />

                <div className="flex flex-col md:flex-row items-stretch justify-stretch gap-4 my-4 md:my-0">
                  <div className="w-full">
                    <label className="uppercase text-sm text-darkText">
                      Phone Number
                    </label>
                    <br />
                    <input
                      className="input-shadow placeholder:text-placeholderText w-full h-16 py-2 px-6 my-2 md:my-4 focus:outline-none"
                      placeholder="Type your phone number"
                      type="text"
                    />
                  </div>
                  <div className="w-full">
                    <label className="uppercase text-sm text-darkText">
                      Email
                    </label>
                    <br />
                    <input
                      className="input-shadow placeholder:text-placeholderText w-full h-16 py-2 px-6 my-2 md:my-4 focus:outline-none"
                      placeholder="Type your email address"
                      type="email"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p>
                  <label className="uppercase text-sm text-darkText">
                    Your Message
                  </label>
                  <br />
                  <span>
                    <textarea
                      className="input-shadow placeholder:text-placeholderText w-full h-44 py-2 px-6 my-4 focus:outline-none"
                      placeholder="Type your message here"
                    ></textarea>
                  </span>
                </p>
              </div>
              <div>
                <button
                  className="font-medium text-center px-8 md:px-14 lg:px-10 py-4 md:py-4 lg:py-5 mt-2 md:mt-6 bg-primary text-white border-2  hover:bg-black hover:text-white transition duration-300 ease-in-out"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
