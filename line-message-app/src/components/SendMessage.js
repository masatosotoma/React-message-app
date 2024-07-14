import React, { useState } from "react";
import { db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";
import { Input } from "@mui/base";
import SendIcon from "@mui/icons-material/Send";

function SendMessage() {
  const [message, setMessages] = useState("");
  function sendMessage(e) {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdat: firebase.firestore.FieldValue.serverTimestamp,
    });
    setMessages("");
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            placeholder="Enter Message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <SendIcon />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
