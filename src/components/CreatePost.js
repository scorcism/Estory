import React, { useState } from 'react'
import { db,auth } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore'

function CreatePost({isAuth}) {
  const [message,setMessage] = useState("");
  const [data, setData] = useState({
    title: "",
    desc: ""
  });
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value })
  }

  const thoughts = collection(db, "thoughts");

  const handleSubmit = async () => {
    // console.log(data);
    await addDoc(thoughts, { Name:auth.currentUser.displayName ,Title: data.title, Desc: data.desc })
    setMessage(`Your Thought Inserted Successfully.`)
    setData({
      title: "",
      desc: ""
    });
  }

  return (
    <>
     <div className="container my-5 w-50">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Title</label>
          <input name="title" value={data.title} onChange={handleChange} type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Description</label>
          <textarea name="desc" value={data.desc} onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
        </div>
        {message && <p>{message}  GoTo <a href="/">Home</a></p>}
        <button onClick={handleSubmit} className='btn btn-primary my-2'>Create Post</button>
      </div>
    </>
  )
}

export default CreatePost