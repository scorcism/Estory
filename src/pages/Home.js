import React, { useContext } from 'react'
import userContext from '../context/userContext';
import SinglePost from '../components/SinglePost';

function Home() {
  const context = useContext(userContext);
    const { getThought } = context;

  return (
    <>
      <div className='container w-80 mt-5'>
        <h2 className="text-center mt-2 mb-2">Your blogs are here !!</h2>
        <div className="row">
         {getThought.map((th)=>{
           return  <SinglePost key={th.id} th={th}/>
         })} 
        </div>
      </div>
    </>
  )
}

export default Home