
function createAction(type) {
  return function (value) {
    return {
      type,
      value
    }
  }
}

export const newItem = createAction('new');
export const doneItem = createAction('done');
