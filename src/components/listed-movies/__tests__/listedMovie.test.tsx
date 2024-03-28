import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ListedMovie from '../ListedMovie';
import {useNavigation} from '@react-navigation/native';
import {useMovieContext} from '../../../context/moviesContext';
import {MovieMock} from '../../../mocks/moviesMocks';

jest.mock('@react-navigation/native');
jest.mock('../../../context/moviesContext');

describe('<ListedMovie />', () => {
  const mockSelectMovie = jest.fn();
  const mockNavigation = {
    push: jest.fn(),
  };

  beforeEach(() => {
    (useMovieContext as jest.Mock).mockReturnValue({
      selectMovie: mockSelectMovie,
    });
    (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls selectMovie and navigation.push when movie is pressed', () => {
    const {getByTestId} = render(<ListedMovie item={MovieMock} />);
    fireEvent.press(getByTestId('movie-image'));

    expect(mockSelectMovie).toHaveBeenCalledWith(MovieMock.id);
    expect(mockNavigation.push).toHaveBeenCalledWith('MovieDetails');
  });
});
