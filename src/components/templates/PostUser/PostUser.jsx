import { getUser } from "@/utils/data";
import styles from "./PostUser.module.css";
import Image from "next/image";

const PostUser = async ({ userId }) => {
  // ============= With API ==============
  // const user = await getUserData(userId);

  // ============= Without API ==============
  const user = await getUser(userId);

  // ============= Rendering ==============
  return (
    <div className={styles.container}>
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        alt="author"
        width={50}
        height={50}
        className={styles.avatar}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
