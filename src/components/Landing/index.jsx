import React from 'react'
import { chatRooms } from 'data/chatrooms'
import { Link } from 'react-router-dom'
import './style.css'

const Landing = () => {
  return (
    <div>
      <p>Chat Room</p>
      <div className='rooms-links'>{chatRooms.map((chatroom)=> {
          return (<Link key={chatroom.id} to={`/chatroom/${chatroom.id}`}> 
          <div >
            {chatroom.title}
          </div>
          </Link>)
          
        }) }
      </div>
    </div>
  )
}

export default Landing