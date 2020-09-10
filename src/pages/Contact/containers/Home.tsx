import React from 'react'
import { authService } from '../../../myFirebase'

import { Link } from 'react-router-dom'
function Home() {
  console.log(authService.currentUser)
  return (
    <div>
      Home Home
      <div>
        <Link to="/contact/auth">auth</Link>
      </div>
      <div>
        <Link to="/contact/profile">profile</Link>
      </div>
    </div>
  )
}

export default Home
