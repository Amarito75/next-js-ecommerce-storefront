"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import NavbarActions from "./navbar-actions";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <div className="hidden lg:block">
      <div className="flex justify-between items-center">
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
          <Link href={"/"} className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-lg lg:text-xl transition-colors hover:text-jaune">
              Car Store
            </p>
          </Link>
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-xs lg:text-sm font-medium transition-colors hover:text-jaune",
                route.active ? "text-jaune" : ""
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MainNav;
