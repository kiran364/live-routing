const express = require('express')
const app = express();
//app.disable('etag');
const port = 3000;

app.get('/', (req, res) => { 
  res.status(200).send('Hello this is my home page is')
})
app.use('/user/:username',(req, res, next) => {
  let user = req.params.username
  switch(user) {
    case 'kiran':
    case 'tushar':
    case 'rujan':
      next();
      break;
    default:
      res.send(`${user} this user is not Authorised`);
  }

})

app.get('/user/:username', (req, res) => {
  let user = req.params.username
  res.send(`Hello ${user}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})