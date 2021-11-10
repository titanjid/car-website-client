import initializeFirebaseApp from "../Firebase/Firebase.init";
import { useState, useEffect } from 'react';
import { getAuth,signOut } from 'firebase/auth';
import { updateProfile,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword } from 'firebase/auth';

initializeFirebaseApp()

const useFirebase = ()=>{

    const [user,setUser]=useState()
    const [loding,setLoding]=useState(true);
    const [error,setError]=useState('')
    const auth=getAuth()

    const createAccountWithEmailAndPassword =(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    const singIn=(email,password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }
    const updateName=(name)=>{
        updateProfile(auth.currentUser, {
            displayName:name
          }).then(() => {
            window.location.reload()
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                }
            else {
                setUser({})
                }
                setLoding(false)
                })
            }, [])
    return {
        user,
        setUser,
        createAccountWithEmailAndPassword,
        loding,
        error,
        setError,
        singIn,
        logOut,
        updateName
    }
}

export default useFirebase;