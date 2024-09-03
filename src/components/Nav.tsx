import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
const Nav = () => {
  return (
    <>
      <Navbar className="py-2" isBordered>
        <NavbarContent justify="start">
          <div className="lg:hidden">
            {" "}
            <NavbarMenuToggle />
          </div>
          <NavbarBrand className="hidden lg:flex">
            <Link href={"/"}>
              <img src="/logo.png" alt="" />
            </Link>
          </NavbarBrand>
          <Link href={"/"}>
            <NavbarItem className="font-bold hidden lg:flex">Home</NavbarItem>
          </Link>
          <Link href={"/#product"}>
            <NavbarItem className="font-bold hidden lg:flex">
              Product
            </NavbarItem>
          </Link>
        </NavbarContent>
        <NavbarContent className="lg:hidden" justify="center">
          {" "}
          <Link href={"/"}>
            <img src="/logo.png" alt="" />
          </Link>
        </NavbarContent>
        <NavbarContent as="div" className="items-center gap-10" justify="end">
          <NavbarItem className="hidden lg:flex items-center justify-center flex-col">
            <Link href={"/cart"}>
              <ShoppingCart />
            </Link>
          </NavbarItem>

          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem className="h-40 w-[20rem] text-center">
                {" "}
                empty
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem className="pt-5">
            {" "}
            <Link href={"/cart"}>
              <div className="flex gap-2">
                <ShoppingCart /> Cart
              </div>
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Nav;
