import React, { Component } from 'react';
import './index.less';

export default class extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {

  }

  render() {
    const { list } = this.props;
    console.log(list)
    return (
      <ul id="list" className="list">
        {
          list.map((item, index) => {
            return <div key={index}>{item}</div>
          })
        }
      </ul>
    );
  }
}
