import React from 'react';
import Label from './Label'

export default function LabelList({ labels }) {
  const labelComponents = labels.map((label, i) => {
    return (<Label key={'label-' + i} color={label}/>)
  })

  return (
    <li className="labels-section">
      <h3>Labels</h3>
      {labelComponents}
      <div className="member-container">
        <i className="plus-icon sm-icon"></i>
      </div>
    </li>
  )
}
