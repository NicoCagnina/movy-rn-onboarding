import {useState, useEffect} from 'react';
import {useQuery} from '@tanstack/react-query';
import {Movie} from '../types/movies';

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

  const url = 'https://api.themoviedb.org/3/movie/popular';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjA3ZmYxOTc0ZTRiMDU4ZmM1MDcyZGQ1ZTE1MDUwZSIsInN1YiI6IjY1ZDRmYWRmMjNkMjc4MDE3Y2Y1MjQ2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UHcdC5iToRa0Dxq7Qep5UEgFD6adQTicMpLt_TmbfnU',
    },
  };

  const {data, error, isLoading} = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetch(url, options).then(res => res.json()),
    // TODO: Change this to the actual expected data
    select: data =>
      data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        vote_average: movie.vote_average,
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
