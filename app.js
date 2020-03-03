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
// //   if (err) {
// //     console.log(err);
// //   }
// //   console.log('added provided vampire data', vampires);
// //   mongoose.connection.close();
// // });
//
// Vampire.create({
//   name: 'Vampire 1',
//   dob: new Date(937, 0, 24, 13, 0),
//   hair_color: 'brown',
//   eye_color: 'blue',
//   loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar   mustaches'],
//   location: 'Transylvania, Romania',
//   gender: 'm',
//   victims: 1238
// }, function(error, vampire) {
//   console.log(vampire);
// });
//
// Vampire.create({
//   name: 'Vampire 2',
//   dob: new Date(937, 0, 24, 13, 0),
//   hair_color: 'brown',
//   eye_color: 'blue',
//   loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar   mustaches'],
//   location: 'Transylvania, Romania',
//   gender: 'm',
//   victims: 1238
// }, function(error, vampire) {
//   console.log(vampire);
// });
//
// Vampire.create({
//   name: 'Vampire 3',
//   dob: new Date(937, 0, 24, 13, 0),
//   hair_color: 'brown',
//   eye_color: 'blue',
//   loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar   mustaches'],
//   location: 'Transylvania, Romania',
//   gender: 'f',
//   victims: 1238
// }, function(error, vampire) {
//   console.log(vampire);
// });
//
// Vampire.create({
//   name: 'Vampire 4',
//   dob: new Date(937, 0, 24, 13, 0),
//   hair_color: 'brown',
//   eye_color: 'blue',
//   loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar   mustaches'],
//   location: 'Transylvania, Romania',
//   gender: 'f',
//   victims: 1238
// }, function(error, vampire) {
//   console.log(vampire);
// });


/**
 * Select by comparison
 * */
Vampire.find({gender: 'f'}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});

Vampire.find({victims: {$gt: 500}}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});

Vampire.find({victims: {$lte: 150}}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});

Vampire.find({victims: {$ne: 210234}}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});


Vampire.find({$and: [{victims: {$gt: 150}}, {victims: {$lt: 500}}]}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});

/**
 * Select by exists or does not exist
 * */
Vampire.find({title: {$exists: true}}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});

Vampire.find({victims: {$exists: false}}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});

Vampire.find({title: {$exists: true}, victims: {$exists: false}}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});

Vampire.find({$and: [{victims: {$gt: 1000}}, {victims: {$exists: true}}]}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});

/**
 * Select with OR
 * */

Vampire.find({$or: [{location: 'New York, New York, US'}, {location: 'New Orleans, Louisiana, US'}]}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});

Vampire.find({$or: [{loves: {$in: ['brooding']}}, {loves: {$in: ['being tragic']}}]}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});

Vampire.find({$or: [{victims: {$gt: 1000}}, {loves: {$in: ['marshmallows']}}]}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});

Vampire.find({$or: [{hair_color: 'red'}, {eye_color: 'green eyes'}]}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});

/**
 * Select objects that match one of several values
 * */

Vampire.find({$or: [{loves: {$in: ['frilly shirtsleeves']}}, {loves: {$in: ['frilly collars']}}]}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});

Vampire.find({loves: {$in: ['brooding']}}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});

Vampire.find({loves: {$in: ['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music']}}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});

Vampire.find({$and: [{loves: {$in: ['fancy cloaks']}}, {$or: [{loves: {$nin: ['top hats']}}, {loves: {$nin: ['virgin blood']}}]}]}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});

/**
 * Negative Selection
 * */

Vampire.find({$and: [{loves: {$in: ['ribbons']}}, {eye_color: {$ne: 'brown'}}, {loves: {$nin: ['virgin blood']}}]}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});

Vampire.find({'location': {$ne: 'rome'}}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});

Vampire.find({'loves': {$nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});

Vampire.find({victims: {$lt: 200}}, (error, vampires) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampires);
  }
});


/**
 * Replace
 * */

Vampire.update({name: 'Claudia'}, {name: 'Eve', portrayed_by: 'Tilda Swinton'}, {new: true}, (error, vampire) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampire);
  }
});

Vampire.findOneAndUpdate({gender: 'm'}, {name: 'Guy Man', is_actually: 'were-lizard'}, {new: true}, (error, vampire) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampire);
  }
});

/**
 * Update
 * */

Vampire.update({name: 'Guy Man'}, {$set: {gender: 'f'}}, {new: true}, (error, vampire) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampire);
  }
});

Vampire.update({name: 'Eve'}, {$set: {gender: 'm'}}, {new: true}, (error, vampire) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampire);
  }
});

Vampire.update({name: 'Guy Man'}, {$set: {hates: ['clothes', 'jobs']}}, {new: true}, (error, vampire) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampire);
  }
});

Vampire.update({name: 'Guy Man'}, {$set: {hates: ['clothes', 'jobs', 'alarm clocks', 'jackalopes']}}, {new: true}, (error, vampire) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampire);
  }
});

Vampire.update({name: 'Eve'}, {$set: {name: 'moniker'}}, {new: true}, (error, vampire) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampire);
  }
});

Vampire.update({gender: 'f'}, {$set: {gender: 'fems'}}, {new: true}, (error, vampire) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampire);
  }
});

Vampire.findOneAndRemove({hair_color: 'brown'}, (error, vampire) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampire);
  }
});

Vampire.remove({eye_color: 'blue'}, (error, vampire) => {
  if(error) {
    console.log(error);
  } else {
    console.log(vampire);
  }
});