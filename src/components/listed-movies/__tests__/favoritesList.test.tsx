import React from 'react';
import {render} from '@testing-library/react-native';
import {useUserContext} from '../../../context/userContext';
import FavoriteList from '../favoritesList';

jest.mock('../../context/userContext');

describe('<MovieList />', () => {
  const mockFavorites = [1, 2, 3];

  beforeEach(() => {
    (useUserContext as jest.Mock).mockReturnValue({
      favorites: mockFavorites,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with favorites list', () => {
    const {getByTestId, getAllByTestId} = render(<FavoriteList />);
    const favoritesList = getByTestId('favorites-list');
    expect(favoritesList).toBeTruthy();

    const listedFavorites = getAllByTestId('listed-favorite');
    expect(listedFavorites.length).toBe(mockFavorites.length);
  });
});
