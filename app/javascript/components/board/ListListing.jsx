import React from 'react';
import List from './List';

const ListListing = ({ lists }) => {
  const listGroup = lists.map(list => {
    return <List
            key={list.id}
            title={list.title}
            id={list.id}
          />
  });

  return (
    <div id="existing-lists" className="existing-lists">
      {listGroup}
    </div>

  );
};

export default ListListing;
