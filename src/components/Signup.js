import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom"
import userContext from "../context/userContext"
import { db } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore'


function Signup() {
    const context = useContext(userContext);
    const { signUp } = context;

    const [cred, setCred] = useState({
        name:"",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();


    let name, value;
    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setCred({ ...cred, [name]: value })
    }
    const users = collection(db, "users");
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        try {
            await addDoc(users, { Name: cred.name, Email: cred.email,Password: cred.password});
            await signUp(cred.email, cred.password);
            setCred({
                name:"",
                email: "",
                password: "",
            });
            navigate("/login")
        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <>
            <div className="container w-50">
                <div className="container py-4">
                    <form method="POST">
                        <h2 className='my-3'>Signup to Contribute</h2>
                        {error && <div className="alert alert-danger" role="alert">
                            {error}
                        </div>}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name </label>
                            <input name='name' onChange={handleChange} value={cred.name} type="text" className="form-control" id="name" aria-describedby="name" />
                            <div id="name" className="form-text">Hello {cred.name}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input name='email'  onChange={handleChange} value={cred.email} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input name='password' onChange={handleChange} value={cred.password} type="password" className="form-control" id="password" />
                        </div>
                        <div className="mb-3">
                            By signing up, you agree to the
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                        <div className="mb-3">
                            Already have an Account ?
                            <Link className="no-underline border-b border-grey-dark text-grey-dark" to="/login">
                                Login
                            </Link>
                        </div>
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup