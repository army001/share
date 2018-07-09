import React, { Component } from 'react';
import { createStore } from 'redux'
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import { Provider } from 'react-redux';
import Todo from './pages/todo';
import rootReducer from './reducers'

const store = createStore(rootReducer);

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
      <div className="app" style={{padding: '25px 0'}}>
        <Provider store={store}>
          <Router history={this.history}>
            <Switch>
              <Route path="/todo" render={() => <Todo data={this.state} />} />
              <Redirect to="/todo"/>
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
