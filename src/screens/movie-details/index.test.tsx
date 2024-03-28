import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import MovieDetailsScreen from './';

import {MovieMock} from '../../mocks/moviesMocks';
import {useMovieContext} from '../../context/moviesContext';
import {useNavigation} from '@react-navigation/native';
import useGetMovieDetails from '../../hooks/useGetMovieDetails';
import {useUserContext} from '../../context/userContext';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

jest.mock('../../hooks/useGetMovieDetails.ts');
jest.mock('../../context/moviesContext');
jest.mock('../../context/userContext');
jest.mock('@react-navigation/native');
jest.mock('../../hooks/useGetSimilarMovies.ts', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: null,
  })),
}));

describe('<MovieDetailsScreen />', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };
  const mockSelectMovie = jest.fn(() => MovieMock.id);
  const mockAddFavorites = jest.fn();
  const mockRemoveFavorites = jest.fn();
  const mockIsMovieFavorite = jest.fn(() => false);

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
    (useMovieContext as jest.Mock).mockReturnValue({
      selectMovie: mockSelectMovie,
    });
    (useGetMovieDetails as jest.Mock).mockReturnValue({
      isLoading: false,
      data: MovieMock,
    });
    (useUserContext as jest.Mock).mockReturnValue({
      addFavorites: mockAddFavorites,
      removeFavorites: mockRemoveFavorites,
      isMovieFavorite: mockIsMovieFavorite,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  const queryClient = new QueryClient();

  it('renders movie details correctly', async () => {
    const {getByText, getByTestId} = render(
      <QueryClientProvider client={queryClient}>
        <MovieDetailsScreen />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(getByText(MovieMock.title)).toBeDefined();
      expect(getByText('57% Approval')).toBeDefined();
      expect(getByText('For all ages')).toBeDefined();
      expect(getByText('2024')).toBeDefined();
      expect(getByText(MovieMock.overview)).toBeDefined();
      expect(getByText('Similar Movies')).toBeDefined();
      expect(getByTestId('watch-trailer-button')).toBeDefined();
      expect(getByTestId('add-to-list-button')).toBeDefined();
    });
  });

  it('displays loading indicator when loading', async () => {
    (useGetMovieDetails as jest.Mock).mockReturnValue({
      isLoading: true,
      data: MovieMock,
    });

    const {getByTestId} = render(<MovieDetailsScreen />);

    await waitFor(() => {
      expect(getByTestId('loading-indicator')).toBeDefined();
    });
  });

  it('displays error message when error occurs', async () => {
    (useGetMovieDetails as jest.Mock).mockReturnValue({
      isLoading: false,
      data: MovieMock,
      error: 'Mock error message',
    });
    const {getByText} = render(<MovieDetailsScreen />);

    await waitFor(() => {
      expect(getByText('An error occurred: Mock error message')).toBeDefined();
    });
  });
});
