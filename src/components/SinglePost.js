import React from 'react'
import {Link} from "react-router-dom";

function SinglePost({th}) {

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
      var encTitle = th.Title
      var encDesc = th.Desc
      var decTitle = CaesarDecryption(encTitle);
      var decDesc = CaesarDecryption(encDesc);

    return (
        <>

            <div className="col-6 col-md-4 my-3">
                <div className="card" style={{ width: "18rem" }} >
                    <img src="https://source.unsplash.com/150x150/?thoughts,quotes" width="150" height="200" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{decTitle? decTitle.slice(0,20).concat(" ..."):"No Title"}</h5>
                        <p className="card-text">{decDesc ? decDesc.slice(0,40).concat(" ..."):"No Desc"}</p>
                        <Link to={`/thought/${th.id}`} className="btn btn-primary">Read full</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SinglePost