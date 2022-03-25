import { useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth"
import { auth } from "../firebase-config"
import UserContext from "./userContext"
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore'

const UserAuthContext = ({ children }) => {

    const [user, setUser] = useState("");

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    function signInGoogle() {
        const googleAuth = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuth);
    }

    const [getThought, setGetThought] = useState([]);
    const thoughts = collection(db, "thoughts");
    


    useEffect(() => {

        

        // Getting all the thoughts
        const getData = async () => {
            const data = await getDocs(thoughts);
            setGetThought(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };
        getData()

        // When ever this component is mounted we will have a current user set to the user we have onAuthStateChange and we set the current user and we also want that when ever we unmount the component we dont want to listen the function anymore, so here we have a unsubscribe function 
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <UserContext.Provider value={{ signUp, logIn, user, signInGoogle, logOut, getThought }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserAuthContext;