import Link from "next/link";
import {
  DribbleIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedIn,
  PinIcon,
  TwitterIcon,
} from "./General/icons";

const socialIcons = [
  { icon: <FacebookIcon className="size-5" /> },
  { icon: <TwitterIcon className="size-5" /> },
  { icon: <LinkedIn className="size-5" /> },
  { icon: <PinIcon className="size-5" /> },
  { icon: <DribbleIcon className="size-5" /> },
  { icon: <InstagramIcon className="size-5" /> },
];

function FooterIcons({ icon, index }: any) {
  return (
    <Link
      key={index}
      href="/"
      className="bg-muted hover:bg-primary p-2 sm:p-3 md:p-4 rounded-full transition duration-500 ease-in-out"
    >
      {icon}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-100 w-full px-4 py-8 md:py-10">
      <div className="flex flex-col items-center gap-6 justify-center max-w-2xl mx-auto px-4 py-10 md:py-14">
        <Link href="#">
          <h2 className="text-8xl text-primary font-bold">M.</h2>
        </Link>
        <p className="text-center font-light text-lg text-secondary">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <ul>
          <li className="flex gap-2 flex-row">
            {socialIcons.map((item, index) => (
              <FooterIcons key={index} icon={item.icon} />
            ))}
          </li>
        </ul>
      </div>
      <div>
        <p className="text-black text-center">Copyright © 2023 DroitThemes</p>
      </div>
    </footer>
  );
}
