import React from 'react';
import List from './List';

const ListList = () => {
  return (
    <main>
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
          <List />
        </div>
      </div>
    </main>
  );
};

export default ListList;
