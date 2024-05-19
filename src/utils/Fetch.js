export const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });
  if (!response.ok) throw new Error("Something went wrnog !");
  const data = await response.json();
  return data;
};

export const getDataById = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: { revalidate: 3600 },
    }
  );
  if (!response.ok) throw new Error("Something went wrnog !");
  const data = await response.json();
  return data;
};

export const getUserData = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) throw new Error("Something went wrnog !");
  const data = await response.json();
  return data;
};
