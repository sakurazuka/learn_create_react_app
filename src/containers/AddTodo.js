import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let getAddress = (dispatch, input) => {
  if (!input.value.trim()) {
    return false
  }

  let req = new XMLHttpRequest()
  req.open('GET', 'http://api.zipaddress.net/?zipcode=' + input.value, true)
  req.onreadystatechange = function(){
    if (req.readyState==4){
      let { code, data } = JSON.parse(req.responseText)
      if (code == '200') {
        dispatch(addTodo(data.fullAddress))
        input.value = ''
      }
    }
  };
  req.send("")
}

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <h>郵便番号入力</h>
      <form onSubmit={e => {
        e.preventDefault()
        getAddress(dispatch, input)
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
