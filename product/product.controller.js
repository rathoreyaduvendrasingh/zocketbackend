const Product = require('../models/product.model');


const getProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    res.json(products)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
}


const createProduct = async (req, res) => {
  try {
    const product = new Product({
      name: req.name,
      amount: req.amount,
      img: {},
    })

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
}

module.exports = { getProducts, createProduct }