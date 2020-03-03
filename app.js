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
//   if (err){ console.log(err)}
//     console.log("added provided vampire data", vampires)
//     mongoose.connection.close();
//   });


const vampOne = {
  name: 'Vamp',
  hair_color: 'Black',
  eye_color:'Green',
  dob: new Date(1951, 2, 13, 7, 47),
  loves: ['Knives', 'Jack'],
  location: 'New York, new york',
  gender: 'm',
  victims: 200
}

const vampTwo = {
  name: 'vampritte',
  eye_color:'Green',
  dob: new Date(1990, 2, 13, 7, 47),
  loves: ['chocolate'],
  location: 'Transelvania, USA',
  gender: 'f',
  victims: 20
}

const vampThree = {
  name: 'edward',
  eye_color:'red',
  hair_color: 'Hot Pink',
  dob: new Date(2000, 2, 13, 7, 47),
  loves: ['Warewolves'],
  location: 'Miami, Florida',
  gender: 'Glowing',
  victims: 2
}

const vampFour = {
  name: 'Dracullette',
  eye_color:'brown',
  hair_color: 'red',
  dob: new Date(1000, 2, 13, 7, 47),
  loves: ['Whips'],
  location: 'Moscow, Russia',
  gender: 'f',
  victims: 500
}

const vampFive = {
  name: 'Taric',
  hair_color: 'grey',
  eye_color:'blue',
  dob: new Date(1650, 2, 13, 7, 47),
  loves: ['Relic stacks', 'kill steals'],
  location: 'Mount Targon, Runeterra',
  gender: 'm',
  victims: 9999
}

// Vampire.create(vampOne, (error, vampire) => {
//     if(error){
//         console.log(error);
//     } else {
//         console.log(vampire);
//     }
//     db.close()
// })

// Vampire.create(vampTwo, (error, vampire) => {
//   if(error){
//       console.log(error);
//   } else {
//       console.log(vampire);
//   }
//   db.close()
// })

// Vampire.create(vampThree, (error, vampire) => {
//   if(error){
//       console.log(error);
//   } else {
//       console.log(vampire);
//   }
//   db.close()
// })

// Vampire.create(vampFour, (error, vampire) => {
//   if(error){
//       console.log(error);
//   } else {
//       console.log(vampire);
//   }
//   db.close()
// })


// Vampire.create(vampFive, (error, vampire) => {
//   if(error){
//       console.log(error);
//   } else {
//       console.log(vampire);
//   }
//   db.close()
// })

// Find all the vampires that that are females
// Vampire.find({gender: 'f'}, (err, vampire) => {
//     console.log(vampire);
//     db.close() 
// })


// have greater than 500 victims
// Vampire.find({victims: {$gte: 500}}, (err, vampire) => {
//     console.log(vampire);
//     db.close() 
// })

// have fewer than or equal to 150 victims
// Vampire.find({victims: {$lte: 150}}, (err, vampire) => {
//     console.log(vampire);
//     db.close() 
// })

// have a victim count is not equal to 210234
// Vampire.find({victims: {$ne: 210234}}, (err, vampire) => {
//     console.log(vampire);
//     db.close() 
// })

// have greater than 150 AND fewer than 500 victims
// Vampire.find({victims: {$ne: 210234}}, (err, vampire) => {
//     console.log(vampire);
//     db.close() 
// })


// have greater than 150 AND fewer than 500 victims
// Vampire.find({$and: [ { victims: { $gt: 150, $lt: 500 } }  ]}, (err, vampire) => {
//     console.log(vampire);
//     db.close() 
// })

// ************ select by exists or does not exist ******
// have a key of 'title'
// Vampire.find({title: {$exists: true}}, (err, vampire) => {
//       console.log(vampire);
//       db.close() 
//   })


// do not have a key of 'victims'
// Vampire.find({victims: {$exists: false}}, (err, vampire) => {
//       console.log(vampire);
//       db.close() 
//   })


// have a title AND no victims
// Vampire.find({ $and: [ { victims: { $exists: false } }, { title: { $exists: false } } ] } , (err, vampire) => {
//       console.log(vampire);
//       db.close() 
//   })

// have victims AND the victims they have are greater than 1000
// Vampire.find({ $and: [ { victims: { $exists: true } }, { victims: { $gte: 1000 } } ] } , (err, vampire) => {
//       console.log(vampire);
//       db.close() 
//   })


// ******* Select with OR ******
// are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find({$or: [{location: 'New York, New York, US'}, {location: 'New Orleans, Louisiana, US'} ] } , (err, vampire) => {
//       console.log(vampire);
//       db.close() 
//   })

// love brooding or being tragic
// Vampire.find({$or: [{loves: 'brooding'}, {loves: 'being tragic'} ] } , (err, vampire) => {
//         console.log(vampire);
//         db.close() 
// })


// have red hair or green eyes
// Vampire.find({$or: [{eye_color: 'green'}, {hair_color: 'red'} ] } , (err, vampire) => {
//     console.log(vampire);
//     db.close() 
// })


// Select objects that match one of several values
// love either frilly shirtsleeves or frilly collars
// Vampire.find({loves: {$in: ['frilly shirtsleeves', 'frilly collars']} } , (err, vampire) => {
//     console.log(vampire);
//     db.close() 
// })


// love brooding
// Vampire.find({loves: {$in: ['brooding']} } , (err, vampire) => {
//     console.log(vampire);
//     db.close() 
// })

// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// Vampire.find({loves: {$in: ['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music']} } , (err, vampire) => {
//     console.log(vampire);
//     db.close() 
// })

// love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
// Vampire.find ( {loves: {$in: ['fancy cloaks'], $nin: ['top hat','virgin blood']} } , (err, vampire) => {
//     console.log(vampire);
//     db.close() 
// })

// **** negative selection ****
// love ribbons but do not have brown eyes
Vampire.find({$nor:[{likes:'ribbons'}, {eye_color:{$not: 'brown eyes'}}]}, (err, vampire) => {
    console.log(vampire);
    db.close() 
})