import React, { useEffect } from 'react'
import { authService } from '../../../myFirebase'

import { Link, useHistory } from 'react-router-dom'
import { useUserDispatch, LOG_IN } from '../contexts/UserContext'
function Home() {
  const dispatch = useUserDispatch()
  const history = useHistory()

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
