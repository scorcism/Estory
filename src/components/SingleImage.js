import React from 'react'

function SingleImage({ img }) {
  
  return (
    <>

        <div className="col-6 col-md-4 my-3">
            <div class="card" style={{width: "18rem;"}}>
              <img style={{objectFit:"contain"}} width="300" height="300" src={img.url} class="card-img-top" alt="..." />
              <div class="card-body">
                <button className=' ms-3 me-3 btn btn-outline-info'><a style={{textDecoration:"none", color:"black",fontWeight:"400"}} href={`https://www.instagram.com/${img.insta}`} targe="_blank">Owner</a></button>
                <button className=' ms-3 me-3 btn btn-outline-secondary'><a style={{textDecoration:"none", color:"black",fontWeight:"400"}} href={img.url} target="_blank">Full Image</a></button>
            </div>
        </div>
      </div>
    </>
  )
}

export default SingleImage