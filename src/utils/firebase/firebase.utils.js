import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDRMwq5ygfPZtdAPR97rEKjaJfQ3yFgVZU",
    authDomain: "floral-shop-db.firebaseapp.com",
    projectId: "floral-shop-db",
    storageBucket: "floral-shop-db.appspot.com",
    messagingSenderId: "1078596640410",
    appId: "1:1078596640410:web:46756972a92a610f6c8923"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);//.exists() true or false

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }catch(err){
            console.log('error creating the user', err.message);
        }
    }

    return userDocRef;
  }