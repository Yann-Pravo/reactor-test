import React, { useContext } from "react";
import Chat from "../../components/Chat";
import { CommentsContext } from "../../contexts/comments";
import { UserContext } from "../../contexts/user";

const Main: React.FC = () => {
  const { comments, addComment, removeComment } = useContext(CommentsContext);
  const { user, changeUser } = useContext(UserContext);

  return (
    <Chat
      comments={comments}
      addComment={addComment}
      removeComment={removeComment}
      user={user}
      changeUser={changeUser}
    />
  );
};

export default Main;
