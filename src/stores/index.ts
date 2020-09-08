import { combineReducers, createStore } from 'redux'

import todo from './todo'

const rootReducer = combineReducers({ todo })

export default createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>
