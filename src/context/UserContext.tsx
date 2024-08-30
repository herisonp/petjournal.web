'use client';
import { getSession } from '@/services/getSession';
import { User } from '@/types/userType';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

interface UserContextProps {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

export const UserContext = createContext({} as UserContextProps);

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      const { session } = await getSession();
      if (session) {
        setUser(session.user);
        return;
      }
      setUser(null);
    })();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
