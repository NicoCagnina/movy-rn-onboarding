import {MovieGenres} from '../types/movies';

export const getImageUrl = (path: string) => {
  return `https://image.tmdb.org/t/p/original${path}`;
};

export const getGenreText = (genreId: number): string | undefined => {
  const genreKey = Object.keys(MovieGenres).find(
    key => MovieGenres[key as keyof typeof MovieGenres] === genreId,
  );
  if (genreKey) {
    const transformedText = genreKey.replace(/([a-z])([A-Z])/g, '$1 $2');
    return transformedText;
  }
  return undefined;
};
