import React, { createContext, useContext, useReducer } from 'react'

interface initialState {
  user: any
}

const initialState: initialState = { user: undefined }

export const LOG_IN = (user: any) => ({
  type: 'LOGIN',
  payload: {
    user,
  },
})

type UserAction = ReturnType<typeof LOG_IN> | { type: 'LOGOUT' }

function userReducer(state = initialState, action: UserAction) {
  if (action.type === 'LOGIN') {
    console.log('-->', action.payload)
    return state
  }
  return state
}

let UserStateContext: React.Context<initialState> = createContext<initialState>(
  initialState,
)
let UserDispatchContext = createContext<React.Dispatch<UserAction> | undefined>(
  undefined,
)

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
