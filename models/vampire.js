const mongoose = require('mongoose');
const Schema = mongoose.Schema;

  // add your code here to set up your schema

  const vampireSchema = new Schema({
      name: String,
      title: String,
      hair_color: String,
      eye_color: String,
      dob: Date,
      loves: [],
      location: String,
      gender: String,
      victims: Number
    },
    { timestamps: true }
  );
//   var vampire = {
//   name: 'Chocula',
//   title: 'Count',
//   hair_color: 'brown',
//   eye_color: 'brown',
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ['cereal', 'marshmallows'],
//   location: 'Minneapolis, Minnesota, US',
//   gender: 'm',
//   victims: 2
// };

const Vampire = mongoose.model('Vampire', vampireSchema);

//make this exportable to be accessed in `app.js`
module.exports = Vampire;
