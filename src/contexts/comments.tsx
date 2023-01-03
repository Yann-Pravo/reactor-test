import React, { useMemo, useState, createContext, ReactNode } from "react";
import Comment from "../types/comment";
import { getComments, writeComments } from "./helpers";

interface CommentsContextInterface {
  comments: Comment[];
  addComment: (comment: Comment) => void;
  removeComment: (id: string) => void;
}

export const CommentsContext = createContext<CommentsContextInterface>(
  {} as CommentsContextInterface
);

const CommentsProvider = ({ children }: { children: ReactNode }) => {
  const [comments, setComments] = useState<Comment[]>(getComments());

  const addComment = (comment: Comment) => {
    const updatedComments = [...comments];
    updatedComments.push(comment);
    setComments(updatedComments);
    writeComments(updatedComments);
  };

  const removeComment = (commentId: string) => {
    const updatedComments = [...comments];
    const commentIndex = updatedComments.findIndex(
      ({ id }) => id === commentId
    );
    updatedComments.splice(commentIndex, 1);
    setComments(updatedComments);
    writeComments(updatedComments);
  };

  const value = useMemo(
    () => ({
      comments,
      addComment,
      removeComment,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [comments]
  );

  return (
    <CommentsContext.Provider value={value}>
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsProvider;
