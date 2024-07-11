import React, { useState, useEffect, useRef } from "react";
import { db, auth } from "../firebase.js";
import SendMessage from "./SendMessage.js";
import SignOut from "./SignOut";

function Line() {
  const [messages, setMessages] = useState();
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
    </div>
  );
}

export default Line;
