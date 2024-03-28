import React from 'react';
import {render} from '@testing-library/react-native';
import MyListScreen from './';
import {useUserContext} from '../../context/userContext';
import {useNavigation} from '@react-navigation/native';
import {useMovieContext} from '../../context/moviesContext';
import {MovieMock} from '../../mocks/moviesMocks';
import useGetMovieDetails from '../../hooks/useGetMovieDetails';

jest.mock('../../hooks/useGetMovieDetails.ts');
jest.mock('../../context/userContext');
jest.mock('@react-navigation/native');
const mockFavorites = [1, 2, 3];
const mockNavigation = {
  navigate: jest.fn(),
};
const mockSelectMovie = jest.fn();

describe('<MyListScreen />', () => {
  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
    (useMovieContext as jest.Mock).mockReturnValue({
      selectMovie: mockSelectMovie,
    });
    (useUserContext as jest.Mock).mockReturnValue({
      favorites: mockFavorites,
    });
    (useGetMovieDetails as jest.Mock).mockReturnValue({
      isLoading: false,
      data: MovieMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const {getAllByTestId} = render(<MyListScreen />);

    expect(getAllByTestId('movie-to-render')).toHaveLength(
      mockFavorites.length,
    );
  });
});
