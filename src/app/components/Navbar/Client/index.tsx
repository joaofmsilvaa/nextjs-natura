"use client";

import React from "react";
import styles from "../styles.module.css";
import { usePathname, useRouter } from "next/navigation";

export default function NavbarClient() {
  const path = usePathname();
  const router = useRouter();

  return (
    <nav>
      <div>
        <div className={styles.logo}>
          <img src="/assets/1.svg" alt="Natura logo"></img>
        </div>
      </div>
      <ul>
        <li className={path == "/" ? styles.selected : ""}>
          <a onClick={() => {router.push("/")}}>Home</a>
        </li>
        <li className={path == "/about" ? styles.selected : ""}>
          <a onClick={() => {router.push("/about")}}>About</a>
        </li>
        <li className={path == "/contact" ? styles.selected : ""}>
          <a onClick={() => {router.push("/contact")}}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
