import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SearchedMovie from '../SearchedMovie';
import {useNavigation} from '@react-navigation/native';
import {useMovieContext} from '../../context/moviesContext';
import {NavigationScreens} from '../../types/NavigationScreens';
import {MovieMock} from '../../mocks/moviesMocks';

jest.mock('@react-navigation/native');
jest.mock('../../context/moviesContext');

describe('<SearchedMovie />', () => {
  const mockNavigation = {
    navigate: jest.fn(),
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

  it('renders correctly', () => {
    const {getByText, getByTestId, getAllByTestId} = render(
      <SearchedMovie movie={MovieMock} />,
    );
    expect(getByText(MovieMock.title)).toBeTruthy();
    expect(getByTestId('stars-container')).toBeTruthy();
    expect(getAllByTestId('full-star-icon')).toHaveLength(2);
    expect(getAllByTestId('half-star-icon')).toHaveLength(1);
  });

  it('navigates to movie details screen when pressed', () => {
    const {getByTestId} = render(<SearchedMovie movie={MovieMock} />);
    fireEvent.press(getByTestId('movie-pressable'));
    expect(mockSelectMovie).toHaveBeenCalledWith(MovieMock.id);
    expect(mockNavigation.navigate).toHaveBeenCalledWith(
      NavigationScreens.MovieDetails,
    );
  });
});
