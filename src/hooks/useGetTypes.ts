import {useState, useEffect} from 'react';
import {UseQueryResult, useQuery} from '@tanstack/react-query';
import {MovieGenre} from '../types/movies';
import Config from 'react-native-config';

interface MoviesResponse {
  data: {
    genres: MovieGenre[];
  } | null;
  error: string;
  isPending: boolean;
}

const useGetMovieTypes = () => {
  const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>({
    data: null,
    error: '',
    isPending: false,
  });

  const url = `${Config.BASE_URL}/genre/movie/list`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${Config.TMDB_API_KEY}`,
    },
  };

  const {data, error, isLoading}: UseQueryResult<{genres: MovieGenre[]}> =
    useQuery({
      queryKey: ['movieTypes'],
      queryFn: () => fetch(url, options).then(res => res.json()),
    });

  useEffect(() => {
    if (data) {
      setMoviesResponse({data, error: '', isPending: false});
    }
  }, [data, error]);

  return {...moviesResponse, isLoading};
};

export default useGetMovieTypes;
