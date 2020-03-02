/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require('mongoose');
const seedData = require('./models/seed_vampires.js');
const Vampire = require('./models/vampire.js');

// Configuration
const mongoURI = 'mongodb://localhost:27017/vampires';
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('the connection with mongod is established');
  }
);

// Connection Error/Success
// Define callback functions for various events
db.on('error', err => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

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

//*****Select by comparison*****\\
// //1.Find all the vampires that that are females
// Vampire.find({ gender: 'f' }, (err, res) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(res)
//   };
//   db.close();
// })

// //2.have greater than 500 victims
// Vampire.find({ victims: { $gt: 500 } }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })

// //3.have fewer than or equal to 150 victims
// Vampire.find({ victims: { $lt: 150 } }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })

// //4.have a victim count is not equal to 210234
// Vampire.find({ victims: { $ne: 210234 } }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })

// //5.have greater than 150 AND fewer than 500 victims
// Vampire.find({
//   $and: [
//     { victims: { $gt: 150 } }, { victims: { $lt: 500 } }]
// }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })

//*****Select by exists or does not exist*****\\

// //1.have a key of 'title'
// Vampire.find({ title: { $exists: true } }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })


// //2.do not have a key of 'victims'
// Vampire.find({ victims: { $exists: false } }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })

// //3.have a title AND no victims
// Vampire.find({
//   $and: [
//     { title: { $exists: true } }, { victims: { $exists: false } }]
// }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })

// //4.have victims AND the victims they have are greater than 1000
// Vampire.find({
//   victims: { $gt: 1000 }
// }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })

//*****Select with OR*****\\

// //1.are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find({
//   $or: [{ location: 'New York, New York, US' }, { location: 'New Orleans, Louisiana, US' }]
// }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })


// //2.love brooding or being tragic
// Vampire.find({$or: [
// { loves: 'brooding' }, { loves: 'being tragic' }]},
// (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })

// //3.have more than 1000 victims or love marshmallows
// Vampire.find({
//   $or: [
//     { loves: 'marshmallows' }, { victims: { $gt: 1000 } }]
// },
//   (e, r) => {
//     if (e) { console.log(e) }
//     else { console.log(r) };
//     db.close();
//   })

// // 4.have red hair or green eyes
// Vampire.find({
//   $or: [
//     { hair_color: 'red' }, { eye_color: 'green' }]
// },
//   (e, r) => {
//     if (e) { console.log(e) }
//     else { console.log(r) };
//     db.close();
//   })

//*****Select objects that match one of several values*****\\

// //1.love either frilly shirtsleeves or frilly collars
// Vampire.find({
//   $or: [
//     { loves: 'frilly shirtsleeves' }, { loves: 'frilly collars' }]
// },
//   (e, r) => {
//     if (e) { console.log(e) }
//     else { console.log(r) };
//     db.close();
//   })

//2.love brooding
// Vampire.find({
//   loves: 'brooding'
// }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })

//3.love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// Vampire.find({
//   loves: { $in: ['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music'] }
// }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })

//4.love fancy cloaks but not if they also love either top hats or virgin blood _ Hint-You will also have to use $nin _
// Vampire.find({
//   $and: [{loves: 'fancy cloaks'},{loves: {$nin: ['top hats', 'virgin blood'] }}]},
//  (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })


//****Negative Selection****\\

// //1.love ribbons but do not have brown eyes
// Vampire.find({
//   $and: [{ loves: 'ribbons' }, { eye_color: { $ne: "brown" } }]
// },
//   (e, r) => {
//     if (e) { console.log(e) }
//     else { console.log(r) };
//     db.close();
//   })

// 2.are not from Rome
// Vampire.find({
//   location: /Rome/
// }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })

// //3.do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find({
//   loves: { $nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding'] }
// }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })

// //4.have not killed more than 200 people
// Vampire.find({
//   victims: {
//     $not: { $gt: 200 }
//   }
// },
//   (e, r) => {
//     if (e) { console.log(e) }
//     else { console.log(r) };
//     db.close();
//   })


//****Replace****\\

// //1.replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
// Vampire.findOneAndUpdate({
//   name: 'Claudia'
// }, {
//   $set: { name: 'Eve', portrayed_by: 'Tilda Swinton' }
// }, {
//   new: true,
//   strict: false,
// }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })


// //2.replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'
// Vampire.findOneAndUpdate({
//   gender: 'm'
// }, {
//   $set: { name: 'Guy Man', is_actually: 'were-lizard' }
// }, {
//   new: true,
//   strict: false,
// }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })

//****Update****\\

// //1.Update 'Guy Man' to have a gender of 'f'
// Vampire.findOneAndUpdate({
//   name: 'Guy Man'
// }, {
//   $set: { gender: 'f' }
// }, {
//   new: true,
//   strict: false,
// }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })

// //2.Update 'Eve' to have a gender of 'm'
// Vampire.findOneAndUpdate({
//   name: 'Eve'
// }, {
//   $set: { gender: 'm' }
// }, {
//   new: true,
//   strict: false,
// }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })

//3.Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
// Vampire.findOneAndUpdate({
//   name: 'Guy Man'
// }, {
//   $set: { hates: ['clothes', 'jobs'] }
// }, {
//   new: true,
//   strict: false,
// }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })


//4.Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
// Vampire.findOneAndUpdate({
//   name: 'Guy Man'
// }, {
//   $push: { hates: { $each: ['alarm clocks', 'jackalopes'] } }
// }, {
//   new: true,
//   strict: false,
// }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })

// //5.Rename 'Eve's' name field to 'moniker'
// Vampire.findOneAndUpdate({name: 'Eve'
// }, {
//   $rename: {
//     name: "moniker"
//   }
// }, {
//   new: true,
//   strict: false,
// }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })

//6.We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".
// Vampire.updateMany({
//   gender: 'f'
// }, { $set: { gender: 'fems' } }, {
//   new: true,
//   strict: false,
// }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })

//****Remove****\\

//1.Remove a single document wherein the hair_color is 'brown'
// Vampire.deleteOne({
//   hair_color: 'brown'
// }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })

// //2.We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
// Vampire.deleteMany({
//   eye_color: 'blue'
// }, (e, r) => {
//   if (e) { console.log(e) }
//   else { console.log(r) };
//   db.close();
// })



//**********Bonus**********\\\\\\\\\
// Person.find({ occupation: /host/ })
//   .where('name.last')
//   .equals('Ghost')
//   .where('age')
//   .gt(17)
//   .lt(66)
//   .where('likes')
//   .in(['vaporizing', 'talking'])
//   .limit(10)
//   .sort('-occupation')
//   .select('name occupation')
//   .exec(callback);

// find a person he's last name is 'Ghost',
// age greater than 17 
// and less than 66, 
// and likes 'vaporizing' or 'talkin'.
// Then limit the result to 10 only
// and sort them by occupation decending 
// and only include the 'name' and 'occupation' 
// fields in the results
