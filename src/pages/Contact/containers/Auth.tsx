import React, { useState } from 'react'

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

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          setState({ email: '', password: '' })
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
        <input type="submit" value="Login" />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  )
}

export default Auth
