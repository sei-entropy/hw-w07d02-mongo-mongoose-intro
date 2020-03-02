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


// Add the vampire data that we gave you

// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('added provided vampire data', vampires);
//   mongoose.connection.close();
// });

// Add some new vampire data
// const newVampire = [
//   {
//   name: 'Chocula',
//   hair_color: 'black',
//   eye_color: 'blue',
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ['cereal','marshmallows'],
//   location: 'Minneapolis, Minnesota, US',
//   gender: 'm',
//   victims: 2
// },{
//   name: 'Dra',
//   dob: new Date(937, 0, 24, 13, 0),
//   hair_color: 'brown',
//   eye_color: 'blue',
//   loves: ['fancy cloaks', 'handlebar   mustaches'],
//   location: 'Transylvania, Romania',
//   gender: 'm',
//   victims: 1238
// }
// ,{
//   name: 'Cula',
//   hair_color: 'black',
//   eye_color: 'blue',
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ['cereal','marshmallows'],
//   location: 'Minneapolis, Minnesota, US',
//   gender: 'f',
//   victims: 2
// },{
//   name: 'Dra',
//   dob: new Date(937, 0, 24, 13, 0),
//   hair_color: 'brown',
//   eye_color: 'blue',
//   loves: ['fancy cloaks', 'handlebar   mustaches'],
//   location: 'Transylvania, Romania',
//   gender: 'f',
//   victims: 1238
// }


// ]

  // Vampire.create(newVampire, (error, vampires) => {
  //   if (error) {
  //     //if there is an error console log it
  //     console.log(error);
  //   } else {
  //     // else show us the created tweet
  //     console.log(vampires);
  //   }
  //   // get control of terminal back
  //   // else just use control c
  //   db.close();
  // });

  //Find all the vampires that that are females
  
  // Vampire.find({ gender: 'f' }, (err, vampires) => {
  //   console.log(vampires);
  //   db.close();
  // });



  //have greater than 500 victims

// Vampire.find({ victims: { $gte: 500 } }, (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });



// have fewer than or equal to 150 victims

// Vampire.find({ victims: { $gte: 150 } }, (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });


//have a victim count is not equal to 210234

// Vampire.find({ victims: { $ne: 210234 } }, (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });





//have a key of 'title'

// Vampire.find({}, 'title', (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });


// do not have a key of 'victims'

// Vampire.find( { victims : null }, (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });

// have a title AND no victims

// Vampire.find(  {  $and : [ {title : { $ne: null } } , { victims : null } ] }, (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });


// have victims AND the victims they have are greater than 1000

// Vampire.find(  {  $and : [ {victims : { $gte: 500 } } , { victims : { $ne: null }  } ] }, (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });




//are from New York, New York, US or New Orleans, Louisiana, US

// Vampire.find(  { $or: [ { location: 'New Orleans, Louisiana, US '}, { location:'New York, New York, US' } ] }, (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });



// love brooding or being tragic

// Vampire.find(  { $or: [ { loves: 'brooding'}, { loves:'being tragic' } ] }, (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });



// have more than 1000 victims or love marshmallows

// Vampire.find(  { $or: [ { loves: 'marshmallows'}, { victims:{ $gte: 1000 }  } ] }, (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });


//have red hair or green eyes

// Vampire.find(  { $or: [ { hair_color: 'red'}, { eye_color: 'green'  } ] }, (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });


//love either frilly shirtsleeves or frilly collars

// Vampire.find(  { $or: [ { loves: 'frilly shirtsleeves' }, { loves: 'frilly collars' } ] }, (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });



// love brooding

// Vampire.find(   { loves: 'brooding' }, (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });



// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music

// Vampire.find(  { $or: [ { loves: 'appearing innocent' }, { loves: 'trickery' }, { loves: 'lurking in rotting mansions' } , { loves: 'R&B music' } ] }, (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });


// love fancy cloaks but not if they also love either top hats or virgin blood _ Hint-You will also have to use $nin _

// Vampire.find(  { loves: 'fancy cloaks' } , {$or : [ { loves: { $nin: 'virgin blood' } }, { loves: { $nin: 'top hats' }} , (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });


// love ribbons but do not have brown eyes

// Vampire.find( { loves: 'ribbons' }, { eye_color: { $nin: 'brown' }  }, (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });


// are not from Rome


// Vampire.find( { location: { $nin: 'Rome' }  }, (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });


// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]

// Vampire.find( { love: { $nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic, brooding'] }  }, (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });


//replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'

// Vampire.findOneAndUpdate(
//   { vampire: 'Eve' },
//   { vampire: true },
//   { new: true },
//   (err, vampires) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(vampires);
//     }
//     db.close();
//   }
// );


