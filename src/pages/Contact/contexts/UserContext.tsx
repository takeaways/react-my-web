import React, { createContext, useContext, useReducer, useState } from 'react'
export interface User {
  uid: string
  email?: string | null
  phoneNumber?: string | null
  photoURL?: string | null
  displayName?: string | null
}
interface InitialState {
  user: User
}

const userObj = {
  uid: '',
  email: '',
  phoneNumber: '',
  photoURL: '',
  displayName: '',
}
const initialState: InitialState = {
  user: userObj,
}

const Login = 'LOG_IN' as const
const Logout = 'LOG_OUT' as const

export const LOG_IN = (user: User) => ({
  type: Login,
  payload: {
    user,
  },
})

export const LOG_OUT = () => ({
  type: Logout,
})

type UserAction = ReturnType<typeof LOG_IN> | ReturnType<typeof LOG_OUT>

function userReducer(state = initialState, action: UserAction) {
  if (action.type === 'LOG_IN') {
    const { user } = action.payload

    console.log('LOG_ID>>> ', user)
    return {
      ...state,
      user,
    }
  }
  if (action.type === 'LOG_OUT') {
    return {
      ...state,
      user: userObj,
    }
  }
  return state
}

const UserStateContext: React.Context<InitialState> = createContext<
  InitialState
>(initialState)
const UserDispatchContext = createContext<
  React.Dispatch<UserAction> | undefined
>(undefined)

export default function UserContext({ children }: any) {
  const [state, dispatch] = useReducer(userReducer, initialState)

  console.log('chant__', state)

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  )
}

export function useUserState() {
  return useContext(UserStateContext)
}

export function useUserDispatch() {
  return useContext(UserDispatchContext)
}
