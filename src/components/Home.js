import React, { useContext, useEffect, useState } from 'react'
import userContext from '../context/userContext'
import { db } from '../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore'
import SinglePost from './SinglePost';

function Home() {
  const context = useContext(userContext);

  const [getThought, setGetThought] = useState([]);
  const thoughts = collection(db, "thoughts");

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(thoughts);
      console.log(data)
      setGetThought(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    getData()
  }, []);

  console.log(getThought)
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