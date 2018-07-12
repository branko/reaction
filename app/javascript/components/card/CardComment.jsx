import React from 'react';

export default function CardComment({ text, createdAt, updatedAt }) {
  return (
    <li className="activity-comment">
      <div className="member-container">
        <div className="card-member">TP</div>
      </div>
      <h3>Taylor Peat</h3>
      <div className="comment static-comment"><span>{text}</span>
      </div>
      <small>{createdAt} - <span className="link">Edit</span> - <span className="link">Delete</span></small>
      <div className="comment">
        <label>
          <textarea required="" rows="1" defaultValue="Edit has not been implemented yet."></textarea>
          <div>
            <a className="light-button card-icon sm-icon"></a>
            <a className="light-button smiley-icon sm-icon"></a>
            <a className="light-button email-icon sm-icon"></a>
          </div>
          <div>
            <p>You haven't typed anything!</p>
            <input type="submit" className="button not-implemented" value="Save" /><i className="x-icon icon"></i>
          </div>
        </label>
      </div>
    </li>
  )
}
