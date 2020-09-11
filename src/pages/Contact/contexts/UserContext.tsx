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
  todo?: string
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
  todo: 'test',
}

const Login = 'LOG_IN' as const
const Logout = 'LOG_OUT' as const
const Test = 'Test' as const

export const LOG_IN = (user: User) => ({
  type: Login,
  payload: {
    user,
  },
})

export const LOG_OUT = () => ({
  type: Logout,
})

export const TEST = (text: string) => ({
  type: Test,
  payload: {
    text,
  },
})

type UserAction =
  | ReturnType<typeof LOG_IN>
  | ReturnType<typeof LOG_OUT>
  | ReturnType<typeof TEST>

function userReducer(state = initialState, action: UserAction) {
  if (action.type === 'LOG_IN') {
    const { user } = action.payload
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
  if (action.type === 'Test') {
    return {
      ...state,
      todo: action.payload.text,
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
