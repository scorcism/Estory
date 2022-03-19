import React, { useContext, useState } from 'react'
// import GoogleButton from 'react-google-button'
import { Link, Navigate, useNavigate } from "react-router-dom";
import userContext from "../context/userContext"

function Login({setIsAuth}) {
    const context = useContext(userContext);
    const { logIn, signInGoogle } = context;
    const navigate = useNavigate();
    const [cred, setCred] = useState({
        email: "",
        password: ""
    })
    let name, value;
    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setCred({ ...cred, [name]: value })
    }
    const [error, setError] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(cred.email, cred.password);
            setIsAuth(true);
            localStorage.setItem("isAuth", true);
            setCred({
                email: "",
                password: ""
            });
            navigate("/");
        }
        catch (error) {
            setError(error.message);
        }
    }
    // const handleGoogleSubmit = async (e) =>{
    //     e.preventDefault();
    //     try{
    //         await signInGoogle();
    //         setIsAuth(true);
    //         localStorage.setItem("isAuth",true);
    //         navigate("/home")
    //     }catch (e) {
    //         setError(e.message);
    //     }
    // }

    return (
        <>
            <div className="container w-50">
                <div className="container py-4">
                    <form method="POST">
                        <h2 className='my-3'>Login to Contribute</h2>
                        {error && <div className="alert alert-danger" role="alert">
                            {error}
                        </div>}
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input name='email' placeholder="Email" onChange={handleChange} value={cred.email} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input name='password' placeholder="Password" onChange={handleChange} value={cred.password} type="password" className="form-control" id="password" />
                        </div>
                        {/* <div className="mb-3">
                        <GoogleButton
                            onClick={ handleGoogleSubmit}
                        />
                        </div> */}
                        <div className="mb-3">
                            <Link className="no-underline border-b border-grey-dark text-grey-dark" to="/signup">
                                Signup
                            </Link> to contribute
                        </div>
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
