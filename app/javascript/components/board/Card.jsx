import React from 'react';
import { Link } from 'react-router-dom';

// import moment from 'moment';

const Card = ({ id, title, labels, dueDate }) => {
  let colorLabels = labels.map((l, i) => {
    return <div key={i} className={`card-label ${l} colorblindable`}></div>
  })

  // overdue-recent overdue due-soon
  // completed

  const RECENT_WINDOW = 86400000 * 2

  function calculateDueClass() {
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

  function cardIcons() {
    return (<div className="card-icons">
      {dueDate ? <i className={`clock-icon sm-icon ${calculateDueClass()}`}>{dueDate}</i> : ''}
      <i className="description-icon sm-icon"></i>
      <i className="comment-icon sm-icon"></i>
    </div>)
  }

  // dueDate = moment(dueDate).format('MMMM Do')

  return (
    <Link to={`/cards/${id}`}>
      <div className="card-background">
          <div className="card "><i className="edit-toggle edit-icon sm-icon"></i>
              <div className="card-info">
                  {colorLabels}
                  <p>{title}</p>
              </div>
              {cardIcons()}
          </div>
      </div>
    </Link>
  );
};

export default Card;
