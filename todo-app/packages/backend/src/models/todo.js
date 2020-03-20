const todos = [];

/** 
 * Insert todo to database
 * @todo {id, title, completed}
 */
exports.insert = todo => {
  const tobeTodo = {
    ...todo,
    completed: false
  };
  todos.push(tobeTodo);
  return tobeTodo;
};

/** 
 * update todo by Id
 * @param { id: number }
 * @return { todo | false }
 */
exports.updateById = todo => {
  let todoIdx = todos.findIndex(t => t.id === todo.id);
  if (todoIdx !== -1) {
    todos[todoIdx] = {
      ...todos[todoIdx],
      ...todo
    };
    return todos[todoIdx];
  } else {
    return false;
  }
};


/** 
 * delete todo by Id
 * @param { id: number }
 * @return { boolean }
 */
exports.deleteById = id => {
  const todoIdx = todos.findIndex(todo => todo.id === id); //index of too // -1
  if (todoIdx === -1) {
    return false;
  }

  todos.splice(todoIdx, 1); // delete
  return true;
};

/** 
 * find all todos
 * @params {completed}
 * @return { list }
 */
exports.findAll = params => {
  if (!params) {
    return todos;
  } else {
    const {
      completed
    } = params;
    return todos.filter(todo => todo.completed === completed);
  }
}

exports.todos = todos;