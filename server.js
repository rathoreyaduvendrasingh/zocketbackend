const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoutes = require('./product/product.route')
const campaignRoutes = require('./campaign/campaign.route')
const cors = require('cors');
const path = require('path');
dotenv.config();
const app = express()
app.use(express.json())
app.use(cors());
app.use('/api/products', productRoutes)
app.use('/api/campaigns', campaignRoutes)

if (process.env.MODE === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
 }
 
 const PORT = process.env.PORT || 5000
__dirname = path.resolve()

const startServer = async () =>{
    await mongoose.connect(process.env.MONGO_URL,{});
    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}`)
    })
}
startServer();



