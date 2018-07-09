import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import Todo from './pages/todo';

class App extends Component {
  constructor() {
    super();
    this.history = createHistory();
    this.state = {
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="app">
        <Router history={this.history}>
          <Switch>
            <Route path="/todo" render={() => <Todo data={this.state} />} />
            <Redirect to="/todo"/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
