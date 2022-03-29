import React, { useState } from 'react'
import { db, auth } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore'
import { Editor } from '@tinymce/tinymce-react';

function CreatePost() {
  let [alert, setAlert] = useState(true);

  function cipherRot13(str) {
    str = str.toUpperCase();
    return str.replace(/[A-Z]/g, rot13);
    function rot13(correspondance) {
      const charCode = correspondance.charCodeAt();
      return String.fromCharCode(
        ((charCode + 13) <= 90) ? charCode + 13
          : (charCode + 13) % 90 + 64
      );
    }
  }

  const [message, setMessage] = useState("");
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
    var rawTitle = data.title
    var rawDesc = data.desc
    var encTitle = cipherRot13(rawTitle);
    var encDesc = cipherRot13(rawDesc);
    console.log(encTitle, encDesc)

    await addDoc(thoughts, { Name: auth.currentUser.displayName, Title: encTitle, Desc: encDesc })
    setMessage(`Your Thought Inserted Successfully.`)
    setData({
      title: "",
      desc: ""
    });
  }

  setTimeout(() => {
    setAlert(false);
  }, 5000);
  return (
    <>
      <div className="container my-5 w-50">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
          <input name="title" value={data.title} onChange={handleChange} type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
          <textarea name="desc" value={data.desc} onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
        </div>
        {/* <Editorr setData={setData}
          apiKey="p3jdxl6q0yzd5exw19grmvsw5db4n6ooq54b68dkiau68k4o"
        /> */}
        {alert && <div className="alert alert-danger" role="alert">Don't worry, Your messages  will be Encrypted</div>}

        {message && <p>{message}  GoTo <a href="/">Home</a></p>}
        <button onClick={handleSubmit} className='btn btn-primary my-2'>Create Post</button>

      </div>
    </>
  )
}


const Editorr = ({ setData }) => {
  const handleEditorChange = (e) => {
    setData(e.target.getContent());

  }
  return (
    <>
      <Editor
        initialValue="I love Tea :)"
        init={{
          height: 3000,
          menubar: false,
          plugins: [
            'advlist autolink lists link image',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help'
        }}
        onChange={handleEditorChange}
      />
    </>
  )
}

export default CreatePost