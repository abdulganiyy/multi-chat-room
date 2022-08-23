import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Landing from 'components/Landing'
import ChatRoom from 'components/ChatRoom'

const AuthenticatedApp  = () => {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/chatroom/:id' element={<ChatRoom />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default AuthenticatedApp 