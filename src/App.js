import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserAuthContext from "./context/UserAuthContext"
import Home from "./components/Home";
import ProtectedRoutes from "./components/ProtectedRoutes"
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import { useState } from "react";
import Thought from "./components/Thought";

function App() {

  const [isAuth,setIsAuth] = useState(false);

  return (
    <>
      <Router>
        <UserAuthContext>
            <Header isAuth={isAuth} setIsAuth={setIsAuth}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login   setIsAuth={setIsAuth}/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Thought/:id" element={<Thought/>}/>
            <Route path="/create" element={<ProtectedRoutes isAuth={isAuth}><CreatePost  isAuth={isAuth}/></ProtectedRoutes> } />
          </Routes>
        </UserAuthContext>
      </Router>
    </>
  );
}

export default App;
