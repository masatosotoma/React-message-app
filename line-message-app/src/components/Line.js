import React, { useState, useEffect, useRef } from "react";
import { db, auth } from "../firebase.js";
import SendMessage from "./SendMessage.js";
import SignOut from "./SignOut";

function Line() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div>
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage/>
    </div>
  );
}

export default Line;
