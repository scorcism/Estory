import React from 'react'
import {Link} from "react-router-dom";

function SinglePost({th}) {
    return (
        <>

            <div className="col-6 col-md-4 my-3">
                <div className="card" style={{ width: "18rem" }} >
                    <img src="https://source.unsplash.com/150x150/?thoughts,quotes" width="150" height="200" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{th.Title ? th.Title.slice(0,20).concat(" ..."):"No Title"}</h5>
                        <p className="card-text">{th.Desc ? th.Desc.slice(0,40).concat(" ..."):"No Desc"}</p>
                        <Link to={`/thought/${th.id}`} className="btn btn-primary">Read full</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SinglePost