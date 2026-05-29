"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { use } from "react";
import classes from "./NavLink.module.css"
export default function NavLink({href,children}) {
  const path = usePathname()
  return (
    <li>
      <Link href={href} className={path.startsWith(href) ? `${classes.active} ${classes.link}` : classes.link}>{children}</Link>
    </li>
  );
}
