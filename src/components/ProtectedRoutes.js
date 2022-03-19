import React,{useContext} from 'react';
import { Navigate } from "react-router-dom";
import userContext from "../context/userContext";

function ProtectedRoutes({ children,isAuth }) {
    const context = useContext(userContext);
    const { user  } = context;
    if (!user && !isAuth && !localStorage.isAuth) {
        return <Navigate to="/login" />
    }
    return children;
}

export default ProtectedRoutes