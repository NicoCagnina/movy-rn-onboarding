import {
  getFirestore,
  collection,
  setDoc,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import appFirebase from '../../credentials';

const db = getFirestore(appFirebase);

const getUserFavorites = async (email: string) => {
  try {
    const q = query(collection(db, 'users'), where('email', '==', email));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
      const userFavorites = userData.favorites || [];
      return userFavorites;
    } else {
      console.log('No user with the given email was found');
      return [];
    }
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

const writeDataToFirestore = async (
  collectionName: string,
  docId: string,
  data: any,
) => {
  try {
    const userRef = doc(db, collectionName, docId);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      return;
    }

    await setDoc(userRef, data);
    console.log('Document added successfully to Firestore.');
  } catch (error) {
    console.error('Error:', error);
  }
};

const addFavoritesToUser = async (email: string, favoritesArray: string[]) => {
  try {
    const q = query(collection(db, 'users'), where('email', '==', email));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userRef = doc(db, 'users', userDoc.id);
      await updateDoc(userRef, {
        favorites: favoritesArray,
      });
    } else {
      throw new Error('No user with the given email was found.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export {getUserFavorites, writeDataToFirestore, addFavoritesToUser};
