"use client";

import { Button } from "../Button";
import { Logo } from "../Icons";

export const Header = () => {
  const menus = [
    {
      name: "About Us",
      href: "/about-us",
    },
    {
      name: "How it Works",
      href: "/hire-from-us",
    },
    {
      name: "Hire Talent",
      href: "#",
    },
    {
      name: "Partner with Us",
      href: "/partner-with-us",
    },
    {
      name: "Contact Us",
      href: "/contact-us",
    },
  ];

  return (
    <header className="py-8 bg-white">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="logo">
            <a href="/">
              <Logo />
            </a>
          </div>
          <div className="menus gap-4 flex items-center">
            {menus?.map((menu, index) => (
              <a
                key={index}
                href={menu.href}
                className="p-2.5 font-medium text-base capitalize text-primary-400 hover:text-primary-200 transition-all duration-500 ease-in"
              >
                {menu.name}
              </a>
            ))}
          </div>
          <div className="login flex items-center gap-6">
            <a
              href="#"
              className="p-2.5 font-medium text-base capitalize text-primary-400 hover:text-primary-200 transition-all duration-500 ease-in"
            >
              Login
            </a>
            <Button
              variant="outline"
              label="Get Started"
              type="submit"
              className="py-4 px-8 text-base leading-5 font-medium rounded-lg capitalize text-accent-300 border-accent-300 hover:bg-accent-100 transition-all duration-500 ease-in"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
