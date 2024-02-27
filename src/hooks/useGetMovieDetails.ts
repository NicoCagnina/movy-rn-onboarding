import {useState, useEffect} from 'react';
import {useQuery} from '@tanstack/react-query';
import {MovieDetails} from '../types/movies';
import Config from 'react-native-config';

interface MovieResponse {
  data: MovieDetails | null;
  error: string;
  isPending: boolean;
}

const useGetMovieDetails = (id: number) => {
  const [movieResponse, setMovieResponse] = useState<MovieResponse>({
    data: null,
    error: '',
    isPending: false,
  });

  const url = `${Config.BASE_URL}/movie/${id}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${Config.TMDB_API_KEY}`,
    },
  };

  const {data, error, isLoading} = useQuery({
    queryKey: ['movieDetails'],
    queryFn: () => fetch(url, options).then(res => res.json()),
    select: (data: MovieDetails) => {
      return {
        overview: data.overview,
        name: data.name,
        poster_path: data.poster_path,
        vote_average: data.vote_average,
        adult: data.adult,
        release_date: data.release_date,
      } as MovieDetails;
    },
  });

  useEffect(() => {
    if (data) {
      setMovieResponse({data, error: '', isPending: false});
    }
  }, [data, error]);

  return {...movieResponse, isLoading};
};

export default useGetMovieDetails;
