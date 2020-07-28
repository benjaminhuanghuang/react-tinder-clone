import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";

import "./ChatScreen.css";

function ChatScreen() {
  const [messages, setMessages] = useState([
    { name: "aa", image: "", message: "dddddd" },
    { name: "aa", image: "", message: "dddddd" },
    { name: "aa", image: "", message: "dddddd" },
  ]);

  return (
    <div className="chatScreen">
      {messages.map((message, i) => (
        <div key={i} className="chatScreen__message">
          <Avatar className="chat__image" alt={message.name} src={message.image} />
          <p className="chatScreen__text">{message.message}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatScreen;
