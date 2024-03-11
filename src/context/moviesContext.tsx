import React, {createContext, useContext, useState} from 'react';
import {Movie} from '../types/movies';

interface MovieContextType {
  movies: Movie[];
  addMovies: (moviesToAdd: Movie[]) => void;
  selectedMovie: number | null;
  selectMovie: (id: number) => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};

export const MovieProvider = ({children}: {children: React.ReactNode}) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null);

  const addMovies = (moviesToAdd: Movie[]) => {
    setMovies([...movies, ...moviesToAdd]);
  };

  const selectMovie = (id: number) => {
    setSelectedMovie(id);
  };

  return (
    <MovieContext.Provider
      value={{movies, addMovies, selectMovie, selectedMovie}}>
      {children}
    </MovieContext.Provider>
  );
};
