import React from 'react';
import CardListContainer from './CardListContainer';
import EditableListTitle from './EditableListTitle';

const List = ({ title, id, boardId }) => {
  return (
    <div className="list-wrapper">
        <div className="list-background">
            <div className="list">
                <a className="more-icon sm-icon" href=""></a>
                <EditableListTitle
                  id={id}
                  title={title}
                  boardId={boardId}
                />
                <div className="add-dropdown add-top">
                    <div className="card"></div><a className="button">Add</a><i className="x-icon icon"></i>
                    <div className="add-options"><span>...</span>
                    </div>
                </div>
                <CardListContainer list_id={id}/>
            </div>
        </div>
    </div>
  );
}

export default List;
