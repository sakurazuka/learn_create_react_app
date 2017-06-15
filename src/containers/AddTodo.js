import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <h>郵便番号入力</h>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return false
        }

        let req = new XMLHttpRequest()
        req.open('GET', 'http://api.zipaddress.net/?zipcode=' + input.value, false)
        req.send("")
        let { code, data } = JSON.parse(req.response)
        if (code == '200') {
          dispatch(addTodo(data.fullAddress))
          input.value = ''
          return true
        } else {
          return false
        }

        // dispatch(addTodo(input.value))
        // input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

  export default AddTodo
