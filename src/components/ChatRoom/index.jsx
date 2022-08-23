import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { sendMessage } from 'services/firebase'
import { useAuth } from 'hooks/useAuth'
import {useMessages} from 'hooks/useMessages'
import './style.css'
import { useRef } from 'react'
import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

const ChatRoom = () => {
  const {id} = useParams()
  const {user} = useAuth()
  const messages = useMessages(id)
  const [text, setText] = useState('')
  const messageListRef = useRef(null)

  // console.log(messages)


  useLayoutEffect(()=>{

    if(messageListRef.current){
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight
    }

  })

  const onSubmitHandler = (e) => {
    e.preventDefault()

    sendMessage(id,user,text)

    setText('')
  }
  return (
    <div>
      <p>Chat Room</p>
      <p><Link to='/'>Go back to rooms</Link></p>
      <div className='messages-container'>
        <div className='messages' ref={messageListRef}>
          {messages && messages.map(message=>{
            return <div key={message.id} className={`message ${message.displayName === user.displayName?'message-activeuser':''}`}>
              <p>{message.displayName}</p>
              <p>{message.text}</p>
            </div>
          })}
        </div>
        <form onSubmit={onSubmitHandler}>
          <div className='message-form'>  <input required type='text' value={text} onChange={e => setText(e.target.value)} />
          <button type='submit'>send</button></div>
        
        </form>
      </div>
    </div>
  )
}

export default ChatRoom