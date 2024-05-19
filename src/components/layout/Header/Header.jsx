import Link from "next/link";
import styles from "./Header.module.css";
import Links from "@/components/modules/Links/Links";

const Header = () => {
  return (
    <header className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        Weblog
      </Link>
      <div>
        <Links />
      </div>
    </header>
  );
};

export default Header;
