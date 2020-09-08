const initialState = {}

const GET = 'todo/get' as const

export const getTodo = () => ({ type: GET })

type TodoAction = ReturnType<typeof getTodo>

export default function todoReducer(state = initialState, action: TodoAction) {
  return state
}
