import BlogPage from "@/components/templates/Blog/BlogPage";
import styles from "./Blog.module.css";

export const metadata = {
  title: "Blog Page",
  description: "...",
};

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <BlogPage />
      </div>
      <div className={styles.post}>
        <BlogPage />
      </div>
      <div className={styles.post}>
        <BlogPage />
      </div>
      <div className={styles.post}>
        <BlogPage />
      </div>
    </div>
  );
};

export default Blog;
