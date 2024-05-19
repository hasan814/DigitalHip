import SinglePostPage from "@/components/templates/SinglePost/SinglePostPage";
import { getPost } from "@/utils/data";
import { getDataById } from "@/utils/Fetch";

const SinglePost = async ({ params: { slug } }) => {
  // =========== With API ===============
  // const post = await getDataById(slug);

  // =========== Without API ===============
  const post = await getPost(slug);

  // =========== Rendering ===============
  return <SinglePostPage post={post} />;
};

export default SinglePost;
