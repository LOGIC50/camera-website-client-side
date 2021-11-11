// import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

import { useEffect, useState } from "react";
import initailizeFirebase from "../Firebase/firebase.init";


initailizeFirebase();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    const registerUser = (email, password,name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name}
            setUser(newUser);
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
              }).catch((error) => {
              });
            history.replace('/');
        })
        .catch((error) => {
          const errorCode = error.code;
          setAuthError(error.message);
          // ..
        })
        .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
     const destination = location?.state?.from || "/";
     history.replace(destination);
    setAuthError('');
  })
  .catch((error) => {
    setAuthError(error.message);
  })
  .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history ) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
  .then((result) => {
    const destination = location?.state?.from || "/";
     history.replace(destination);
    const user = result.user;
    setAuthError('');
  }).catch((error) => {
    setAuthError(error.message);
  }).finally(() => setIsLoading(false))
    }

    // observe user
    useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
            setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribed;
    }, [])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));
    }



    return{
        user,
        registerUser,
        loginUser,
        logout,
        isLoading,
        authError, 
        signInWithGoogle
    }
};

export default useFirebase;

