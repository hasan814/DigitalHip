import { getUser } from "@/utils/data";
import styles from "./PostUser.module.css";

const PostUser = async ({ userId }) => {
  // ============= With API ==============
  // const user = await getUserData(userId);

  // ============= Without API ==============
  const user = await getUser(userId);
  console.log(user);
  // ============= Rendering ==============
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.name}</span>
    </div>
  );
};

export default PostUser;
