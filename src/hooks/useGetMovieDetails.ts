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
    select: (item: MovieDetails) => {
      return {
        id: item.id,
        overview: item.overview,
        title: item.title,
        poster_path: item.poster_path,
        vote_average: item.vote_average,
        adult: item.adult,
        release_date: item.release_date,
      };
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
