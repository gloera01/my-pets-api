const { Schema } = require('mongoose');

const Pet = new Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  type: { type: String, required: true },
});

module.exports = Pet;
