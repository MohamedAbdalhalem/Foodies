import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import Image from "next/image";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./NavLink";
export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
        </Link>
        <nav className={classes.nav}>
          <ul>
            <NavLink href="/meals">Browse Meals</NavLink>

            <NavLink href="/community">Foodies Communtiy</NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}
