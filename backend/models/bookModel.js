const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Please add text value']

  }
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Book', bookSchema)