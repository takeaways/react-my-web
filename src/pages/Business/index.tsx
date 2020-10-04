import React from 'react'
import AuthService from '../../services/auth_service'
import Login from './components/login/login'

const authService = new AuthService()
export default function Business() {
  return <Login authService={authService} />
}
