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
