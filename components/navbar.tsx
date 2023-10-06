import React from "react";
import Container from "./ui/container";
import Link from "next/link";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import MobileNavbar from "./mobile-navbar";

export const revalidate = 0;
//
const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <MainNav data={categories} />
          <div className="hidden lg:block">
            <NavbarActions />
          </div>
        </div>
      </Container>
      <div className="block lg:hidden">
        <MobileNavbar data={categories} />
      </div>
    </div>
  );
};

export default Navbar;
