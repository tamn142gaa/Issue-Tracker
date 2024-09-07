import Link from "next/link";
import React from "react";
import { BiSolidBug } from "react-icons/bi";

const NavBar = () => {
  return (
    <nav className="flex space-x-6 p-5 h-14 border-b items-center">
      <Link href="/">
        <BiSolidBug />
      </Link>
      <ul className="flex space-x-6">
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/issues">Issues</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
