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
    <main>
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
          {listGroup}
        </div>
      </div>
    </main>
  );
};

export default ListListing;
