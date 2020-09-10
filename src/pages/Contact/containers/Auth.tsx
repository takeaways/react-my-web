import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { authService, firebaseInstance } from '../../../myFirebase'
import { useUserDispatch, LOG_IN, useUserState } from '../contexts/UserContext'

function Auth() {
  const [state, setState] = useState({
    email: '',
    password: '',
  })
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setState(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const [newAccount, setNewAccount] = useState(false)
  function handleNewAccount() {
    setNewAccount(prev => !prev)
  }
  const [error, setError] = useState('')
  const dispatch = useUserDispatch()
  const userState = useUserState()
  const history = useHistory()

  async function handleSocialLogin(e: any) {
    const {
      target: { name },
    } = e

    if (name === 'google') {
      const provider = new firebaseInstance.auth.GoogleAuthProvider()
      const user = await authService.signInWithPopup(provider)
      console.log(user)
      if (dispatch) {
        dispatch(LOG_IN(user))
        history.push('/contact')
      }
    } else if (name === 'github') {
      const provider = new firebaseInstance.auth.GithubAuthProvider()
      const user = await authService.signInWithPopup(provider)
      console.log(user)
      if (dispatch) {
        dispatch(LOG_IN(user))
        history.push('/contact')
      }
    }
  }
  useEffect(() => {
    const user = authService.currentUser
    if (user) {
      history.push('/contact')
    }
  }, [])

  return (
    <div>
      <form
        onSubmit={async e => {
          e.preventDefault()
          setState({ email: '', password: '' })
          try {
            let user: any
            if (newAccount) {
              //create
              user = await authService.createUserWithEmailAndPassword(
                state.email,
                state.password,
              )
            } else {
              //login
              user = await authService.signInWithEmailAndPassword(
                state.email,
                state.password,
              )
            }
            if (dispatch) {
              dispatch(LOG_IN(user))
              history.push('/contact')
            }
          } catch (e) {
            setError(e.message)
          }
        }}
      >
        <input
          value={state.email}
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="Email"
          required
        />
        <input
          value={state.password}
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          required
        />
        <input type="submit" value={newAccount ? 'Create Account' : 'Login'} />
        <span onClick={handleNewAccount}>
          {newAccount ? 'Sign In' : 'Create Account'}
        </span>
      </form>
      {error}
      <div>
        <button onClick={handleSocialLogin} name="google">
          Continue with Google
        </button>
        <button onClick={handleSocialLogin} name="github">
          Continue with Github
        </button>
      </div>
    </div>
  )
}

export default Auth
