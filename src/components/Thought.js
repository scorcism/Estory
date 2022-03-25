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

  function CaesarDecryption(message) {
    var plainText = "";
    for (var i = 0; i < message.length; i++) {
      var encryptedCharacter = message.charCodeAt(i);
      if (encryptedCharacter >= 97 && encryptedCharacter <= 122) {
        plainText += String.fromCharCode((encryptedCharacter - 97 - 13 + 26) % 26 + 97);
      } else if (encryptedCharacter >= 65 && encryptedCharacter <= 90) {
        plainText += String.fromCharCode((encryptedCharacter - 65 - 13 + 26) % 26 + 65);
      } else {
        plainText += String.fromCharCode(encryptedCharacter);
      }
    }
    return plainText;
  }
  var encTitle = content.Title
  var encDesc = content.Desc
  var decTitle = CaesarDecryption(encTitle);
  var decDesc = CaesarDecryption(encDesc);

  return (
    <>
      <div className="container mt-5">
        <div className="card text-center">
          <div className="card-header">
            🐼🍕🍰💃🎊
          </div>
          <div className="card">
          <div className="card-body">
              <h5 className="card-title">{decTitle}</h5>
              <p className="card-text" >{decDesc}</p>
              <p className="card-text"><small className="text-muted">Author | Hero</small></p>
            </div>
            <img style={{ opacity: "0.7" }}  className="card-img-bottom"  src="https://source.unsplash.com/random/780x180/?thoughts,quotes" alt="Image" />
          </div>
        </div>
        <div className="p-2 mb-4 card-footer text-muted text-center">
    The Unkonow hero
  </div>
      </div>
    </>
  )
}

export default Thought