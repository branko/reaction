import React from 'react'

export default CardForm = ({handleSubmit, onChange, closeDropdown, addDropdownActive}) => {
  return (
    <div className={`add-dropdown add-bottom ${addDropdownActive ? 'active-card' : ''}`}>
      <div className="card">
        <div className="card-info"></div><textarea onChange={onChange} name="add-card"></textarea>
          <div className="members">
          </div>
        </div>
        <a onClick={handleSubmit} className="button">Add</a><i onClick={closeDropdown} className="x-icon icon"></i>
        <div className="add-options"><span>...</span>
      </div>
    </div>
  )
}
