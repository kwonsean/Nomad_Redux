import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from '../store'

function Todo({ text, id, deleteTodo }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={deleteTodo}>DEL</button>
    </li>
  )
}

// ownProps에는 받아오는 text, id값이 들어가 있다.
function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteTodo: () => dispatch(actionCreators.deleteTodo(ownProps.id)),
  }
}

// state에 대해선 필요가 없을 경우 첫번째 인수로 null을 넣어준다.
export default connect(null, mapDispatchToProps)(Todo)
