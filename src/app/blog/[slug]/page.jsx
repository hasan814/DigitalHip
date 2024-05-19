import SinglePostPage from "@/components/templates/SinglePost/SinglePostPage";

// export async function generateMetadata({ params }) {
//   // ========= Read route params ==========
//   const id = params.id;

//   // =========== Fetch data ============
//   const response = await fetch(`/${id}`);
//   const product = await response.json();

//   return { title: product.title };
// }

const SinglePost = () => {
  return <SinglePostPage />;
};

export default SinglePost;
