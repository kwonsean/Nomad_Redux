import React, { useState } from 'react'
import { connect } from 'react-redux'

function Home(props) {
  console.log(props)
  const [text, setText] = useState('')

  function onChange(e) {
    setText(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()
    console.log(text)
    setText('')
  }

  return (
    <>
      <h1>To DO</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  )
}

// state는 store에 있는 state를, ownProps는 Home이 받고 있는 props를 보여줌
// return은 객체 형태로 작성하며, 이 내용은 Home 컴포넌트의 props에서 사용할 수 있다.
function mapStateToProps(state, ownProps) {
  return { toDos: state }
}

export default connect(mapStateToProps)(Home)
