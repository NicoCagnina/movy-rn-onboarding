import React from 'react';
import {render} from '@testing-library/react-native';
import GenreList from '.';

jest.mock('../../hooks/useGetTypes', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: {
      genres: [
        {id: 1, name: 'Action'},
        {id: 2, name: 'Comedy'},
        {id: 3, name: 'Drama'},
      ],
    },
  })),
}));

describe('<GenreList />', () => {
  it('renders correctly with genre names', () => {
    const {getByText} = render(<GenreList ids={[1, 3]} />);

    expect(getByText('Action')).toBeTruthy();
    expect(getByText('Drama')).toBeTruthy();
  });

  it('renders nothing when ids are empty', () => {
    const {queryByText} = render(<GenreList ids={[]} />);

    expect(queryByText('Action')).toBeNull();
    expect(queryByText('Comedy')).toBeNull();
    expect(queryByText('Drama')).toBeNull();
  });

  it('renders separator icon between genres', () => {
    const {getAllByTestId} = render(<GenreList ids={[1, 2, 3]} />);

    const separators = getAllByTestId('separator-icon');
    expect(separators).toHaveLength(3);
  });
});
