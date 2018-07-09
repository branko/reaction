import React from 'react';

export default function Label({ color }) {
  return (
    <div className="member-container">
      <div className={color + " label colorblindable"}></div>
    </div>
  )
}
