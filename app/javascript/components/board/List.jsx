import React from 'react';
import CardList from './CardList';

const List = () => {
  return (

    <div className="list-wrapper">
        <div className="list-background">
            <div className="list">
                <a className="more-icon sm-icon" href=""></a>
                <div>
                    <p className="list-title">Stuff to try (this is a list)</p>
                </div>
                <div className="add-dropdown add-top">
                    <div className="card"></div><a className="button">Add</a><i className="x-icon icon"></i>
                    <div className="add-options"><span>...</span>
                    </div>
                </div>
                <CardList />
            </div>
        </div>
    </div>
  );
}

export default List;
