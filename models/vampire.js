const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vampireSchema = new Schema({
  // add your code here to set up your schema
    name: String,
    title: String,
    hair_color: String,
    eye_color: String,
    dob: Date,
    loves: [],
    location: String,
    gender: String,
    victims: Number

});

const Vampire = mongoose.model('Vampire', vampireSchema);

//make this exportable to be accessed in `app.js`
module.exports = Vampire;
