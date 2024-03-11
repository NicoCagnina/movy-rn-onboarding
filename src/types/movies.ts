export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieGenre {
  id: number;
  name: string;
}
export interface MovieDetails {
  id: number;
  adult: boolean;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
}
