import React from 'react'

function SingleImage({ img }) {
  console.log(img)
  console.log("me here")
  return (
    <>

        <div className="col-6 col-md-4 my-3">
            <div class="card" style={{width: "18rem;"}}>
              <img width="300" height="300" src={img.url} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default SingleImage