import React from 'react';

export default function DueDate({ dueDate }) {
  return (
    <li className="due-date-section">
      <h3>Due Date</h3>
      <div id="dueDateDisplay" className="overdue completed">
        <input id="dueDateCheckbox" type="checkbox" className="checkbox" checked="" />{dueDate}<span>(past due)</span>
      </div>
    </li>
  )
}
