import React from 'react';
import Card from './Card';

class CardContainer extends React.Component {
  componentDidMount() {
    const id = +this.props.match.params.id
    const store = this.context.store
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
    store.dispatch(actions.fetchCard(id))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div id="modal-container">
        <div className="screen"></div>
        <Card />
      </div>
    )
  }
}

export default CardContainer
