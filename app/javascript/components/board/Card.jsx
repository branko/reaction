import React from 'react';
import moment from 'moment';
import { calculateDueClass } from '../../lib/Helpers'

import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  let colorLabels = card.labels.map((label, i) => {
    return <div key={i} className={`card-label ${label} colorblindable`}></div>
  })

  function cardIcons() {
    let dueDate = card.due_date
    let dueDateString = moment(dueDate).format('MMM D')

    return (
      <div className="card-icons">
        {dueDate ? <i className={`clock-icon sm-icon ${calculateDueClass(dueDate)} ${card.completed ? 'completed' : ''}`}>{dueDateString}</i> : ''}
        {card.description ? <i className="description-icon sm-icon"></i> : null}
        {card.comments_count ? <i className="comment-icon sm-icon"></i> : ''}
      </div>
    )
  }

  return (
    <Link to={`/cards/${card.id}`}>
      <div className="card-background">
        <div className="card "><i className="edit-toggle edit-icon sm-icon"></i>
            <div className="card-info">
                {colorLabels}
                <p>{card.title}</p>
            </div>
            {cardIcons()}
        </div>
      </div>
    </Link>
  );
};

export default Card;
