// import { combineReducers } from 'redux';

function todoReducer(state = [], action) {
  switch(action.type) {
    case 'new':
      state.push(action.value);
      console.log('dsadasd===', state);
      return [...state];
    case 'done':
      state.splice(action.value, 1);
      return [...state];
    default:
      return state;
  }
}

export default todoReducer;
// export default combineReducers({
//   todoReducer
// });


