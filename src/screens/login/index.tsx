import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {firebaseLogin, firebaseRegister} from '../../utils/firebaseUtils';
import {useUserContext} from '../../context/userContext';
import {styles} from './styles';
import MovyLogoIcon from '../../assets/icons/MovyLogoIcon';
import Colors from '../../types/colors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const {toggleUserIsSignedIn} = useUserContext();

  const onSubmit = async () => {
    setIsLoading(true);
    const response = isSignIn
      ? await firebaseLogin(email, password)
      : await firebaseRegister(email, password);
    setIsLoading(false);
    if (response?.email) {
      toggleUserIsSignedIn();
    }
  };

  const onPressToggle = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <View style={styles.container}>
      <MovyLogoIcon />
      <View style={styles.contentContainer}>
        <Text style={styles.createAccountTxt}>Create account.</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          {isLoading ? (
            <ActivityIndicator color={Colors.white} />
          ) : (
            <Text style={styles.buttonTxt}>
              {isSignIn ? 'Log in' : 'Sign up'}
            </Text>
          )}
        </TouchableOpacity>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>
            {isSignIn ? `Don't have an account?` : 'Already have an account?'}
          </Text>
          <TouchableOpacity onPress={onPressToggle}>
            <Text style={styles.toggleButton}>
              {isSignIn ? 'Sign up' : 'Log in'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
