import React, { useContext } from 'react'
import userContext from '../context/userContext';
import SinglePost from '../components/SinglePost';


function Home() {
  const context = useContext(userContext);
  const { getThought } = context;
  const url = `https://source.unsplash.com/150x150/?thoughts,quotes`

  return (
    <>
      <div class="container my-4">
        <div className='container w-80 mt-5'>
          <h2 className="text-center mt-2 mb-2">Blogs are here !!</h2>
          <div className="row" style={{ minHeight: "30vh" }}>
            {getThought.map((th) => {
              return (<SinglePost url={url} key={th.id} th={th} />)
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
