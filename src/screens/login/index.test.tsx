import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import LoginScreen from './';
import {useUserContext} from '../../context/userContext';
import {firebaseLogin, firebaseRegister} from '../../utils/firebaseUtils';

jest.mock('../../../credentials', () => ({
  __esModule: true,
  default: {
    options: {},
    auth: jest.fn(() => ({
      createUserWithEmailAndPassword: jest.fn(),
      signInWithEmailAndPassword: jest.fn(),
      currentUser: {
        sendEmailVerification: jest.fn(),
      },
      signInWithRedirect: jest.fn(),
    })),
    getFirestore: jest.fn(),
  },
}));

jest.mock('../../utils/firebaseUtils.ts', () => ({
  firebaseLogin: jest.fn(),
  firebaseRegister: jest.fn(),
}));

jest.mock('../../utils/firestoreUtils.ts', () => ({
  getUserFavorites: jest.fn(),
  writeDataToFirestore: jest.fn(),
  editUserFavorites: jest.fn(),
}));

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(),
  collection: jest.fn(),
  setDoc: jest.fn(),
  query: jest.fn(),
  where: jest.fn(),
  getDocs: jest.fn(),
  getDoc: jest.fn(),
  doc: jest.fn(),
  updateDoc: jest.fn(),
}));
jest.mock('../../context/userContext');

describe('<LoginScreen />', () => {
  beforeEach(() => {
    (useUserContext as jest.Mock).mockReturnValue({
      toggleUserIsSignedIn: jest.fn(),
      setEmail: jest.fn(),
    });
  });

  it('renders the login screen correctly', () => {
    const {getByText, getByPlaceholderText} = render(<LoginScreen />);
    expect(getByText('Log in')).toBeTruthy();
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });

  it('updates email and password state on change', () => {
    const {getByPlaceholderText} = render(<LoginScreen />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');
  });

  it('calls firebaseLogin when submitting login form', () => {
    const {getByText, getByPlaceholderText} = render(<LoginScreen />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Log in');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');
    fireEvent.press(loginButton);

    expect(firebaseLogin).toHaveBeenCalledWith(
      'test@example.com',
      'password123',
    );
  });

  it('calls firebaseRegister when pressing toggle button', () => {
    const {getByTestId} = render(<LoginScreen />);
    const toggleButton = getByTestId('toggle-button');
    const signUpButton = getByTestId('auth-button');

    act(() => {
      fireEvent.press(toggleButton);
    });

    fireEvent.press(signUpButton);

    expect(firebaseRegister).toHaveBeenCalledTimes(1);
  });

  it('toggles between sign in and sign up modes', () => {
    const {getByTestId, getByText, queryByText} = render(<LoginScreen />);
    const toggleButton = getByTestId('toggle-button');
    expect(queryByText('Already have an account?')).toBeNull();

    act(() => {
      fireEvent.press(toggleButton);
    });

    expect(getByText('Already have an account?')).toBeDefined();
  });
});
