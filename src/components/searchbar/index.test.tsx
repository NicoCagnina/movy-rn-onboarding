import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import SearchBar from '../SearchBar';

describe('<SearchBar />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  it('should render correctly', () => {
    const setSearchInputValueMock = jest.fn();
    const {getByPlaceholderText} = render(
      <SearchBar setSearchInputValue={setSearchInputValueMock} />,
    );
    const inputElement = getByPlaceholderText(
      'Search for a movie that you love…',
    );
    expect(inputElement).toBeDefined();
  });

  it('should call setSearchInputValue when input text changes', () => {
    const setSearchInputValueMock = jest.fn();
    const {getByTestId} = render(
      <SearchBar setSearchInputValue={setSearchInputValueMock} />,
    );
    const inputElement = getByTestId('search-input');
    fireEvent.changeText(inputElement, 'Test text');
    jest.advanceTimersByTime(300);
    expect(setSearchInputValueMock).not.toHaveBeenCalledWith('Test text');
    jest.advanceTimersByTime(700);
    expect(setSearchInputValueMock).toHaveBeenCalledWith('Test text');
  });
});
