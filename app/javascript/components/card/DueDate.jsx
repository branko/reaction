import React from 'react';

import { calculateDueClass } from '../../lib/Helpers'

export default function DueDate({ dueDate, completed, editCard }) {
  function handleToggleComplete() {
    editCard({completed: !completed})
  }

  return (
    <li className="due-date-section">
      <h3>Due Date</h3>
      <div id="dueDateDisplay" className={calculateDueClass(dueDate) + (completed ? ' completed' : '')}>
        <input id="dueDateCheckbox" onChange={handleToggleComplete} type="checkbox" className="checkbox" checked={completed} />{dueDate}
      </div>
    </li>
  )
}
