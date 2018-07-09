import React from 'react';

const ListTitleForm = ({ inputText, handleSubmit, handleChange }) => {
  function onChange(e) {
    handleChange(e.target.value)
  }

  function onKeyUp(e) {
    if (e.keyCode == 13) {
      handleSubmit(e.target.value)
    }
  }

  return (
    <input
      type="text"
      className="list-title"
      value={inputText}
      autoFocus="true"
      onBlur={handleSubmit}
      onKeyUp={onKeyUp}
      onChange={onChange}
    />
  )
}

export default ListTitleForm
