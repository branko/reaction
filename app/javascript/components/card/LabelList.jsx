import React from 'react';
import Label from './Label'
import LabelsForm from './LabelsForm'

export default function LabelList({ labels, handleShowPopover }) {
  const labelComponents = labels.map((label, i) => {
    return (<Label key={'label-' + i} color={label}/>)
  })

  function handleShowLabelsPopover(e) {
    handleShowPopover(e, 'labels')
  }

  return (
    <li className="labels-section">
      <h3>Labels</h3>
      {labelComponents}
      <div className="member-container">
        <i className="plus-icon sm-icon" onClick={handleShowLabelsPopover}></i>
      </div>
    </li>
  )
}
