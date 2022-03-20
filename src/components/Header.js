import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import userContext from '../context/userContext';

function Header({ isAuth, setIsAuth }) {

    const context = useContext(userContext);
    const { logOut, user } = context;
    const logout = async () => {
        await logOut();
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = "/login"
    }
    name2 = "xD"; 
    if (user) {
        var nam = user.email;
        var name = String(nam);
        var name2 = name.substring(0, 5);
    }

    return (
        <>
            <nav className="p-3 navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Thoughts</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        {!isAuth && !localStorage.isAuth ? <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li> : <li className="nav-item" style={{cursor:"pointer"}} ><a className='nav-link' onClick={logout}>Logout</a></li>}
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Create Post</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gallery">Image Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <img style={{
                                height: "40px",
                                width: "40px",
                                borderRadius: "50px",
                                alignItems: "center",
                                marginLeft: "10px"
                            }} height="100" width="100" src={`https://avatars.dicebear.com/api/initials/${name2}.svg`} alt="avatar" />
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header