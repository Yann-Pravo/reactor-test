import Comment from "../types/comment";

export const getComments = (): Comment[] => {
  const comments = localStorage.getItem("comments");

  if (!comments) return [];

  return JSON.parse(comments);
};

export const writeComments = (comments: Comment[]) => {
  const stringifyiedComments = JSON.stringify(comments);
  localStorage.setItem("comments", stringifyiedComments);
};

export const users = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
];

export const getUser = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    const newUser = users[0];
    localStorage.setItem("user", newUser);
    return newUser;
  }

  return user;
};

export const writeUser = (user: string) => localStorage.setItem("user", user);
