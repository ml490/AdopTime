/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AnimalPage from './animalPage/AnimalPage';
import Header from '../common/Header';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Animals" component={AnimalPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
