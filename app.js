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




// const vamas = [{
//   name: 'mohammed',
//   title: 'Count',
//   hair_color: 'brown',
//   eye_color: 'brown',
//   dob: new Date(2020, 2, 13, 4, 10),
//   loves: ['cereal', 'marshmallows'],
//   location: 'saudi, riyadh, ar',
//   gender: 'm',
//   victims: 2
// },
// {
//   name: 'ali',
//   title: 'Count',
//   hair_color: 'red',
//   eye_color: 'red',
//   dob: new Date(2020, 2, 13, 4, 10),
//   loves: ['icecream', 'marshmallows'],
//   location: 'saudi, riyadh, ar',
//   gender: 'm',
//   victims: 100
// },{
//   name: 'sara',
//   title: 'kill',
//   hair_color: 'blue',
//   eye_color: 'brown',
//   dob: new Date(2020, 2, 13, 4, 10),
//   loves: ['cereal', 'no'],
//   location: 'saudi, riyadh, ar',
//   gender: 'f',
//   victims: 20
// },{
//   name: 'al',
//   title: 'kill',
//   hair_color: 'black',
//   eye_color: 'black',
//   dob: new Date(2020, 2, 13, 4, 10),
//   loves: ['cereal', 'marshmallows'],
//   location: 'saudi, riyadh, ar',
//   gender: 'f',
//   victims: 10
// }



// ];
// Vampire.insertMany(vamas, (error, Vampire) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(Vampire);
//   }
//   db.close();
// });

//find all female
// Vampire.find({gender:'f'}, (err, Vampire) => {
//   console.log(Vampire);
//   db.close();
// });

// find all victims more 500 
// Vampire.find({ victims: { $gte: 500 } }, (err, Vampire) => {
//   console.log(Vampire);
//   db.close();
// });

//find all victims less 150 

// Vampire.find({ victims: { $lte: 150 } }, (err, Vampire) => {
//     console.log(Vampire);
//     db.close();
//   });

//victim count is not equal to 210234

// Vampire.find({ victims: { $ne: 210234 } }, (err, Vampire) => {
//     console.log(Vampire);
//     db.close();
//   });

  // Vampire.find( { $and: [ { victims: { $gte: 150 } }, { victims: { $lte: 500 } } ] }, (err, Vampire) => {
  //   console.log(Vampire);
  //   db.close();
  // });

  // Vampire.find( {title: { $exists: true }}, (err, Vampire) => {
  //   console.log(Vampire);
  //   db.close();
  // });

  // Vampire.find( {victims: { $exists: false }}, (err, Vampire) => {
  //   console.log(Vampire);
  //   db.close();
  // });

  //have title and no victims
  // Vampire.find( { $and: [ {victims: { $exists: false }}, {title: { $exists: true }} ] }, (err, Vampire) => {
  //     console.log(Vampire);
  //     db.close();
  //   });

  //have victims and more 1000
    // Vampire.find( { $and: [ {victims: { $exists: true }}, { victims: { $gte: 1000 } } ] }, (err, Vampire) => {
    //   console.log(Vampire);
    //   db.close();
    // });



   //from New York, New York 
    // Vampire.find( { $or: [ { location: "New York, New York, US" }, { location: 'New Orleans, Louisiana, US' } ] }, (err, Vampire) => {
    //   console.log(Vampire);
    //   db.close();
    // });

    //ve brooding or being tragic
    // Vampire.find( { $or: [ { loves: "love brooding" }, { loves: 'being tragic' } ] }, (err, Vampire) => {
    //   console.log(Vampire);
    //   db.close();
    // });

    // Vampire.find( { $or: [ { victims: { $gte: 1000 } }, { loves: 'marshmallows' } ] }, (err, Vampire) => {
    //   console.log(Vampire);
    //   db.close();
    // });


  // have red hair or green eyes
  // Vampire.find( { $or: [ { eye_color: "green" }, { hair_color: 'red' } ] }, (err, Vampire) => {
  //     console.log(Vampire);
  //     db.close();
  //   });

  // Vampire.find( { $or: [ { loves: "frilly shirtsleeves" }, { loves: 'frilly collars' } ] }, (err, Vampire) => {
  //       console.log(Vampire);
  //       db.close();
  //     });

  //replace the vampire called 'Claudia' 
  // Vampire.findOneAndUpdate(
  //   { name: 'Claudia' },
  //   { name: "Eve" },
  //   {portrayed_by: "Tilda Swinton" },
  //   (err, tweet) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log(tweet);
  //     }
  //     db.close();
  //   }
  // );




  // all delete 

  // Remove a single document wherein the hair_color is 'brown'
  // Vampire.findOneAndRemove({ hair_color: 'brown' }, (err, Vampire) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('This is the deleted tweet:', Vampire);
  //   }
  //   db.close();
  // });
  // vampires with the blue eyes
  // Vampire.remove({ eye_color: 'blue' }, (err, Vampire) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('This is the deleted tweet:', Vampire);
  //   }
  //   db.close();
  // });