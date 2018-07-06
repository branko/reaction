import React from 'react';

const ListTitle = ({ title, onClick }) => {
  return (
    <p className="list-title" onClick={onClick}>{title}</p>
  )
}

export default ListTitle
