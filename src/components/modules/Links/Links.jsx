"use client";

import { v4 as uuidv4 } from "uuid";
import { PageLinks } from "@/utils/helper";

import styles from "./Links.module.css";
import NavLink from "../NavLink/NavLink";
import { useState } from "react";

const Links = () => {
  // ========= Temp ==========
  const session = true;
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
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}{" "}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        className={styles.menuBtn}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
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
