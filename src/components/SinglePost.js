import React from 'react'

function SinglePost({th}) {
    return (
        <>

            <div className="col-6 col-md-4 my-3">
                <div className="card" style={{ width: "18rem" }} >
                    <img src="https://picsum.photos/150" width="150" height="200" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{th.Title}</h5>
                        <p className="card-text">{th.Desc}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SinglePost