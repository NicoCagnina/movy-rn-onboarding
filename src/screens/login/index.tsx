import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {firebaseLogin, firebaseRegister} from '../../utils/firebaseUtils';
import {useUserContext} from '../../context/userContext';
import {styles} from './styles';
import MovyLogoIcon from '../../assets/icons/MovyLogoIcon';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(false);
  const {setUserEmail} = useUserContext();

  const onSubmit = async () => {
    const response = isSignIn
      ? await firebaseLogin(email, password)
      : await firebaseRegister(email, password);
    if (response?.email) {
      setUserEmail(response.email);
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
          <Text style={styles.buttonTxt}>
            {isSignIn ? 'Log in' : 'Sign up'}
          </Text>
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
