"use client";
import Link from "next/link";
import React from "react";
import { BiSolidBug } from "react-icons/bi";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const currentName = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 p-5 h-14 border-b items-center">
      <Link href="/">
        <BiSolidBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            className={classNames({
              "text-zinc-900": link.href === currentName,
              "text-zinc-500": link.href !== currentName,
              "hover:text-zinc-800 translate-colors": true,
            })}
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
