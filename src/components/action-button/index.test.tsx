import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ActionButton from '.';
import {useNavigation} from '@react-navigation/native';
import {useMovieContext} from '../../context/moviesContext';
import {useUserContext} from '../../context/userContext';
import {MovieDetailsMock} from '../../mocks/moviesMocks';

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

  it('renders correctly my-list button', () => {
    const {getByText} = render(
      <ActionButton type="my-list" movie={MovieDetailsMock} />,
    );
    expect(getByText('My List')).toBeTruthy();
  });

  it('renders correctly play button', () => {
    const {getByText} = render(
      <ActionButton type="play" movie={MovieDetailsMock} />,
    );
    expect(getByText('Play')).toBeTruthy();
  });

  it('renders correctly info button', () => {
    const {getByText} = render(
      <ActionButton type="info" movie={MovieDetailsMock} />,
    );
    expect(getByText('Info')).toBeTruthy();
  });

  it('calls addFavorites when type is "my-list" and movie is not favorite', () => {
    (useUserContext as jest.Mock).mockReturnValue({
      addFavorites: mockAddFavorites,
      removeFavorites: mockRemoveFavorites,
      isMovieFavorite: () => false,
    });
    const {getByText} = render(
      <ActionButton type="my-list" movie={MovieDetailsMock} />,
    );
    fireEvent.press(getByText('My List'));
    expect(mockAddFavorites).toHaveBeenCalledWith([MovieDetailsMock.id]);
  });

  it('calls removeFavorites when type is "my-list" and movie is favorite', () => {
    (useUserContext as jest.Mock).mockReturnValue({
      addFavorites: mockAddFavorites,
      removeFavorites: mockRemoveFavorites,
      isMovieFavorite: () => true,
    });
    const {getByText} = render(
      <ActionButton type="my-list" movie={MovieDetailsMock} />,
    );
    fireEvent.press(getByText('My List'));
    expect(mockRemoveFavorites).toHaveBeenCalledWith([MovieDetailsMock.id]);
  });

  it('navigates to movie details screen when type is "info"', () => {
    const {getByText} = render(
      <ActionButton type="info" movie={MovieDetailsMock} />,
    );
    fireEvent.press(getByText('Info'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('MovieDetails');
    expect(mockSelectMovie).toHaveBeenCalledWith(MovieDetailsMock.id);
  });
});
