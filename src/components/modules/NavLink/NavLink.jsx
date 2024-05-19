"use client";

import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";
import Link from "next/link";

const NavLink = ({ item }) => {
  const path = usePathname();
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${path === item.path && styles.active}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
