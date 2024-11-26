"use client";

import { Button } from "../Button";
import { Logo } from "../Icons";

export const Header = () => {
  const menus = [
    {
      name: "About Us",
      href: "#",
    },
    {
      name: "How it Works",
      href: "#",
    },
    {
      name: "Hire Talent",
      href: "#",
    },
    {
      name: "Partner with Us",
      href: "#",
    },
    {
      name: "Contact Us",
      href: "#",
    },
  ];

  return (
    <header className="shadow-md h-[117px] flex justify-between px-8 py-6">
      <div className="logo text-black flex items-center">
        <Logo />
      </div>
      <div className="menus gap-4 flex items-center">
        {menus?.map((menu, index) => (
          <a
            key={index}
            href={menu.href}
            className="h-[41px] p-[10px] font-medium text-base capitalize"
          >
            {menu.name}
          </a>
        ))}
      </div>
      <div className="login flex items-center gap-4">
        <a
          href="#"
          className="h-[41px] p-[10px] font-medium text-base capitalize"
        >
          Login
        </a>
        <Button
          variant="outline"
          label="Get Started"
          type="submit"
          className="py-[16px] px-[32px] text-base font-semibold rounded-lg transition transform active:scale-95 "
        />
      </div>
    </header>
  );
};
