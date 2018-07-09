import React from 'react';
import Label from './Label'

export default function LabelList() {
  return (
    <li className="labels-section">
      <h3>Labels</h3>
      <Label color={'green'}/>
      <Label color={'yellow'}/>
      <Label color={'orange'}/>
      <Label color={'blue'}/>
      <Label color={'purple'}/>
      <Label color={'red'}/>

      <div className="member-container">
        <i className="plus-icon sm-icon"></i>
      </div>
    </li>
  )
}
