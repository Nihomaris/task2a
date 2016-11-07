const express = require('express');
const cors =require('cors');

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  const result = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(result+"");
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
