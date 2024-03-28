import React from 'react';
import {render} from '@testing-library/react-native';
import {useUserContext} from '../../../context/userContext';
import FavoriteList from '../favoritesList';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useMovieContext} from '../../../context/moviesContext';
import {useNavigation} from '@react-navigation/native';
import useGetMovieDetails from '../../../hooks/useGetMovieDetails';

jest.mock('../../../context/userContext');
jest.mock('../../../context/moviesContext.tsx');
jest.mock('../../../hooks/useGetMovieDetails.ts');
jest.mock('@react-navigation/native');

describe('<MovieList />', () => {
  const mockFavorites = [1, 2, 3];
  const mockSelectMovie = jest.fn();
  const mockNavigation = {
    navigate: jest.fn(),
  };
  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
    (useUserContext as jest.Mock).mockReturnValue({
      favorites: mockFavorites,
    });
    (useMovieContext as jest.Mock).mockReturnValue({
      selectMovie: mockSelectMovie,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with favorites list', () => {
    (useGetMovieDetails as jest.Mock).mockReturnValue({
      isLoading: false,
      data: {poster_path: 'poster_path_value'},
    });
    const queryClient = new QueryClient();

    const {getByTestId, getAllByTestId} = render(
      <QueryClientProvider client={queryClient}>
        <FavoriteList />
      </QueryClientProvider>,
    );
    const favoritesList = getByTestId('favorites-list');
    expect(favoritesList).toBeTruthy();

    const listedFavorites = getAllByTestId('listed-favorite');
    expect(listedFavorites.length).toBe(mockFavorites.length);
  });
});
