import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Footer() {

    const [Joke,setJoke] = useState("Yes!! You are special");
    const [time,currentTime] = useState(0);

    const fetchApi = () => {
            fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
      };
        useEffect(() => {
              fetchApi();
        }, [])

    return (
        <>
            <footer className="bg-light text-center text-lg-start mt-5 pt-5">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase text-capitalize font-weight-bold">About Me</h5>
                            <p>
                                Hello there, I'm Abhishek Pathak a Learner have knowledge in frontend and backend Technologies. You can chat with me here <a  style={{textDecoration:"none"}} className="text-dark" href="https://www.instagram.com/scor.cism/">@scorcism</a>
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase text-capitalize font-weight-bold">Joke for You !</h5>

                            <p id='joke' className='text-capitalize '>
                                {Joke}
                            </p>
                            <p style={{cursor:"pointer"}} onClick={fetchApi} >Change Joke
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2);" }}>
                    © 2020 Copyright:
                    <a className="text-dark" target="_blank" href="https://github.com/scorcism">Abhishek Pathak</a>
                </div>
            </footer>
        </>
    )
}

export default Footer