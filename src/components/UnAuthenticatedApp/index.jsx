import React from 'react'
import { useAuth } from 'hooks/useAuth';
import './style.css'

const UnAuthenticatedApp  = () => {
    const { login } = useAuth();

  return (
    <>
    <h2>Log in to join a chat room!</h2>
    <div>
        <button onClick={login} className="login">
            Login with Google
        </button>
    </div>
</>
  )
}

export default UnAuthenticatedApp 