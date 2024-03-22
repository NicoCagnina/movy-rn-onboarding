import React, {createContext, useContext, useEffect, useState} from 'react';
import {editUserFavorites, getUserFavorites} from '../utils/firestoreUtils';

interface UserContextType {
  email: string;
  setEmail: (email: string) => void;
  isSignedIn: boolean;
  toggleUserIsSignedIn: () => void;
  favorites: number[] | null;
  addFavorites: (moviesToAdd: number[]) => void;
  removeFavorites: (moviesToRemove: number[]) => void;
  isMovieFavorite: (movieId: number) => boolean;
  getFavorites: () => void;
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
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    getFavorites();
  }, [email]);

  const getFavorites = async () => {
    const favoritesOnFirestore = await getUserFavorites(email);
    console.log(favoritesOnFirestore, 'sad');
    setFavorites(favoritesOnFirestore);
  };

  const addFavorites = (moviesToAdd: number[]) => {
    const newFavs = [...favorites, ...moviesToAdd];
    setFavorites(newFavs);
    editUserFavorites(email, newFavs);
  };

  const removeFavorites = (moviesToRemove: number[]) => {
    const newFavs = favorites.filter(fav => !moviesToRemove.includes(fav));
    setFavorites(newFavs);
    editUserFavorites(email, newFavs);
  };

  const toggleUserIsSignedIn = () => {
    setIsSignedIn(!isSignedIn);
  };

  const isMovieFavorite = (movieId: number) => {
    return favorites?.includes(movieId);
  };

  return (
    <UserContext.Provider
      value={{
        isSignedIn,
        toggleUserIsSignedIn,
        favorites,
        addFavorites,
        email,
        setEmail,
        isMovieFavorite,
        removeFavorites,
        getFavorites,
      }}>
      {children}
    </UserContext.Provider>
  );
};
