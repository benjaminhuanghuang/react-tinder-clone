import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";

import "./ChatScreen.css";
import SelectInput from "@material-ui/core/Select/SelectInput";

function ChatScreen() {
  const [input, setInut] = useState("");
  const [messages, setMessages] = useState([
    { name: "aa", image: "", message: "dddddd" },
    { name: "aa", image: "", message: "dddddd" },
    { image: "", message: "dddddd" },
  ]);
  const handleSend= (e) => {
    e.preventDefault();

    setInput("");
  }
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

      <form className="chatScreen__input">
        <input
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message..."
          value={input}
          onChnage={(e) => SelectInput(e.target.valu)}
        />
        <button type="submit" className="chatScreen__inputButton" onClick={handleSend}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
