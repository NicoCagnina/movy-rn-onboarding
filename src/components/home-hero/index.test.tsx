import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HomeScreenHero from '.';
import {useNavigation} from '@react-navigation/native';
import {useMovieContext} from '../../context/moviesContext';
import {MovieMock} from '../../mocks/moviesMocks';
import {NavigationScreens} from '../../types/NavigationScreens';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useUserContext} from '../../context/userContext';

jest.mock('@react-navigation/native');
jest.mock('../../context/moviesContext');
jest.mock('../../context/userContext');

describe('<ActionButton />', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };
  const mockSelectMovie = jest.fn();
  const mockAddFavorites = jest.fn();
  const mockRemoveFavorites = jest.fn();
  const mockIsMovieFavorite = jest.fn();

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
    (useMovieContext as jest.Mock).mockReturnValue({
      selectMovie: mockSelectMovie,
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

  it('renders correctly hero component', () => {
    const {getByText, getByTestId} = render(
      <QueryClientProvider client={queryClient}>
        <HomeScreenHero movie={MovieMock} />,
      </QueryClientProvider>,
    );
    expect(getByText('My List')).toBeTruthy();
    expect(getByTestId('hero-image')).toBeTruthy();
    expect(getByTestId('genre-list')).toBeTruthy();
  });

  it('navigates to movie details screen when hero component is pressed', () => {
    const {getByTestId} = render(
      <QueryClientProvider client={queryClient}>
        <HomeScreenHero movie={MovieMock} />,
      </QueryClientProvider>,
    );
    fireEvent.press(getByTestId('hero-image'));
    expect(mockSelectMovie).toHaveBeenCalledWith(MovieMock.id);
    expect(mockNavigation.navigate).toHaveBeenCalledWith(
      NavigationScreens.MovieDetails,
    );
  });
});
