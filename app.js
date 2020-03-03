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

/**********************************************************************
Write Your Code Below
**********************************************************************/
// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('added provided vampire data', vampires);
//   mongoose.connection.close();
// });

const myVampire = {
  name: 'theHappyOne',
  hair_color: 'yellow',
  eye_color: 'pinkish',
  loves: ['coffe', 'chocolate'],
  location: 'the moon',
  gender: 'f',
  victims: 0

};

Vampire.create(myVampire, (err, vampires) => {
  if (err) {
    console.log(err);
  }
  console.log('added provided vampire data', vampires);
  mongoose.connection.close();
})

Vampire.find({gender: 'f'}, (err, vampires) => {
    if (err) {
      console.log(err);}
    
    console.log(vampires);
    mongoose.connection.close();
});

Vampire.findOneAndRemove({hair_color: 'red'},(err, vampires) => {
  if (err) {
    console.log(err);}
  
  console.log(vampires);
  mongoose.connection.close();
});
Vampire.remove({eye_color: 'blue'},(err, vampires) => {
  if (err) {
    console.log(err);}
  
  console.log('there eyes are blue', vampires);
  mongoose.connection.close();
});
