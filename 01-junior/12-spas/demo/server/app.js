const express = require('express');
const path = require('path');


const app = express();

const backstreetBoys = ['AJ', 'Brian', 'Chris', 'Nick', 'Howie'];

app.use(express.static(path.join(__dirname, '../public')));

app.get('/backstreet', (req, res, next) => {
	res.json({backstreetBoys})
})

app.listen(3000, () => {
  console.log('I am listening!');
})