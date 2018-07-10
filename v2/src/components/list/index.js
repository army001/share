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

  onDoneBtnClick = (e) => {
    const index = e.target.getAttribute('data-index');
    this.props.onDone(index);
  }

  render() {
    const { list } = this.props;
    return (
      <ul id="list" className="list">
        {
          list.map((item, index) => {
            return (
              <li key={index}>
                {index + 1}. {item}
                <button data-index={index} onClick={this.onDoneBtnClick}>-</button>
              </li>
            );
          })
        }
      </ul>
    );
  }
}
