import React from 'react';
import List from './List';

const ListListing = ({ lists }) => {
  const listGroup = lists.map((list, i) => {
    return <List
            key={'list-' + i}
            title={list.title}
            id={list.id}
            boardId={list.board_id}
          />
  });

  return (
    <div id="existing-lists" className="existing-lists">
      {listGroup}
    </div>
  );
};

export default ListListing;
