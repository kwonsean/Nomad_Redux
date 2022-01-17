import { createStore } from 'redux'

const ADD = 'ADD'
const DELETE = 'DELETE'

const addTodo = (text) => {
  return {
    type: ADD,
    text,
  }
}

const deleteTodo = (id) => {
  return {
    type: DELETE,
    id,
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, { text: action.text, id: Date.now() }]
    case DELETE:
      return state.filter((todo) => todo.id !== action.id)
    default:
      return state
  }
}

const store = createStore(reducer)

// 좀 더 쉽게 사용하기 위해 export 방식 변경
export const actionCreators = {
  addTodo,
  deleteTodo,
}

export default store
