import React from 'react';
import {render} from '@testing-library/react-native';
import ListedMovies from '../';

const mockSelectMovie = jest.fn();
const mockMovies = null;
const mockRecentlyAddedMovies = null;

jest.mock('../../../context/moviesContext', () => ({
  useMovieContext: jest.fn(() => {
    return {
      selectedMovie: mockSelectMovie,
      movies: mockMovies,
      recentlyAddedMovies: mockRecentlyAddedMovies,
    };
  }),
}));

jest.mock('../../../hooks/useGetSimilarMovies.ts', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: mockMovies,
  })),
}));
jest.mock('../../../context/userContext.tsx', () => ({
  useUserContext: jest.fn(() => {
    return {
      favorites: [],
    };
  }),
}));

describe('<ListedMovies />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the correct title', () => {
    const title = 'Test title';
    const {getByText} = render(<ListedMovies title={title} />);
    const titleElement = getByText(title);
    expect(titleElement).toBeDefined();
  });

  it('renders the favorites list', () => {
    const title = 'My List';
    const {getByTestId} = render(<ListedMovies title={title} />);
    expect(getByTestId('favorites-list')).toBeDefined();
  });

  it('renders the trending list', () => {
    const title = 'Trending Now';
    const {getByTestId} = render(<ListedMovies title={title} />);
    expect(getByTestId('trending-now-list')).toBeDefined();
  });

  it('renders the similar-movies list', () => {
    const title = 'Similar Movies';
    const {getByTestId} = render(<ListedMovies title={title} />);
    expect(getByTestId('similar-movies-list')).toBeDefined();
  });

  it('renders the recently-added list', () => {
    const title = 'Recently Added';
    const {getByTestId} = render(<ListedMovies title={title} />);
    expect(getByTestId('recently-added-list')).toBeDefined();
  });
});
