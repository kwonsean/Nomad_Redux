import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

function Detail({ toDos }) {
  const params = useParams()
  const todo = toDos.find((todo) => todo.id === Number(params.id))
  return (
    <>
      <h1>detail</h1>
      <h3>{todo?.text}</h3>
      <h3>created at: {todo?.id}</h3>
    </>
  )
}

function mapStateToProps(state) {
  return { toDos: state }
}

export default connect(mapStateToProps)(Detail)
