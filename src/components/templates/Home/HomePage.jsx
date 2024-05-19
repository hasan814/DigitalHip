import Image from "next/image";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creating Thoughts Agency</h1>
        <p>
          Taking control of your life means cutting through all the noise,
          finding emotional and physical balance, thinking more clearly, and
          advocating for yourself—Here's how to do it.
        </p>
        <div className={styles.btns}>
          <button className={styles.btn}>Learn More</button>
          <button className={styles.btn}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src={"/brands.png"}
            alt="home"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={"/hero.gif"} alt="hero" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default HomePage;
