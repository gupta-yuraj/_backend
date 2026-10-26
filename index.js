require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');


});

app.get('/shinchan', (req, res)  =>  {
    res.send("HOIIIIIIIIIIIIIII")
})

app.get('/login',(req , res) => {
    res.send('<h1> login to the shinchan.com</h1>')

})

app.get('/shiru', (req, res) => {
  res.send('<h2> BURI BURI</h2>')

})

app.listen(process.env.PORT, () => {
  console.log(`Port is successfully running ${port}`);
});