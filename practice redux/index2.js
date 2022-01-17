import { createStore } from 'redux'

const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')

const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'

// actions
// 단순히 객체 리턴
const addToDo = (text) => ({ type: ADD_TODO, text })
const deleteToDo = (id) => ({ type: DELETE_TODO, id })

// state는 절대 임의로 수정하지 않는다. 무조건 새로운 값 return!
const reducer = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }]
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id)
    default:
      return state
  }
}

const store = createStore(reducer)

// state값 확인을 위한 subscribe
store.subscribe(() => console.log(store.getState()))

// dispatch할때 사용할 함수 정의 이 안에서 위에서 정의한 action을 호출함
const dispatchAddTodo = (text) => {
  store.dispatch(addToDo(text))
}

const dispatchDeleteTodo = (e) => {
  const id = Number(e.target.parentNode.id)
  store.dispatch(deleteToDo(id))
}

// state가 변할때 마다 화면에 state값 기준으로 화면을 표현하는 함수
// ul의 요소를 다 지웠다 다시 그리기 때문에 성능 문제가 있을 수 있음
const paintToDos = () => {
  const toDos = store.getState()
  ul.innerHTML = ''
  toDos.forEach((toDo) => {
    const li = document.createElement('li')
    const btn = document.createElement('button')
    btn.innerText = 'DEL'
    btn.addEventListener('click', dispatchDeleteTodo)
    li.id = toDo.id
    li.innerText = toDo.text
    li.appendChild(btn)
    ul.appendChild(li)
  })
}

store.subscribe(paintToDos)

// 버튼 클릭시 AddTodo 실행 (input 값을 가지고)
const onSubmit = (e) => {
  e.preventDefault()
  const toDo = input.value
  input.value = ''
  dispatchAddTodo(toDo)
}

form.addEventListener('submit', onSubmit)
