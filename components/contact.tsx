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
  { icon: <FacebookIcon className="size-4" /> },
  { icon: <TwitterIcon className="size-4" /> },
  { icon: <LinkedIn className="size-4" /> },
];

const contactInfo = [
  {
    icon: <LocationIcon className="size-5 " />,
    text: "DroitThemes, Mirpur DOHS, Dhaka",
  },
  { icon: <EmailIcon className="size-5" />, text: "inova.theme@gmail.com" },
  {
    icon: <PhoneIcon className="size-5 mt-1" />,
    text: "+92548616475 <br /> +92548616475",
  },
  { icon: <WorldIcon className="size-5" />, text: "www.droitthemes.com" },
];

export default function Contact() {
  return (
    <div className="bg-white w-full" id="contact">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-28">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-[45px] relative font-bold text-center pb-3 mb-4 md:pb-6 md:mb-8">
            Contact Me
            <Underline style="h-1" />
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="">
            <h4 className="text-lg text-black/80 font-medium">Contact Info</h4>
            <ul className="flex flex-col gap-4 md:gap-8 my-4 md:my-6">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center gap-2">
                  {info.icon}
                  <span
                    className="text-secondary"
                    dangerouslySetInnerHTML={{ __html: info.text }}
                  />
                </li>
              ))}
            </ul>

            <h5 className="text-lg font-medium">Follow Me</h5>
            <ul className="">
              <li className="flex items-center gap-1.5 my-4">
                {socialIcons.map((icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="bg-[#dce2ed] hover:bg-primary p-1.5  rounded-full transition duration-500 ease-in-out"
                  >
                    {icon.icon}
                  </Link>
                ))}
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <form className="">
              <div className="">
                <label className="uppercase text-sm">Name</label>
                <br />
                <input
                  className="input-shadow w-full h-16 py-2 px-6 my-2 md:my-4 focus:outline-none"
                  placeholder="Type your name"
                  type="text"
                />

                <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 my-4 md:my-0">
                  <div className="">
                    <label className="uppercase text-sm">Phone Number</label>
                    <br />
                    <input
                      className="input-shadow w-full h-16 py-2 px-6 my-2 md:my-4 focus:outline-none"
                      placeholder="Type your phone number"
                      type="text"
                    />
                  </div>
                  <div className="">
                    <label className="uppercase text-sm">Email</label>
                    <br />
                    <input
                      className="input-shadow w-full h-16 py-2 px-6 my-2 md:my-4 focus:outline-none"
                      placeholder="Type your email address"
                      type="email"
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <p>
                  <label className="uppercase text-sm">Your Message</label>
                  <br />
                  <span className="">
                    <textarea
                      className="input-shadow w-full h-44 py-2 px-6 my-4 focus:outline-none"
                      placeholder="Type your message here"
                    ></textarea>
                  </span>
                </p>
              </div>
              <div className="">
                <button
                  className="font-medium text-center px-8 md:px-14 lg:px-10 py-4 md:py-4 mt-2 md:mt-6  md:w-1/3 bg-primary text-white border-2  hover:bg-black  hover:text-white transition duration-300 ease-in-out"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
