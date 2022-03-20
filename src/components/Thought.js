import React, { useState, useEffect } from 'react'
import {
  useParams,
} from "react-router-dom";
import { db } from '../firebase-config';
import {  getDoc, doc } from 'firebase/firestore'


function Thought() {

  let { id } = useParams();
  const [content, setContent] = useState({
    Title: "",
    Desc: "",
  });

  useEffect(() => {
    async function getData() {
      const docRef = doc(db, "thoughts", `${id}`);
      const data = await getDoc(docRef);
      setContent({
        Title: data._document.data.value.mapValue.fields.Title.stringValue,
        Desc: data._document.data.value.mapValue.fields.Desc.stringValue
      })
    }
    getData();
  }, [])


  return (
    <>
      <div className="container mt-5">
        <div className="card text-center">
          <div className="card-header">
            🐼🍕🍰💃🎊
          </div>
          <div class="card">
          <div class="card-body">
              <h5 class="card-title">{content.Title}</h5>
              <p class="card-text" >{content.Desc}</p>
              <p class="card-text"><small class="text-muted">Author | Hero</small></p>
            </div>
            <img style={{ opacity: "0.7" }}  class="card-img-bottom"  src="https://source.unsplash.com/random/780x180/?thoughts,quotes" alt="Image" />
          </div>
        </div>
        <div class="p-2 mb-4 card-footer text-muted text-center">
    The Unkonow hero
  </div>
      </div>
    </>
  )
}

export default Thought