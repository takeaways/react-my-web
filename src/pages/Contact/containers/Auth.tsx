import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { FcGoogle } from 'react-icons/fc'
import { FaGithubAlt } from 'react-icons/fa'

import { authService, firebaseInstance } from '../../../myFirebase'
import { useUserDispatch, LOG_IN, useUserState } from '../contexts/UserContext'

import { filterUser } from '../../../utils'
import Heading from '../../../components/common/Heading'

export default function Auth() {
  const dispatch = useUserDispatch()
  const { user } = useUserState()
  const history = useHistory()

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
      }
    } else if (name === 'github') {
      const provider = new firebaseInstance.auth.GithubAuthProvider()
      const user = await authService.signInWithPopup(provider)
      if (dispatch) {
        dispatch(LOG_IN(filterUser(user)))
      }
    }
    history.push('/contact')
  }

  useEffect(() => {
    if (user.uid) {
      history.push('/contact')
    }
  }, [])

  return (
    <Container>
      <Heading heading="연락하기 로그인 페이지" />
      <form onSubmit={handleSubmit}>
        <div className="login-group">
          <p className="error-text">{error}</p>
          <p>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              required
            />
          </p>

          <p>
            <button type="submit">
              {`${create ? 'Create Account' : 'Login'}`}
            </button>
            <button
              type="button"
              style={{ marginTop: '5px' }}
              onClick={() => {
                setCreate(pre => !pre)
              }}
            >
              {`${create ? '로그인' : 'Create Account'} "하기"`}
            </button>
          </p>

          <p></p>
        </div>
      </form>
      <footer>
        <button onClick={handleSocialLogin} name="google">
          Continue with{' '}
          <span className="btn-logo">
            <FcGoogle />
          </span>
          oogle
        </button>
        <button onClick={handleSocialLogin} name="github">
          Continue with{' '}
          <span className="btn-logo">
            <FaGithubAlt />
          </span>
          ithub
        </button>
      </footer>
    </Container>
  )
}

const Container = styled.article`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .error-text {
    color: var(--color-red);
  }

  button {
    height: 2rem;
    outline: none;
    border: none;
    background-color: var(--color-red);
    border-radius: 15px;
    cursor: pointer;
    margin-bottom: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    .btn-logo {
      margin-left: 5px;
      display: flex;
      align-items: center;
      font-size: 1.5rem;
    }
  }

  form {
    width: 350px;
  }
  form p {
    height: 3rem;
  }

  form input {
    width: 100%;
    height: 2rem;
    border-radius: 15px;
    padding-left: 1rem;
    outline: none;
  }

  form button {
    width: 100%;
  }

  footer {
    width: 350px;
    display: flex;
    flex-direction: column;
  }
`
