'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from './Button';
import { Container } from './Container';
import classNames from 'classnames';

const links = [
  {
    href: '/',
    label: 'Welcome',
  },
  {
    href: '/about',
    label: 'About ID Card',
  },
  {
    href: '/faq',
    label: 'FAQ',
  },
  {
    href: '/contact-us',
    label: 'Contact Us',
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full">
      <Container className="flex items-center justify-between min-h-[var(--navigation-height)]">
        <Link href="/">
          <Image
            src="/assets/Images/trident-logo.png"
            alt="Trident ID logo"
            width="160"
            height="12"
          />
        </Link>
        <nav
          className={classNames(
            'h-full md:block fixed top-[var(--navigation-height)] left-0',
            isOpen ? '' : 'hidden'
          )}
        >
          <ul className="flex items-center h-full [&_a]:text-sm [&_li]:ml-12 text-black font-semibold">
            <li>
              <Link href="#">Welcome</Link>
            </li>
            <li>
              <Link href="#">About ID Card</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="items-center hidden h-full md:block">
          <Link className="mr-6 text-sm font-semibold text-black" href="#">
            Login
          </Link>
          <Button href="#" variant="primary" size="large">
            Register
          </Button>
        </div>

        <button className="ml-6 md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="sr-only">Toggle menu</span>
          <Image
            src="/assets/Images/Hamburger1.svg"
            alt="Hamburger menu icon"
            width="34"
            height="34"
          />
        </button>
      </Container>
    </header>
  );
};

export default Header;
