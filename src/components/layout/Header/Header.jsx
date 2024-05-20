import { auth } from "@/utils/auth";

import Link from "next/link";
import styles from "./Header.module.css";
import Links from "@/components/modules/Links/Links";

const Header = async () => {
  const session = await auth();

  return (
    <header className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        Weblog
      </Link>
      <div>
        <Links session={session} />
      </div>
    </header>
  );
};

export default Header;
