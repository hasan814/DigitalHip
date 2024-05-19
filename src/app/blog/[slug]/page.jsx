import SinglePostPage from "@/components/templates/SinglePost/SinglePostPage";
import { getPost } from "@/utils/data";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePost = async ({ params: { slug } }) => {
  // =========== With API ===============
  // const post = await getDataById(slug);

  // =========== Without API ===============
  const post = await getPost(slug);

  // =========== Rendering ===============
  return <SinglePostPage post={post} />;
};

export default SinglePost;
