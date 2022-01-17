import { createStore } from 'redux'

const add = document.getElementById('add')
const minus = document.getElementById('minus')
const number = document.querySelector('span')

// 초기값 설정 && 상수로 리팩토링
number.innerText = 0
const ADD = 'ADD'
const MINUS = 'MINUS'

// state를 받아서 그 값을 수정한 후 return해준다.
// 오직 reducer에서 데이터를 수정할 수 있다.
const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1
    case MINUS:
      return state - 1
    default:
      return state
  }
}

const store = createStore(reducer)

const onChange = () => {
  number.innerText = store.getState()
}

// state가 바뀔때마다 onChange 함수를 실행
store.subscribe(onChange)

// action은 객체여야 하며 type 프로퍼티가 꼭 있어야 한다.
add.addEventListener('click', () => store.dispatch({ type: ADD }))
minus.addEventListener('click', () => store.dispatch({ type: MINUS }))
