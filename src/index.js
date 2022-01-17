import { createStore } from 'redux'

const add = document.getElementById('add')
const minus = document.getElementById('minus')
const number = document.querySelector('span')

// state를 받아서 그 값을 수정한 후 return해준다.
// 오직 reducer에서 데이터를 수정할 수 있다.
const reducer = (state = 0) => {
  return state
}

const store = createStore(reducer)

console.log(store.getState())

// add.addEventListener('click', handleAdd)
// minus.addEventListener('click', handleMinus)
