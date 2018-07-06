import React from 'react';

const ListTitleForm = ({ inputText, handleSubmit, handleChange }) => {
  function onChange(e) {
    handleChange(e.target.value)
  }

  return (
    <input
      type="text"
      className="list-title"
      value={inputText}
      autoFocus="true"
      onBlur={handleSubmit}
      onChange={onChange}
    />
  )
}

export default ListTitleForm
