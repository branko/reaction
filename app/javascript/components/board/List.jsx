import React from 'react';
import CardListContainer from './CardListContainer';
import EditableListTitle from './EditableListTitle';

class List extends React.Component {
  state = {
    addDropdownActive: false,
  }

  openDropdown = () => {
    this.setState({ addDropdownActive: true })
  }

  closeDropdown = () => {
    console.log('??')
    this.setState({ addDropdownActive: false })
  }

  handleSubmit = () => {

  }

  render() {
    let { title, id, boardId } = this.props

    return (
      <div className={`list-wrapper ${this.state.addDropdownActive ? 'add-dropdown-active' : ''}`}>
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

            <div className={`add-dropdown add-bottom ${this.state.addDropdownActive ? 'active-card' : ''}`}>
              <div className="card"><div className="card-info"></div><textarea name="add-card"></textarea><div className="members"></div></div>
              <a className="button">Add</a><i onClick={this.closeDropdown} className="x-icon icon"></i>
              <div className="add-options"><span>...</span>
              </div>
            </div>

            <div onClick={this.openDropdown} className="add-card-toggle" data-position="bottom">Add a card...</div>
          </div>
        </div>
      </div>
    )
  }
}

export default List;
