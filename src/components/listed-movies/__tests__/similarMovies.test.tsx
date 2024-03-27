import React from 'react';
import {render} from '@testing-library/react-native';
import SimilarMovies from '../SimilarMovies';
import {useNavigation} from '@react-navigation/native';
import {useMovieContext} from '../../../context/moviesContext';

jest.mock('@react-navigation/native');
jest.mock('../../../context/moviesContext');

const mockMovies = [
  {id: 1, title: 'Movie 1', poster_path: 'poster_path_1'},
  {id: 2, title: 'Movie 2', poster_path: 'poster_path_2'},
  {id: 3, title: 'Movie 3', poster_path: 'poster_path_3'},
];

jest.mock('../../../hooks/useGetSimilarMovies.ts', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: mockMovies,
  })),
}));

describe('<SimilarMovies />', () => {
  const mockNavigation = {
    push: jest.fn(),
  };
  const mockSelectedMovie = 123;

  beforeEach(() => {
    (useMovieContext as jest.Mock).mockReturnValue({
      selectMovie: mockSelectedMovie,
    });
    (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with similar movies list', () => {
    const {getByTestId, getAllByTestId} = render(<SimilarMovies />);
    const flatList = getByTestId('similar-movies-list');
    expect(flatList).toBeTruthy();

    const listedMovies = getAllByTestId('listed-movie');
    expect(listedMovies.length).toBe(mockMovies.length);
  });
});
