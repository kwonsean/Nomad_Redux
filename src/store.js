import { createStore } from 'redux'
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from '@reduxjs/toolkit'

// const addTodo = createAction('ADD')
// const deleteTodo = createAction('DELETE')

// // 이전처럼 새로운 state를 리턴할 수 있다. 만약 이 방법을 사용할때에는 무조건 return값이 있어야 된다.
// // 뿐만아니라 mutate를 사용 가능하다. 이땐 아무것도 return하지 않는다. (툴킷이 알아서 새로운 state를 리턴한다)
// const reducer = createReducer([], {
//   [addTodo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() })
//   },
//   [deleteTodo]: (state, action) => {
//     return state.filter((todo) => todo.id !== action.payload)
//   },
// })

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() })
    },
    remove: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload)
    },
  },
})

console.log(toDos.actions)

const store = configureStore({ reducer: toDos.reducer })

// 좀 더 쉽게 사용하기 위해 export 방식 변경
export const { add, remove } = toDos.actions

export default store
