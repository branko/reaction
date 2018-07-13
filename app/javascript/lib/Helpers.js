import moment from 'moment';

const RECENT_WINDOW = 86400000 * 2

function calculateDueClass(dueDate) {
  let currentDate = new Date
  let tempDueDate = new Date(dueDate)

  if (currentDate - tempDueDate <= 0) {
    return 'due-soon'
  } else if (currentDate - tempDueDate < RECENT_WINDOW) {
    return 'overdue-recent'
  } else if (currentDate - tempDueDate >= RECENT_WINDOW) {
    return 'overdue'
  }
}

export { calculateDueClass }
