import React, { Component } from 'react';

export default class extends Component {
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
