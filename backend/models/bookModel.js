const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add name']

  }, 
  author: {
    type: String, 
    required: [true, 'Please add author']
  },
  title: {
    type: String, 
    required: [true, 'Please add title']
  }, 
  price: {
    type: Number, 
    required: [true, 'Please add price'], 
    set: v => parseFloat(v).toFixed(2)
  }
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Book', bookSchema)