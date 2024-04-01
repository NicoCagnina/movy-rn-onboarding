import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SearchScreen from './';
import {useMovieContext} from '../../context/moviesContext';
import {useNavigation} from '@react-navigation/native';
import {MovieMock} from '../../mocks/moviesMocks';

const mockNavigation = {
  navigate: jest.fn(),
};
const mockSelectMovie = jest.fn();
const mockFilteredMovies = [MovieMock, {...MovieMock, title: 'Test Movie'}];
jest.mock('../../context/moviesContext');
jest.mock('@react-navigation/native');

describe('<SearchScreen />', () => {
  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
    (useMovieContext as jest.Mock).mockReturnValue({
      selectMovie: mockSelectMovie,
      filteredMovies: () => mockFilteredMovies,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const {getByText, getByPlaceholderText} = render(<SearchScreen />);
    expect(getByText('Popular Searches')).toBeDefined();
    expect(
      getByPlaceholderText('Search for a movie that you love…'),
    ).toBeDefined();
  });

  it('updates search input value correctly', () => {
    const {getByPlaceholderText} = render(<SearchScreen />);
    const searchInput = getByPlaceholderText(
      'Search for a movie that you love…',
    );
    fireEvent.changeText(searchInput, 'Test search');
  });
});
