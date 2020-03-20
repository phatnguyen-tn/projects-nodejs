const router = require('express').Router();
const {
  createTodo,
  updateTodo,
  getTodoList,
  deleteTodo,
  clearCompleted
} = require('../controllers/TodoController');

router.post('/createTodo', createTodo);
router.post('/updateTodo', updateTodo);
router.post('/todos', getTodoList);
router.post('/deleteTodo', deleteTodo);
router.post('/clearCompleted', clearCompleted);

module.exports = router;