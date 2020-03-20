const express = require('express');
const allRouter = require('express-list-endpoints');
const bodyParser = require('body-parser');

const router = require('./router/index');

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))
// parse application/json
app.use(bodyParser.json())

app.use('/api', router);

app.listen(port, () => {
  console.log(`Todo app started on ${port}`);
  console.log('Registered Routes: ');
  console.log(allRouter(app));
});