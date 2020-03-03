//Set up and Configuration
//**********************************************************************/
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

// Insert the data 

// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('added provided vampire data', vampires);
//   mongoose.connection.close();
// });



// the females 

/*
Vampire.find({ gender: 'f' }, (err, Vampires) => {
  if (err) {
    console.log('********* ERROR *********');
    console.log(err);
  } else {
    console.log('Result : ', Vampires);
  }
  db.close();
});
*/



//Greater than 500 victims
/*
Vampire.find({ victims: {$gte: 500} }, (err, Vampires) => {
  if (err) {
    console.log('********* ERROR *********');
    console.log(err);
  } else {
    console.log('Result : ', Vampires);
  }
  db.close();
});
*/



// less than 150 victims 
/*
Vampire.find({ victims: {$lte: 150} }, (err, Vampires) => {
  if (err) {
    console.log('********* ERROR *********');
    console.log(err);
  } else {
    console.log('Result : ', Vampires);
  }
  db.close();
});
*/

/*
//  not equal to 210234
Vampire.find({ victims: {$gte: 210234} }, (err, Vampires) => {
  if (err) {
    console.log('********* ERROR *********');
    console.log(err);
  } else {
    console.log('Result : ', Vampires);
  }
  db.close();
});


// greater than 150 AND fewer than 500 victims
Vampire.find({$and : [  {victims:  {$gte: 150 , $lte : 500  } }]  }, (err, Vampires) => {
  if (err) {
    console.log('********* ERROR *********');
    console.log(err);
  } else {
    console.log('Result : ', Vampires);
  }
  db.close();
});


// ********** Select by exists or does not exist *************

//have a key of 'title'
Vampire.find({}, 'title', (err, vampires) => {
  console.log('********* ERROR *********');
 console.log(vampires);
 db.close();
});


// do not have the key victims
Vampire.find( { victims : null }, (err, vampires) => {
  console.log('********* ERROR *********');
 console.log(vampires);
 db.close();
});

// have a title AND no victims
Vampire.find(  {  $and : [ {title : { $ne: null } } , { victims : null } ] }, (err, vampires) => {
  console.log('********* ERROR *********');
 console.log(vampires);
 db.close();
});
// have victims AND the victims they have are greater than 1000
Vampire.find(  {  $and : [ {victims : { $gte: 500 } } , { victims : { $ne: null }  } ] }, (err, vampires) => {
  console.log('********* ERROR *********');
 console.log(vampires);
 db.close();
});



// ********************** Select with OR ******************

//are from New York, New York, US or New Orleans, Louisiana, US

Vampire.find(  { $or: [ { location: 'New Orleans, Louisiana, US '}, { location:'New York, New York, US' } ] }, (err, vampires) => {
  console.log('********* ERROR *********');
 console.log(vampires);
 db.close();
});

// love brooding or being tragic

Vampire.find(  { $or: [ { loves: 'brooding'}, { loves:'being tragic' } ] }, (err, vampires) => {
  console.log('********* ERROR *********');
 console.log(vampires);
 db.close();
});

// have more than 1000 victims or do love marshmallows
Vampire.find(  { $or: [ { loves: 'marshmallows'}, { victims:{ $gte: 1000 }  } ] }, (err, vampires) => {
  console.log('********* ERROR *********');
 console.log(vampires);
 db.close();
});

//have red hair or green eyes
Vampire.find(  { $or: [ { hair_color: 'red'}, { eye_color: 'green'  } ] }, (err, vampires) => {
  console.log('********* ERROR *********');
 console.log(vampires);
 db.close();
});



// ************** Select objects that match one of several values ***********

//love either frilly shirtsleeves or frilly collars
Vampire.find(  { $or: [ { loves: 'frilly shirtsleeves' }, { loves: 'frilly collars' } ] }, (err, vampires) => {
  console.log('********* ERROR *********');
 console.log(vampires);
 db.close();
});

// love brooding
Vampire.find(   { loves: 'brooding' }, (err, vampires) => {
  console.log('********* ERROR *********');
 console.log(vampires);
 db.close();
});

// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
Vampire.find(  { $or: [ { loves: 'appearing innocent' }, { loves: 'trickery' }, { loves: 'lurking in rotting mansions' } , { loves: 'R&B music' } ] }, 
(err, vampires) => {
  console.log('********* ERROR *********');
 console.log(vampires);
 db.close();
});

// love fancy cloaks but not if they also love either top hats or virgin blood _ Hint-You will also have to use $nin _
Vampire.find(  { loves: 'fancy cloaks' } , {$or : [ { loves: { $nin: 'virgin blood' } }, { loves: { $nin: 'top hats' }} ]} , (err, vampires) => {
  console.log('********* ERROR *********');
 console.log(vampires);
 db.close();
});





//********** Negative Selection ****************

// love ribbons but do not have brown eyes
Vampire.find( {$and :[ { loves: 'ribbons' }, { eye_color: { $ne: 'brown' }  }] }, (err, vampires) => {
  console.log('********* ERROR *********');
 console.log(vampires);
 db.close();
});

// are not from Rome
Vampire.find( { location: { $nin: 'Rome' }  }, (err, vampires) => {
 console.log('********* ERROR *********');
 console.log(vampires);
 db.close();
});
// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
Vampire.find( { love: { $nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic, brooding'] }  }, (err, vampires) => {
  console.log('********* ERROR *********');
 console.log(vampires);
 db.close();
});

// have not killed more than 200 people
Vampire.find( { victims: {$let 200} }, (err, vampires) => {
  console.log('********* ERROR *********');
 console.log(vampires);
 db.close();
});
*/