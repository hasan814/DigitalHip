import Image from "next/image";
import styles from "./BlogPage.module.css";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={"/images/post1.jpg"}
            alt="post"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil illum
          obcaecati autem voluptates vel amet aperiam magnam ducimus dolorem
          quos?
        </p>
        <Link className={styles.link} href={"/blog/post"}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogPage;
