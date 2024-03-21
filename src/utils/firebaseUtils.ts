import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import appFirebase from '../../credentials';
import {writeDataToFirestore} from './firestoreUtils';

const firebaseLogin = async (email: string, password: string) => {
  const auth = getAuth(appFirebase);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    const userData = {
      uid: user.uid,
      email: user.email,
    };
    await writeDataToFirestore('users', email, userData);
    return user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('error:', errorCode, errorMessage);
  }
};

const firebaseRegister = async (email: string, password: string) => {
  const auth = getAuth(appFirebase);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    const userData = {
      uid: user.uid,
      email: user.email,
    };
    await writeDataToFirestore('users', email, userData);
    return user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('error:', errorCode, errorMessage);
  }
};

export {firebaseLogin, firebaseRegister};
