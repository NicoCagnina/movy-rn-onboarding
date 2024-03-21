import React, {createContext, useContext, useState} from 'react';

interface UserContextType {
  isSignedIn: boolean;
  toggleUserIsSignedIn: () => void;
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
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const addFavorites = (moviesToAdd: number[]) => {
    setFavorites(prevFavorites => [...prevFavorites, ...moviesToAdd]);
  };

  const toggleUserIsSignedIn = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <UserContext.Provider
      value={{isSignedIn, toggleUserIsSignedIn, favorites, addFavorites}}>
      {children}
    </UserContext.Provider>
  );
};
