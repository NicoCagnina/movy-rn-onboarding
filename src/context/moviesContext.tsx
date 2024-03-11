import React, {createContext, useContext, useState} from 'react';
import {Movie} from '../types/movies';

interface MovieContextType {
  movies: Movie[];
  addMovies: (moviesToAdd: Movie[]) => void;
  selectedMovie: number | null;
  selectMovie: (id: number) => void;
  filteredMovies: (movie: string) => Movie[];
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

  const filteredMovies = (movie: string) => {
    const filtered = movies.filter(m =>
      m.title.toLowerCase().includes(movie.toLowerCase()),
    );
    const uniqueMap = new Map(filtered.map(m => [m.title, m]));

    return Array.from(uniqueMap.values());
  };
  return (
    <MovieContext.Provider
      value={{movies, addMovies, selectMovie, selectedMovie, filteredMovies}}>
      {children}
    </MovieContext.Provider>
  );
};
