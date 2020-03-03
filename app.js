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
// Add the vampire data that we gave you
// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('added provided vampire data', vampires);
//   mongoose.connection.close();
// });

//Add some new vampire data
//Using the create method, create 4 new vampires with any qualities that you like two should be male and two should be female.
// const newvampireData = {
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
// Vampire.create(newvampireData, (error, tweet) => {
//   if (error) {
//     //if there is an error console log it
//     console.log(error);
//   } else {
//     // else show us the created tweet
//     console.log(tweet);
//   }
//   // get control of terminal back
//   // else just use control c
//   db.close();
// });
//**********************************************************************
// Querying
//Select by comparison
// Find all the vampires that that are females
// Vampire.find({ victims: 'f' },(err, vampire) => {
//   console.log(vampire);
//   db.close();
// });
// have greater than 500 victims
// Vampire.find({ victims: { $gte: 500 } }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });
// have fewer than or equal to 150 victims
// Vampire.find({ victims: { $lte: 150 } }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });
// have a victim count is not equal to 210234
// Vampire.find({ victims: { $ne: 210234 } }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });
// have greater than 150 AND fewer than 500 victims
// Vampire.find({ victims: { $gte: 150, $lte: 500, } }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });
//Select by exists or does not exist
// have a key of 'title'
// Vampire.find({ title: { $exists: true } }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });
// do not have a key of 'victims'
// Vampire.find({{victims: {$exists: false}}, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });
// have a title AND no victims
// Vampire.find({{title: {$exists: false}, victims: {$exists: true}}, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });
// have victims AND the victims they have are greater than 1000
// Vampire.find({{victims: {$exists: true}, victims: {$gt: 1000}}, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });
// Select with OR
// are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find({$or: [{location: 'New York, New York, US'}, {location: 'New Orleans, Louisiana, US'}]}, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// }); 
// love brooding or being tragic
// select those that love brooding or being tragic
// Vampire.find({$or: [{loves: 'brooding'}, {loves: 'being tragic'}]}, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// }); 
// have more than 1000 victims or love marshmallows
// Vampire.find({$or: [{victims: {$gt: 1000}}, {loves: 'marshmallows'}]}, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// }); 
// have red hair or green eyes
// select those that are from New York, New York, US or New Orleans, Louisiana, US
// select those that have more than 1000 victims or love marshmallows
// Vampire.find({$or: [{victims: {$gt: 1000}}, {loves: 'marshmallows'}]}, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// }); 
// select those that have red hair or green eyes
// Vampire.find({ $or: [{ hair_color: 'red' }, { eye_color: 'green' }] }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// }); 

// ### Select objects that match one of several values
// Select all the vampires that:
// 1. love either frilly shirtsleeves or frilly collars
// Vampire.find({ $or: [{ loves: 'frilly shirtsleeves' }, { loves: 'frilly collars' }] }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });
// 2. love brooding
// Vampire.find({ loves: 'brooding' }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });
// 3. love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R & B music
// Vampire.find({ $or: [{ loves: 'appearing innocent', loves: 'trickery', loves: 'lurking in rotting mansions', loves: 'R&B music', }] }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });
// 4. love fancy cloaks but not if they also love either top hats or virgin blood _ Hint - You will also have to use \$nin _
// Vampire.find({ loves: 'fancy cloaks' }, { $nin: 'top hats', $nin: 'virgin blood' }, (err, found) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(found);
//   }
// });

// ### Negative Selection
// Select all vampires that:
// 1. love ribbons but do not have brown eyes
// Vampire.find({ loves: 'ribbons' }, { eye_color: { $ne: 'brown' } }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });
// 2. are not from Rome
// Vampire.find( location: { $ne: 'Rome' } }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });
// 3. do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find({ love: { $ne: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding] } }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });
// 4. have not killed more than 200 people
// Vampire.find( { victims: { $ne: 200 } }, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// });
// Vampire.find({$$ne: [{victims: {$gt: 200}}]}, (err, vampire) => {
//   console.log(vampire);
//   db.close();
// }); 

// ## Replace
// 1. replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
// 2. replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'

// ## Update
// 1. Update 'Guy Man' to have a gender of 'f'
// 2. Update 'Eve' to have a gender of 'm'
// 3. Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
// 4. Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
// 5. Rename 'Eve's' name field to 'moniker'
// 6. We now no longer want to categorize female gender as "f", but rather as ** fems **.Update all females so that the they are of gender "fems".

// ## Remove
// 1. Remove a single document wherein the hair_color is 'brown'
// 2. We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.