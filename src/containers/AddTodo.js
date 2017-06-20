import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let getAddress = (dispatch, input) => {
  if (!input.value.trim()) {
    return false
  }

  let url = 'http://api.zipaddress.net/?zipcode=' + input.value;
  asyncAddressApi(url).then(function onFulfilled(value){
    let { code, data } = JSON.parse(value)
    if (code == '200') {
      dispatch(addTodo(data.fullAddress))
      input.value = ''
    }
  });
}

let asyncAddressApi = (url) => {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onload = function () {
      if (req.status === 200) {
        resolve(req.responseText);
      }
    };
    req.send();
  });
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
