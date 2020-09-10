import React, { useEffect } from 'react'
import { authService } from '../../../myFirebase'

import { Link, useHistory } from 'react-router-dom'
import { useUserDispatch, LOG_IN } from '../contexts/UserContext'

import ContactNav from '../components/ContactNav'
function Home() {
  const dispatch = useUserDispatch()
  const history = useHistory()

  return (
    <div>
      Home Home
      <ContactNav />
    </div>
  )
}

export default Home
