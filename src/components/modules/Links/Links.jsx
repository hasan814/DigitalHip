"use client";

import { handleLogout } from "@/utils/action";
import { v4 as uuidv4 } from "uuid";
import { PageLinks } from "@/utils/helper";
import { useState } from "react";

import styles from "./Links.module.css";
import NavLink from "../NavLink/NavLink";
import Image from "next/image";

const Links = ({ session }) => {
  // ========= Temp ==========
  const isAdmin = true;

  // ========= State ==========
  const [open, setOpen] = useState(false);

  // ========= Rendering ==========
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {PageLinks.map((link) => (
          <NavLink key={uuidv4()} item={link} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}{" "}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        src={"/menu.png"}
        alt="menu"
        width={30}
        height={30}
        className={styles.menuBtn}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {PageLinks.map((link) => (
            <NavLink key={uuidv4()} item={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
