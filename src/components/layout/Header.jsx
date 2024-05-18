import Links from "../modules/Links";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>Weblog</div>
      <div>
        <Links />
      </div>
    </header>
  );
};

export default Header;
