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
// var vampire = {
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

// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('added provided vampire data', vampires);
//   mongoose.connection.close();
// });


// const create4Vampire=[{
//   name: 'wejdan',
//   hair_color: 'brown',
//   eye_color: 'brown',
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ['none','no'],
//   location: 'here, here, US',
//   gender: 'm',
//   victims: 2
// },{
//   name: 'jaan',
//   dob: new Date(937, 0, 24, 13, 0),
//   hair_color: 'brown',
//   eye_color: 'blue',
//   loves: [' Ryder', 'top hats', 'fancy ', '   mustaches'],
//   location: 'Transylvania, Romania',
//   gender: 'm',
//   victims: 1238
// },{
//   name: 'saud ',
//   dob: new Date(1560, 8, 7, 22, 10),
//   hair_color: 'brown',
//   eye_color: 'brown',
//   loves: ['her', 'her','frilly collars'],
//   location: 'Nyírbátor, Hungary',
//   gender: 'f',
//   victims: 980
// },{
//   name: 'sau',
//   dob: new Date(1760, 11, 9, 18, 44),
//   hair_color: 'blonde',
//   eye_color: 'blue',
//   loves: ['frilly shirtsleeves', 'frilly collars', 'lurking in   rotting mansions', 'Louis'],
//   location: 'Auvergne, France',
//   gender: 'f',
//   victims: 324

// }]


// Vampire.insertMany(create4Vampire, (error, vampires) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(vampires);
//   }
//   db.close();
// });

//Select by comparison :

// Vampire.find({ gender: 'f' }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// });


// Vampire.find({ victims: { $gte: 500 } }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// });

// Vampire.find({ victims: { $lte: 150 } }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// });


// Vampire.find({ victims: { $ne: 210234 } }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// });

// Vampire.find({ victims:  {$gte: 150 , $lte: 500 } }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// });

//Select by exists or does not exist

