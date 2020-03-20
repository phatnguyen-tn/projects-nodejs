const express = require('express');
const allRouter = require('express-list-endpoints');

const router = require('./router/index');

const app = express();
const port = 3000;

app.use('/api', router);

app.listen(port, () => {
  console.log(`Todo app started on ${port}`);
  console.log('Registered Routes: ');
  console.log(allRouter(app));
});