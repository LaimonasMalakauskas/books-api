const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const methodOverride = require('method-override')
const path = require('path')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../frontend/views'))

app.use(express.static(path.join(__dirname, '../public')))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/books', require('./routes/bookRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))