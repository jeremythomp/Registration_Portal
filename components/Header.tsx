import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const links = [
  {
    href: "/",
    label: "Welcome",
  },
  {
    href: "/about",
    label: "About ID Card",
  },
  {
    href: "/faq",
    label: "FAQ",
  },
  {
    href: "/contact-us",
    label: "Contact Us",
  },
];

const Header = (props: Props) => {
  return (
    <header className="w-full">
      <div className="px-1 py-2 flex flex-row items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/Images/trident-logo.png"
            alt="Trident ID logo"
            width="150"
            height="12"
          />
        </Link>
        <div className="mr-4 hover:cursor-pointer lg:hidden">
          <Image
            src='/assets/Images/Hamburger 1.svg'
            alt='Hamburger menu icon'
            width='25'
            height='25'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
