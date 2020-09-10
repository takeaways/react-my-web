import React from 'react'
import ContactNav from '../components/ContactNav'
import { authService } from 'myFirebase'

function Profile() {
  const onLogOutClick = () => authService.signOut()
  return (
    <div>
      Profile Profile
      <ContactNav />
      <button onClick={onLogOutClick}>log out</button>
    </div>
  )
}

export default Profile
