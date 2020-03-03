const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vampireSchema = new Schema(
  //Build a vampire schema and model that matches the object above inside the models/vampires.js file
  {
    //The name field is required, so make sure that the schema accommodates for that.
    name: { type: String, required: true },
    title: String,
    //Lastly, set the default value of the hair color to blonde.
    hair_color: { type: String, default: 'blonde' },
    eye_color: String,
    dob: Date,
    loves: [],
    location: String,
    gender: String,
    //Also, no vampire will have less than 0 victims, so add that into the schema as a validation.
    victims: { type: Number, min: 0 },
  },
  { timestamps: true }
);
const Vampire = mongoose.model('Vampire', vampireSchema);

//make this exportable to be accessed in `app.js`
module.exports = Vampire;
