import React, {useState, useEffect} from 'react'

import Chat from "./Chat"

import "./Chat.css"

function Chats() {
  const [chats, setChats] = useState([
    {
      name:"aaaa",
      message:"dddddd",
      profilePic:"",
      tiemstamp:"ddddddd"
    }
  ])

  return (
    <div className="chats">
      {
        chats.map(chat => (
          <Chat name={chat.name} message={chat.message} profilePic={chat.profilePic} timestamp={chat.timestamp}/>
        ))
      }
    </div>
  )
}

export default Chats
