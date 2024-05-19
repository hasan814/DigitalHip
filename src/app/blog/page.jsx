import { v4 as uuidv4 } from "uuid";

import BlogPage from "@/components/templates/Blog/BlogPage";
import styles from "./Blog.module.css";
import { getPosts } from "@/utils/data";
import { getData } from "@/utils/Fetch";

export const metadata = {
  title: "Blog Page",
  description: "...",
};

const Blog = async () => {
  // =========== With API =============
  const posts = await getData();

  // =========== Without API =============
  // const posts = await getPosts();

  // =========== Rendering =============
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={uuidv4()} className={styles.post}>
          <BlogPage post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
