const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());
app.use(require('./middlewares/m1'));
app.use(require('./middlewares/logger'));

app.get('/echo', (req, res) => {
  res.json({
    method: 'GET',
    route: '/echo'
  })
}) 

app.post('/echo', (req, res) => {
  res.json({
    method: 'POST',
    route: '/echo',
    body: req.body
  })
})

app.listen(3000, (err) => {
  console.log('listening')
})