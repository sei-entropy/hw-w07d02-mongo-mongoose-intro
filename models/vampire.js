const mongoose = require('mongoose');
const Schema = mongoose.Schema;

  // add your code here to set up your schema
  const vampireSchema = new Schema(
    {
      name: { type: String, required: true },
      title: String,
      hair_color: { type: String, default: 'blonde'},
      eye_color: String,
      dob: Date,
      loves: [],
      location: String,
      gender: String,
      victims: { type: Number, min: 0}
    },
    { timestamps: true }
  );
const Vampire = mongoose.model('Vampire', vampireSchema);

//make this exportable to be accessed in `app.js`
module.exports = Vampire;
