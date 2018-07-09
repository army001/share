import React, { Component } from 'react';
import './index.less';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }
  handleNewItemBtnClick = () => {
    const { value } = this.state;
    const { onNew } = this.props;
    if (value) {
      onNew(value);
      this.setState({
        value: ''
      });
    }
  }
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  render() {
    const { value } = this.state;
    return (
      <div className="input-wrap">
        <input value={ value } type="text" id="item-input" onChange={this.handleChange}/>
        <button id="add-btn" onClick={this.handleNewItemBtnClick}>+</button>
      </div>
    );
  }
}
