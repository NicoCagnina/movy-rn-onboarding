import {useState, useEffect} from 'react';
import {useQuery} from '@tanstack/react-query';
import {Movie} from '../types/movies';
import Config from 'react-native-config';

interface MoviesResponse {
  data: Movie[] | null;
  error: string;
  isPending: boolean;
}

const useGetTrendingMovies = () => {
  const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>({
    data: null,
    error: '',
    isPending: false,
  });

  const url = `${Config.BASE_URL}/movie/popular`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${Config.TMDB_API_KEY}`,
    },
  };

  const {data, error, isLoading} = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetch(url, options).then(res => res.json()),
    // TODO: Change this to the actual expected data
    select: response =>
      response.results.map((movie: Movie) => ({
        id: movie.id,
        title: movie.title,
        vote_average: movie.vote_average,
        poster_path: movie.poster_path,
        genre_ids: movie.genre_ids,
      })) as Movie[],
  });

  useEffect(() => {
    if (data) {
      setMoviesResponse({data, error: '', isPending: false});
    }
  }, [data, error]);

  return {...moviesResponse, isLoading};
};

export default useGetTrendingMovies;
