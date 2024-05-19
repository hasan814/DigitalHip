import Image from "next/image";
import styles from "./SinglePostPage.module.css";
import PostUser from "../PostUser/PostUser";
// import PostUser from "../PostUser/PostUser";

const SinglePostPage = ({ post }) => {
  console.log(post);
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          {/* <Image src={post.img} alt="postDetails" fill className={styles.img} /> */}
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <PostUser userId={post.userId} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
