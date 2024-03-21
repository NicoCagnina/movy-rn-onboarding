import React, {createContext, useContext, useState} from 'react';

interface UserContextType {
  email: string;
  setUserEmail: (email: string) => void;
  favorites: number[] | null;
  addFavorites: (moviesToAdd: number[]) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [email, setEmail] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);

  const addFavorites = (moviesToAdd: number[]) => {
    setFavorites(prevFavorites => [...prevFavorites, ...moviesToAdd]);
  };

  const setUserEmail = (email: string) => {
    setEmail(email);
  };

  return (
    <UserContext.Provider
      value={{email, setUserEmail, favorites, addFavorites}}>
      {children}
    </UserContext.Provider>
  );
};
