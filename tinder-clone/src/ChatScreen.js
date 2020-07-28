import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";

import "./ChatScreen.css";

function ChatScreen() {
  const [messages, setMessages] = useState([
    { name: "aa", image: "", message: "dddddd" },
    { name: "aa", image: "", message: "dddddd" },
    { image: "", message: "dddddd" },
  ]);

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp"> You matched with aaa on 10/08/20</p>
      {messages.map((message, i) =>
        message.name ? (
          <div key={i} className="chatScreen__message">
            <Avatar className="chat__image" alt={message.name} src={message.image} />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div key={i} className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
    </div>
  );
}

export default ChatScreen;
