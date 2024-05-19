import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Weblog</div>
      <div className={styles.text}>
        <p>
          Developed by <span>hasan moosavi </span> &copy; all rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
