import React from 'react'
import ContactNav from '../components/ContactNav'
import { authService } from '../../../myFirebase'
import { useUserDispatch, LOG_OUT } from '../contexts/UserContext'

function Profile() {
  const dispatch = useUserDispatch()
  const onLogOutClick = () => {
    if (dispatch) dispatch(LOG_OUT())
    authService.signOut()
  }
  return (
    <div>
      Profile Profile
      <ContactNav />
      <button onClick={onLogOutClick}>log out</button>
    </div>
  )
}

export default Profile
