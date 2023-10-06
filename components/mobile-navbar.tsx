"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import NavbarActions from "./navbar-actions";
import { LuAlignJustify } from "react-icons/lu";

interface MainNavProps {
  data: Category[];
}

const MobileNavbar: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex flex-col h-full">
      <div className="border-b fixed w-full bg-beige">
        <div className="flex items-center top-0 right-0 left-0 py-4 px-2 gap-x-4">
          <Link href={"/"} className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-lg lg:text-xl transition-colors hover:text-jaune">
              Car Store
            </p>
          </Link>
          <NavbarActions />
          <button
            onClick={toggleSidebar}
            //   className={`translate duration-500 origin-center ${
            //     isOpen && "rotate-[180deg]"
            //   }`}
          >
            <LuAlignJustify className="w-10 h-10" />
          </button>
        </div>
      </div>
      <div
        className={`bg-beige transform mt-16 border-t ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 fixed top-0 left-0 h-full z-20 w-full`}
      >
        <nav className="flex flex-col p-8 gap-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={toggleSidebar}
              className={`text-3xl font-medium transition-colors hover:text-jaune ${
                route.active ? "text-jaune" : ""
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
