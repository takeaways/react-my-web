import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { authService, firebaseInstance } from '../../../myFirebase'
import { useUserDispatch, LOG_IN, useUserState } from '../contexts/UserContext'

import { filterUser } from '../../../utils'

export default function Auth() {
  const dispatch = useUserDispatch()
  const history = useHistory()
  const { user } = useUserState()

  console.log(user)

  //TODO: LOGIN_________________________________________________
  const [create, setCreate] = useState(false)
  const [error, setError] = useState('')
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
  //TODO: SUBMIT_________________________________________________
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState({ email: '', password: '' })
    try {
      let user
      if (create) {
        user = await authService.createUserWithEmailAndPassword(
          state.email,
          state.password,
        )
      } else {
        user = await authService.signInWithEmailAndPassword(
          state.email,
          state.password,
        )
      }
      if (dispatch) {
        dispatch(LOG_IN(filterUser(user)))
        history.push('/contact')
      }
    } catch (error) {
      setError(error.message)
    }
  }
  //TODO: SOCIAL__________________________________________________
  async function handleSocialLogin(event: any) {
    const {
      target: { name },
    } = event

    if (name === 'google') {
      const provider = new firebaseInstance.auth.GoogleAuthProvider()
      const user = await authService.signInWithPopup(provider)
      if (dispatch) {
        dispatch(LOG_IN(filterUser(user)))
        history.push('/contact')
      }
    } else if (name === 'github') {
      const provider = new firebaseInstance.auth.GithubAuthProvider()
      const user = await authService.signInWithPopup(provider)
      if (dispatch) {
        dispatch(LOG_IN(filterUser(user)))
        history.push('/contact')
      }
    }
  }

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        history.push('/contact')
        if (dispatch) {
          dispatch(LOG_IN(filterUser(user)))
        }
      }
    })
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          required
        />
        <input type="submit" value={`${create ? 'Create Account' : 'Login'}`} />
        <div>
          <input
            type="button"
            value={`${create ? 'Login' : 'Create Account'} "하기"`}
            onClick={() => {
              setCreate(pre => !pre)
            }}
          />
        </div>
      </form>
      <div>{error}</div>
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
