/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require('mongoose');
const seedData = require('./models/seed_vampires.js');
const Vampire = require('./models/vampire.js');

// Configuration
const mongoURI = 'mongodb://localhost:27017/' + 'vampires';
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on('open', () => {
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



const cb = function (error, result) {
  if (error) {
    //if there is an error console log it
    console.log('EERR:', error);
  } else {
    // else show us the created tweet
    console.log('SUCC CREATE:', result);
  }
  // get control of terminal back
  // else just use control c
  db.close();
};

const vampire = [
  {
    name: 'aaa',
    title: 'aaa',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['cereal', 'marshmallows'],
    location: 'Minneapolis, Minnesota, US',
    gender: 'm',
    victims: 2
  },

  {
    name: 'bbb',
    title: 'bbb',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['cereal', 'marshmallows'],
    location: 'Minneapolis, Minnesota, US',
    gender: 'm',
    victims: 2
  },

  {
    name: 'ccc',
    title: 'ccc',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['cereal', 'marshmallows'],
    location: 'Minneapolis, Minnesota, US',
    gender: 'f',
    victims: 2000
  },
  {
    name: 'ddd',
    title: 'ddd',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['cereal', 'marshmallows'],
    location: 'Minneapolis, Minnesota, US',
    gender: 'f',
    victims: 2
  }
];

// Vampire.create(vampire, cb);


//Select by comparison
//1-  Find all the vampires that that are females:

//db.getCollection('vampires').find({gender:'f'})


// 2- have greater than 500 victims

// Vampire.find({ victims: { $gte: 500 } }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });


//3-have fewer than or equal to 150 victims

// Vampire.find({ victims: { $lt: 500 } }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });



//5- have a victim count is not equal to 210234

// Vampire.find({ victims: { $ne: 210234 } }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });


//5- have greater than 150 AND fewer than 500 victims

// Vampire.find({ victims: { $gt: 150, $lt: 500 } }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });



//============================================


//Select by exists or does not exist

//1-have a key of 'title'

// Vampire.find({ title: { $exists: true } }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });


//2- do not have a key of 'victims'
// Vampire.find({ victims: { $exists: false } }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });

//3- have a title AND no victims
// Vampire.find({ victims: { $exists: false }, title: { $exists: true } }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });


//4-have victims AND the victims they have are greater than 1000
// Vampire.find({ victims: { $exists: true, $gt: 1000 } }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });


//=============================================

//Select with OR

//-1 are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find({ $or: [{ location: 'New York, New York, US' }, { location: 'New Orleans, Louisiana, US' }] }
//   , (err, vampire) => {
//     console.log(vampire);
//     db.close();
//   });


//2- love brooding or being tragic
// Vampire.find({$or:[ loves: { $in: ['brooding'] } , { $in: ['being tragic'] } ] }
//   , (err, vampire) => {
//     console.log(vampire);
//     db.close();
//   });

//3-have more than 1000 victims or love marshmallows
// Vampire.find({ $or: [{ victims: { $gt: 1000 } }, { loves: { $in: ['marshmallows'] } }] }
//   , (err, vampire) => {
//     console.log(vampire);
//     db.close();
//   });

//4- have red hair or green eyes
// Vampire.find({ $or: [{ hair_color: 'red' }, { eye_color: 'green' }] }
//   , (err, vampire) => {
//     console.log(vampire);
//     db.close();
//   });

//Select objects that match one of several values

//1- love either frilly shirtsleeves or frilly collars 

// Vampire.find({ $or: [{ Love: 'frilly shirtsleeves' }, { Love: 'frilly collars' }] }
//   , (err, vampire) => {
//     console.log(vampire);
//     db.close();
//   });


//2- love brooding
// Vampire.find({ loves: 'brooding' }
//   , (err, vampire) => {
//     console.log(vampire);
//     db.close();
//   });


//3- love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// Vampire.find({ $or: [{ loves: { $in: ['appearing innocent'] } }, { loves: { $in: ['trickery'] } }, { loves: { $in: ['lurking in rotting mansions'] } }, { loves: { $in: ['R&B music'] } }] }
//   , (err, vampire) => {
//     console.log(vampire);
//     db.close();
//   });

//4- love fancy cloaks but not if they also love either top hats or virgin blood _ Hint-You will also have to use $nin _
// Vampire.find({ $and: [{ loves: { $in: ['fancy cloaks'] } }, { loves: { $nin: ['top hats', 'virgin blood'] } }] }
//   , (err, vampire) => {
//     console.log(vampire);
//     db.close();
//   });

//===================================================

//Negative Selection

//1- love ribbons but do not have brown eyes

// Vampire.find({ $and: [{ loves: { $in: ['ribbons'] } }, { eye_color: { $nin: ['brown'] } }] }
//   , (err, vampire) => {
//     console.log(vampire);
//     db.close();
//   });

//2-are not from Rome
// Vampire.find({ location: { $nin: ['Rome'] } }
//   , (err, vampire) => {
//     console.log(vampire);
//     db.close();
//   });


//3- do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find({ $or: [{ loves: { $nin: ['fancy cloaks'] } }, { loves: { $nin: ['frilly shirtsleeves'] } }, { loves: { $nin: ['appearing innocent'] } }, { loves: { $nin: ['being tragic'] } }, { loves: { $nin: ['brooding'] } }] }
//   , (err, vampire) => {
//     console.log(vampire);
//     db.close();
//   });


//4- have not killed more than 200 people
// Vampire.find({ victims: { $not: { $gt: 200 } } }
//   , (err, vampire) => {
//     console.log(vampire);
//     db.close();
//   });


//===============================================

//Replace

//-1 replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
