"use client";

import { Logo } from "@/images";
import { Button } from "../Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const menus = [
    {
      name: "About Us",
      href: "/about-us",
    },
    {
      name: "Hire Talent",
      href: "/hire-from-us",
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
    <header className="sm:py-8 py-6 bg-white fixed top-0 left-0 w-full z-999">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="logo">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                className="xl:w-[211px] sm:w-[180px] w-[90px]"
              />
            </Link>
          </div>
          <div className="lg:hidden block">
            <div
              className={`hamburger ${isOpen ? "is-active" : ""}`}
              onClick={toggleMenu}
            >
              <span className="line"></span>
              <span className="line opacity-0"></span>
              <span className="line"></span>
            </div>
            {isOpen && (
              <div className="absolute left-0 top-full w-full z-990">
                <div className="container">
                  <div className="flex flex-col gap-3 py-4 bg-white sm:h-[calc(100vh-102px)] h-[calc(100vh-76px)] no-scrollbar overflow-y-auto">
                    <div className="menus lg:gap-[22px] md:gap-4 gap-3 lg:hidden flex flex-col">
                      {menus?.map((menu, index) => (
                        <Link
                          key={index}
                          href={menu.href}
                          onClick={() => {
                            setIsOpen((prev) => !prev);
                          }}
                          className="py-2.5 font-medium text-base capitalize text-primary-400 hover:text-primary-200 transition-all duration-500 ease-in"
                        >
                          {menu.name}
                        </Link>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3">
                      <a
                        href="#"
                        className="py-2.5 font-medium text-xs text-center capitalize text-primary-400 hover:text-primary-200 transition-all duration-500 ease-in"
                      >
                        Login
                      </a>
                      <Button
                        onClick={() => router.push("/contact-us")}
                        variant="outline"
                        label="Get Started"
                        type="submit"
                        className="xl:py-4 py-3 2xl:px-8 xl:px-6 px-5 text-xs font-medium rounded-lg capitalize text-accent-300 border-accent-300 hover:bg-accent-100 transition-all duration-500 ease-in"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <ul className="menus 2xl:gap-4 xl:gap-3 gap-2 lg:flex hidden items-center">
            {menus?.map((menu, index) => {
              const isActive = menu.href === path;
              return (
                <li key={index} className="2xl:px-2.5 px-2 py-2.5">
                  <Link
                    href={menu.href}
                    className={clsx(
                      " before:content-[''] before:absolute before:top-full before:h-px before:bg-primary-200 relative font-medium xl:text-base text-sm capitalize text-primary-400 hover:text-primary-200 transition-all duration-500 ease-in",
                      {
                        "before:w-full": isActive,
                      }
                    )}
                  >
                    {menu.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="login lg:flex hidden items-center 2xl:gap-6 xl:gap-5 gap-4">
            <a
              href="#"
              className="2xl:px-2.5 px-2 py-2.5 font-medium xl:text-base text-sm capitalize text-primary-400 hover:text-primary-200 transition-all duration-500 ease-in"
            >
              Login
            </a>
            <Button
              onClick={() => router.push("/contact-us")}
              variant="outline"
              label="Get Started"
              type="submit"
              className="xl:py-4 py-3 2xl:px-8 xl:px-6 px-5 xl:text-base text-sm xl:leading-5 font-medium rounded-lg capitalize text-accent-300 border-accent-300 hover:bg-accent-100 transition-all duration-500 ease-in"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
