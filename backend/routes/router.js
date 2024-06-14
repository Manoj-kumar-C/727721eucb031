const express = require('express')

const router = express.Router()
router.use(express.json());
const axios = require('axios');

const productdata = require('./../config/data.json')
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



router.get('/api', (req, res) => {
    axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=1000', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error occurred');
    });
})

*/



router.get('/data', (req, res) => {
    res.send(productdata)
})

router.get('/', (req, res) => {
    res.send(productdata)
})




module.exports = router