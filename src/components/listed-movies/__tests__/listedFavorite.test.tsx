import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ListedFavorite from '../ListedFavorite';
import {useNavigation} from '@react-navigation/native';
import {useMovieContext} from '../../../context/moviesContext';
import useGetMovieDetails from '../../../hooks/useGetMovieDetails';

jest.mock('@react-navigation/native');
jest.mock('../../../context/moviesContext');
jest.mock('../../../hooks/useGetMovieDetails');

describe('Listed Favorite tests', () => {
  const mockNavigation = {
    push: jest.fn(),
  };

  const mockSelectMovie = jest.fn();

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
    (useMovieContext as jest.Mock).mockReturnValue({
      selectMovie: mockSelectMovie,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading indicator when isLoading is true', () => {
    (useGetMovieDetails as jest.Mock).mockReturnValue({isLoading: true});

    const {getByTestId} = render(<ListedFavorite item={123} />);
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('renders image when isLoading is false', () => {
    (useGetMovieDetails as jest.Mock).mockReturnValue({
      isLoading: false,
      data: {poster_path: 'poster_path_value'},
    });

    const {getByTestId} = render(<ListedFavorite item={123} />);
    expect(getByTestId('movie-image')).toBeTruthy();
  });

  it('calls selectMovie and navigation.push when movie is pressed', () => {
    const {getByTestId} = render(<ListedFavorite item={123} />);
    fireEvent.press(getByTestId('movie-image'));

    expect(mockSelectMovie).toHaveBeenCalledWith(123);
    expect(mockNavigation.push).toHaveBeenCalledWith('MovieDetails');
  });
});
