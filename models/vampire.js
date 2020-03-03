const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vampireSchema = new Schema({
  name: {type: String, required: true },
  title: {type: String},
  eye_color: {type: String},
  hair_color: {type:String, default: 'blonde' },
  dob: {type: Date, default: Date.now},
  loves: [{type: String}],
  location: {type:String},
  gender: String,
  victims: {type: Number,  min: 0}
});

const Vampire = mongoose.model('Vampire', vampireSchema);

//make this exportable to be accessed in `app.js`
module.exports = Vampire;
