import React, { useState } from "react";
import { db,auth } from "../firebase.js";
import firebase from "firebase/compat/app";

function SendMessage() {
  const [message, setMessages] = useState();
  function sendMessage(e) {
      e.preventDefault();

      const { uid, photoURL } = auth.currentUser;
      
      db.collection("messages").add({
          text: message,
          photoURL,
          uid,
          createdat: firebase.firestore.FieldValue.serverTimestamp;
      })
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <input
            placeholder="Enter messages"
            type="text"
            onChange={(e) => setMessages(e.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
