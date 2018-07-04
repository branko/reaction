import React from 'react';

const Card = ({ title }) => {

  return (
    <div className="card-background">
        <div className="card "><i className="edit-toggle edit-icon sm-icon"></i>
            <div className="card-info">
                <p>{title}</p>
            </div>
        </div>
    </div>
  );
};

export default Card;
