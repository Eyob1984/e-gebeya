const express = require('express')
const product = require('./data/product')

const app = express()


app.get('/', (req, res) => {
  res.send('api is running ...')
})

app.get('/api/products', (req, res) => {
  res.json(product)
})

app.get('/api/products/:id', (req, res) => {
  const singleProduct = product.find((p) => p._id === req.params.id)
  res.json(singleProduct)
})

app.listen(5000, console.log('server running on port '))