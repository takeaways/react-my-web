import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { authService } from '../../../myFirebase'
import { useUserDispatch, LOG_IN, useUserState } from '../contexts/UserContext'

function Auth() {
  const dispatch = useUserDispatch()
  const userState = useUserState()
  const history = useHistory()

  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const [newAccount, setNewAccount] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setState(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  useEffect(() => {
    const user = authService.currentUser()
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
              history.push('/contact/home')
            }
          } catch (e) {
            console.log(e)
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
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  )
}

export default Auth
