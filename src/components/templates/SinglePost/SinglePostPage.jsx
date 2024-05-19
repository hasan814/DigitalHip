import Image from "next/image";
import styles from "./SinglePostPage.module.css";
import PostUser from "../PostUser/PostUser";

const SinglePostPage = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={"/images/post1.jpg"}
          alt="postDetails"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src={"/images/post1.jpg"}
            alt="author"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <PostUser userId={post.userId} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
