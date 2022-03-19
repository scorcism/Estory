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



const UserAuthContext = ({ children }) => {

    const [user, setUser] = useState("");

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut(){
        return signOut(auth)
        
    }

    function signInGoogle(){
        const googleAuth = new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuth);
    }

    useEffect(() => {
        // When ever this component is mounted we will have a current user set to the user we have onAuthStateChange and we set the current user and we also want that when ever we unmount the component we dont want to listen the function anymore, so here we have a unsubscribe function 
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <UserContext.Provider value={{signUp,logIn, user,signInGoogle,logOut }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserAuthContext;