import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import TopNav from './shared/TopNav';
import BoardsDashboardContainer from './dashboard/BoardsDashboardContainer';
import ListListContainer from './board/ListListContainer';
import CardContainer from './card/CardContainer';


import { fetchBoards } from '../actions/BoardActions';

class Application extends React.Component {
  static contextTypes = {
    store: PropTypes.object
  }

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const state = this.context.store.getState();

    return (
      <div>
        <TopNav />
        <Route path='/' exact component={BoardsDashboardContainer} />
        <Route exact path='/(boards|cards)/:id' component={ListListContainer} />
        <Route exact path='/cards/:id' component={CardContainer} />
      </div>
    );
  }
}

export default Application;
