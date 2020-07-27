import React from 'react'

import PersionIcon from "@material-ui/icons/Person"
import ForumIcon from "@material-ui/icons/Forum"

//
import "./Header.css"

function Header() {
  return (
    <div className="header">
      <PersionIcon/>
      <h2>Header</h2>
      <ForumIcon/>
    </div>
  )
}

export default Header
