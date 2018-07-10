import { Component } from 'react';
import { connect } from 'react-redux'
import Title from '../../components/title'
import Input from '../../components/input'
import List from '../../components/list'
import { newItem, doneItem } from '../../actions/'

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  componentDidCatch() {
  }

  render() {
    const { list, newItem, doneItem } = this.props;
    return (
      <div>
        <Title title="Todo App"></Title>
        <Input onNew={newItem}/>
        <List list={list} onDone={doneItem}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  newItem: (index) => dispatch(newItem(index)),
  doneItem: (index) => dispatch(doneItem(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)
