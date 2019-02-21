const express = require('express');
const morgan = require('morgan');
const path = require('path')
const databae = require('./database')

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }))

const public = __dirname + '/public';

databae.sync;

app.use(express.static(path.join(public)));
console.log(__dirname);
app.use((req, res, next) => {
  console.log("hellooooooooooooo");
  next();
});

app.get('/', (req, res, next) => {
  console.log("hello");
  res.sendFile(path.join(public + '/index.html'))
})

app.post('/', async (req, res, next) => {
  console.log("da body: ", req.body);
  try {
    const userInfo = req.body;
    const user = await databae.User.create({
      name: userInfo.name,
      age: userInfo.age,
      pictureURL: userInfo.pictureURL
    })
    console.log("poop");

    console.log(user);
    console.log('helloooooo');

  } catch (error) {
    console.log("Error: ", error);
    throw new Error(error);
  }
})

app.listen(3000, () => console.log("listen Linda Listennnnnnnnnn"))