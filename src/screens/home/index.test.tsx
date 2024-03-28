import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from './';
import useGetTrendingMovies from '../../hooks/useGetTrendingMovies';
import useGetRecentlyAddedMovies from '../../hooks/useGetRecentlyAddedMovies';
import {useNavigation} from '@react-navigation/native';
import {useMovieContext} from '../../context/moviesContext';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useUserContext} from '../../context/userContext';

jest.mock('../../hooks/useGetTrendingMovies.ts', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: null,
  })),
}));

jest.mock('../../hooks/useGetRecentlyAddedMovies.ts', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: null,
  })),
}));
jest.mock('../../hooks/useGetSimilarMovies.ts', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: null,
  })),
}));

jest.mock('@react-navigation/native');
jest.mock('../../context/moviesContext');
jest.mock('../../context/userContext');

const mockNavigation = {
  navigate: jest.fn(),
};
const mockSelectMovie = jest.fn();
const mockAddMovies = jest.fn();
const mockAddFavorites = [1, 2, 3];
const queryClient = new QueryClient();

describe('<HomeScreen />', () => {
  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
    (useMovieContext as jest.Mock).mockReturnValue({
      selectMovie: mockSelectMovie,
      addMovies: mockAddMovies,
      addRecentlyAddedMovies: mockAddMovies,
    });
    (useUserContext as jest.Mock).mockReturnValue({
      addFavorites: mockAddFavorites,
    });
    (useGetTrendingMovies as jest.Mock).mockReturnValue({
      data: null,
      error: '',
      isLoading: false,
    });
    (useGetRecentlyAddedMovies as jest.Mock).mockReturnValue({
      data: null,
      error: '',
      isLoading: false,
    });
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  it('renders the component correctly with trending and recently added movies', async () => {
    const {getByText} = render(
      <QueryClientProvider client={queryClient}>
        <HomeScreen />
      </QueryClientProvider>,
    );

    expect(getByText('My List')).toBeDefined();
    expect(getByText('Trending Now')).toBeDefined();
    expect(getByText('Recently Added')).toBeDefined();
  });
});
