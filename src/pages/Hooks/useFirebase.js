import initializeFirebaseApp from "../Firebase/Firebase.init";
import { useState, useEffect } from 'react';
import { getAuth,signOut } from 'firebase/auth';
import { updateProfile,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword } from 'firebase/auth';

initializeFirebaseApp()

const useFirebase = ()=>{

    const [user,setUser]=useState({});
    const [loding,setLoding]=useState(true);
    const [isAdmin,setIsAdmin]=useState(false);
    const [error,setError]=useState('');
    const auth=getAuth();

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
          }).catch((error) => {

          });
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }


    useEffect(()=>{
        fetch(`https://desolate-brushlands-79474.herokuapp.com/user/${user.email}`)
        .then(res => res.json())
        .then(data=> setIsAdmin(data.admin));
    },[user.email])
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

            const saveUser = (email, name) => {
                const user = { email, name };
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then()
            }

    return {
        user,
        setUser,
        createAccountWithEmailAndPassword,
        loding,
        error,
        setError,
        singIn,
        logOut,
        updateName,
        saveUser,
        isAdmin
    }
}

export default useFirebase;