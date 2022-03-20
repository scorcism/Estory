import React, { useContext } from 'react'
import userContext from '../context/userContext';
import SinglePost from './SinglePost';

function Home() {
  const context = useContext(userContext);
    const { getThought } = context;

  return (
    <>
      <div className='container w-80 mt-5'>
        <h2 className="text-center mt-2 mb-2">Hello World!!</h2>
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