import React from 'react'
import { useAuth } from './Auth'

const HomeComp = () => {
  const auth=useAuth()
  return (
    <div>
      <div> Home</div>
      <div>
      <button onClick={  () =>{ auth.logout()}}> Logout</button>
      </div>
    </div>
  )
}

export default HomeComp