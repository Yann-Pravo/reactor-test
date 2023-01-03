import React, { useMemo, useState, createContext, ReactNode } from "react";
import { getUser, users, writeUser } from "./helpers";

interface UserContextInterface {
  user: string;
  changeUser: () => void;
}

export const UserContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string>(getUser());

  const changeUser = () => {
    let userIndex = users.findIndex((aUser) => aUser === user);

    const newUser =
      userIndex >= users.length - 1 ? users[0] : users[userIndex + 1];
    writeUser(newUser);
    setUser(newUser);
  };

  const value = useMemo(
    () => ({
      user,
      changeUser,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
