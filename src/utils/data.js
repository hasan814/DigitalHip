// Temporary Data
const users = [
  { id: 1, name: "Hasan" },
  { id: 2, name: "Mohsen" },
];

const posts = [
  { id: 1, title: "Post 1", body: "...", userId: 1 },
  { id: 2, title: "Post 2", body: "...", userId: 2 },
];

export const getPosts = async () => {
  return posts;
};

export const getPost = async (id) => {
  return users.find((post) => post.id === +id);
};

export const getUser = async (id) => {
  return users.find((user) => user.id === +id);
};
