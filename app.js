/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require('mongoose');
const seedData = require('./models/seed_vampires.js');
const Vampire = require('./models/vampire.js');

// Configuration
const mongoURI = 'mongodb://localhost:27017/'+ 'vampires';
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect( mongoURI );

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on( 'open' , ()=>{
  console.log('Connection made!');
});

var vampire = {
  name: 'Chocula',
  title: 'Count',
  hair_color: 'brown',
  eye_color: 'brown',
  dob: new Date(1971, 2, 13, 7, 47),
  loves: ['cereal', 'marshmallows'],
  location: 'Minneapolis, Minnesota, US',
  gender: 'm',
  victims: 2
};
/*
Vampire.find({ gender: 'f' }, (err, vampire) => {
  console.log(vampire);
  db.close();
});
*/

/*

Vampire.find({ victims: { $gte: 500 } }, (err, vampire) => {
  console.log(vampire);
  db.close();
});

*/

/*
Vampire.find({ victims: { $lte: 150 } }, (err, vampire) => {
  console.log(vampire);
  db.close();
});
*/
/*
Vampire.find({ victims: { $ne: 210234  } }, (err, vampire) => {
  console.log(vampire);
  db.close();

});
*/

/*
Vampire.find((err, vampires) => {
  
     console.log(vampires);

 
 });
*/

/*

Vampire.find({title:{$exists:true}}, (err, vampires) => {
  console.log(vampires);
  db.close();
});
*/
/*
Vampire.find({victims:{$exists:false}}, (err, vampires) => {
  console.log(vampires);
  db.close();
});
*/
/*
Vampire.find({victims:{$exists:false},title:{$exists:true}} , (err, vampires) => {
  console.log(vampires);
  db.close();
});
*/

/*

Vampire.find({victims:{$exists:true},victims: { $gt: 1000 }}, (err, vampires) => {
  console.log(vampires);
  db.close();
});
*/

/*
Vampire.find({$or:[{location:'New York, New York, US'},{location:'New Orleans, Louisiana, US'}]}, (err, vampires) => {
  console.log(vampires);
  db.close();
});
*/

/*
Vampire.find({$or:[{loves:'brooding'},{loves:'being tragic'}]}, (err, vampires) => {
  console.log(vampires);
  db.close();
});
*/
/*

Vampire.find({loves:{$nin:['frilly shirtsleeves','frilly collars']}}, (err, vampires) => {
  console.log(vampires);
  db.close();

})
*/

/*
Vampire.findByIdAndUpdate(
  { name: 'Eve' },
  { portrayed_by: 'Tilda Swinton' },
  (err, vampires) => {
    if (err) {
      console.log(err);
    } else {
      console.log(vampires);
    }
    db.close();
  }
);
*/

/**********************************************************************
Write Your Code Below
**********************************************************************/
