import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState, useEffect } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')        //searchbox value

    //Manage User
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unSubscribe()
        }

    }, [])

    //Google -> Sign in
    const signinGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //Email Password -> sign up
    const createEmail =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Email Password -> Sign in
    const signinEmail =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    //Any method -> Logout
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
        

    const authInfo = { user, loading, signinGoogle, createEmail, signinEmail, logOut, search, setSearch }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;