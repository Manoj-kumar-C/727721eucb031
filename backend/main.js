const express = require('express')

const app = express();

const cors = require('cors');
const router = require('./routes/router.js'); // Ensure the path is correct
const bodyparser = require('body-parser')
const axios = require('axios');
const bodyParser = require('body-parser');
const all = require('./config/allproducts.json')

app.use(bodyparser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json())
/*
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4MzUwNDIzLCJpYXQiOjE3MTgzNTAxMjMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImY3ZjllYmM2LTBhYjEtNGI1ZC05ODdlLWM4Y2ZjOWZiYzE5YSIsInN1YiI6IjcyNzcyMWV1Y2IwMzFAc2tjZXQuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6ImY3ZjllYmM2LTBhYjEtNGI1ZC05ODdlLWM4Y2ZjOWZiYzE5YSIsImNsaWVudFNlY3JldCI6IkNYZFpoeWZNR1dHZFJIdk0iLCJvd25lck5hbWUiOiJNYW5vamt1bWFyIiwib3duZXJFbWFpbCI6IjcyNzcyMWV1Y2IwMzFAc2tjZXQuYWMuaW4iLCJyb2xsTm8iOiI3Mjc3MjFldWNiMDMxIn0.weUBEGBa1PNWWLYQwz9c856wo2P-IR_ox_vsOIEhRnU';

const api = axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=1000', {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});

*/

app.get('/categories', (req,res)=>{
    res.send(all)
})
app.get('/', router)

app.listen(5000, ()=>{
    console.log("Listening at the Port 5000");
})