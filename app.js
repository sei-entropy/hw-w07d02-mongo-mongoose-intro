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



// Create 4 new vampires
const newVampires = [
  {
  name: 'Raghad',
  hair_color: 'brown',
  eye_color: 'brown',
  dob: new Date(1999, 1, 10, 21, 0),
  loves: ['food','sleep'],
  location: 'Riyadh, Riyadh, SA',
  gender: 'f',
  victims: 20
},{
  name: 'Mohammed',
  dob: new Date(2020, 0, 34, 41, 1),
  hair_color: 'white',
  eye_color: 'brown',
  loves: ['woke', 'meat'],
  location: 'Riyadh, Saudi Arabia',
  gender: 'm',
  victims: 53
}
,{
  name: 'Asma',
  hair_color: 'black',
  eye_color: 'black',
  dob: new Date(219, 9, 44, 3, 22),
  loves: ['cook','shopping'],
  location: 'Riyadh, Saudi Arabia',
  gender: 'm',
  victims: 45
},{
  name: 'Abdulwahab',
  dob: new Date(37, 1, 42, 0, 12),
  hair_color: 'brown',
  eye_color: 'brown',
  loves: ['football', 'swim'],
  location: 'Riyadh, Riyadh, SA',
  gender: 'f',
  victims: 18
}

]

  // Vampire.create(newVampires, (error, vampires) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log(vampires);
  //   }
  //   db.close();
  // });



  //         Select by comparison

// 1-
  // Vampire.find({ gender: 'f' }, (err, vampires) => {
  //   console.log(' **  Find all the vampires that that are females  **');
  //   console.log(vampires);
  //   db.close();
  // });


// 2-
  // Vampire.find({ victims: { $gte: 500 } }, (err, vampires) => {
  //     console.log(' **  have greater than 500 victims  **');
  //     console.log(vampires);
  //     db.close();
  //   });


// 3-
  // Vampire.find({ victims: { $gte: 150 } }, (err, vampires) => {
  //      console.log(' **  have fewer than or equal to 150 victims  **');
  //     console.log(vampires);
  //     db.close();
  //   });


// 4-
//   Vampire.find({ victims: { $ne: 210234 } }, (err, vampires) => {
//        console.log(' **  have a victim count is not equal to 210234  **');
//       console.log(vampires);
//       db.close();
//     });



// 5-
// Vampire.find({ $and: [ { victims: { $gt: 150 } }, { victims: { $lt: 500 } }]}, (err, vampires) => {
//     console.log(' **   have greater than 150 AND fewer than 500 victims  **');
//     console.log(vampires) 
//   db.close();
// })






  //         Select by exists or does not exist

// 1-
// Vampire.find({}, 'title', (err, vampires) => {
// console.log(' **  have a key of title  **');
//     console.log(vampires);
//     db.close();
//   });



// 2-
// Vampire.find( { victims : null }, (err, vampires) => {
// console.log(' **  do not have a key of victims  **');  
//     console.log(vampires);
//     db.close();
//   });


// 3-
// Vampire.find(  
//   {  $and : [ {title : { $ne: null } } , 
//     { victims : null } ] }, 
//     (err, vampires) => {
//       console.log(' **   have a title AND no victims  **');  
//       console.log(vampires);
//     db.close();
//   });



// 4-
// Vampire.find(  {  $and : [ {victims : { $gte: 500 } } , 
//   { victims : { $ne: null }  } ] }, 
//   (err, vampires) => {
//     console.log(' **   have victims AND the victims they have are greater than 1000  **');  
//     console.log(vampires);
//     db.close();
//   });




  //         Select with OR

// 1-
// Vampire.find(  { $or: [ { location: 'New Orleans, Louisiana, US '}, 
//   { location:'New York, New York, US' } ] }, 
//    (err, vampires) => {
//     console.log(' **   are from New York, New York, US or New Orleans, Louisiana, US **');  
//     console.log(vampires);
//     db.close();
//   });



// 2-
// Vampire.find(  { $or: [ { loves: 'brooding'}, 
//   { loves:'being tragic' } ] }, 
//    (err, vampires) => {
//     console.log(' **  love brooding or being tragic  **');  
//     console.log(vampires);
//     db.close();
//   });



// 3-
// Vampire.find(  { $or: [ { loves: 'marshmallows'}, 
// { victims:{ $gte: 1000 }  } ] }, 
// (err, vampires) => {
//     console.log(' **  have more than 1000 victims or love marshmallows  **');  
//     console.log(vampires);
//     db.close();
//   });




// 4-
// Vampire.find(  { $or: [ { hair_color: 'red'}, 
// { eye_color: 'green'  } ] }, 
// (err, vampires) => {
//     console.log(' **  have red hair or green eyes  **');  
//     console.log(vampires);
//     db.close();
//   });



  //         Select objects that match one of several values

// 1-
// Vampire.find(  { $or: [ { loves: 'frilly shirtsleeves' }, 
// { loves: 'frilly collars' } ] }, 
// (err, vampires) => {
//     console.log(' **  love either frilly shirtsleeves or frilly collars  **');  
//     console.log(vampires);
//     db.close();
//   });




// 2-
// Vampire.find(   { loves: 'brooding' }, (err, vampires) => {
//     console.log(' **  love brooding  **');  
//     console.log(vampires);
//     db.close();
//   });




// 3-  
// Vampire.find(  { $or: [ { loves: 'appearing innocent' }, 
// { loves: 'trickery' }, 
// { loves: 'lurking in rotting mansions' } , 
// { loves: 'R&B music' } ] },

// (err, vampires) => {
//     console.log(' **  love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music  **');  
//     console.log(vampires);
//     db.close();
//   });




// 4-
// Vampire.find(  { loves: 'fancy cloaks' } , 
// {  $or : [ { loves: { $nin: 'virgin blood' } }, 
// { loves: { $nin: 'top hats' } } , ] },

// (err, vampires) => {
//     console.log(' **  love fancy cloaks but not if they also love either top hats or virgin blood _ Hint-You will also have to use $nin _  **');  
//     console.log(vampires);
//     db.close();
//   });





  //         Negative Selection

// 1-  
// Vampire.find( { loves: 'ribbons' }, 
// { eye_color: { $nin: 'brown' }  }, 
// (err, vampires) => {
//     console.log(' **  love ribbons but do not have brown eyes  **');  
//     console.log(vampires); // return ==> undefined
//     db.close();
//   });




// 2-
// Vampire.find( { location: { $nin: 'Rome' }  }, (err, vampires) => {
//     console.log(' **  are not from Rome  **');  
//     console.log(vampires);
//     db.close();
//   });




// 3-
// Vampire.find( { love: { $nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic, brooding'] }  }, 
// (err, vampires) => {
//     console.log(' **  do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]  **');  
//     console.log(vampires);
//     db.close();
//   });



// 4-
// Vampire.find({ victims: { $not: { $gt: 200 } } }, (err, vampires) => {
//     console.log(' **  have not killed more than 200 people  **');  
//     console.log(vampires) 
//     db.close();
//   })







  //         Replace

// 1-
// Vampire.findOneAndUpdate( { name: 'Claudia' }, 
//  { $set: { name: 'Eve', portrayed_by: 'Tilda Swinton' } }, 
//  { new: true, strict: false, },
//   (err, vampires) => {
//     if (err) {
//       console.log(err);
//     } else {
//     console.log(' **  replace the vampire called Claudia with a vampire called Eve. Eve will have a key called portrayed_by with the value Tilda Swinton  **');  
//       console.log(vampires);
//     }
//     db.close();
//   }
// );



// 2-
// Vampire.findOneAndUpdate( { gender: 'm' }, 
//  { $set: { name: 'Guy Man', is_actually: 'were-lizard' } }, 
//  { new: true, strict: false, },
//   (err, vampires) => {
//     if (err) {
//       console.log(err);
//     } else {
//     console.log(' **   Ereplace the first male vampire with another whose name is Guy Man, and who has a key is_actually with the value were-lizard  **');  
//       console.log(vampires);
//     }
//     db.close();
//   }
// );








  //         Update

// 1-
// Vampire.findOneAndUpdate({ name: 'Guy Man' }, 
// { $set: { gender: 'f' } }, 
// { new: true, strict: false, }, 

// (err, vampires) => {
//   if (err) { console.log(e) }
//   else { 
//     console.log(' **   Update Guy Man to have a gender of f  **');  
//     console.log(vampires) };
//   db.close();
// })




// 2-
// Vampire.findOneAndUpdate({ name: 'Eve' }, 
// { $set: { gender: 'm' } }, 
// { new: true, strict: false, }, 

// (err, vampires) => {
//   if (err) { console.log(e) }
//   else { 
//     console.log(' **   Update Eve to have a gender of m  **');  
//     console.log(vampires) };
//   db.close();
// })


// 3-
// Vampire.findOneAndUpdate({ name: 'Eve' }, 
// { $set: { hates: ['clothes', 'jobs'] } }, 
// { new: true, strict: false, }, 

// (err, vampires) => {
//   if (err) { console.log(e) }
//   else { 
//     console.log(' **   Update Guy Man to have an array called hates that includes clothes,jobs **');  
//     console.log(vampires) };
//   db.close();
// })



// 4-
// Vampire.findOneAndUpdate({ name: 'Guy Man' }, 
// { $push: { hates: { $each: ['alarm clocks', 'jackalopes'] } }  }, 
// { new: true, strict: false, }, 

// (err, vampires) => {
//   if (err) { console.log(e) }
//   else { 
//     console.log(' **   Update Guy Mans hates array also to include alarm clocks and jackalopes **');  
//     console.log(vampires) };
//   db.close();
// })



// 5-
// Vampire.findOneAndUpdate({ name: 'Eve' }, 
// { $rename: { name: "moniker" } }, 
// { new: true, strict: false, }, 

// (err, vampires) => {
//   if (err) { console.log(e) }
//   else { 
//     console.log(' **   Rename Eves name field to moniker   **');  
//     console.log(vampires) };
//   db.close();
// })



// 6-
// Vampire.findOneAndUpdate({ gender: 'f' }, 
// { $set: { gender: 'fems' } }, 
// { new: true, strict: false, }, 

// (err, vampires) => {
//   if (err) { console.log(e) }
//   else { 
//     console.log(' **   We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".   **');  
//     console.log(vampires) };
//   db.close();
// })








  //         Remove

// 1- 
// Vampire.deleteOne({  hair_color: 'brown' }, (err, vampires) => {
//     console.log(' **  Remove a single document wherein the hair_color is brown  **');  
//     console.log(vampires) 
//     db.close();
//   })



// 2-
Vampire.deleteMany({  eye_color: 'blue' }, (err, vampires) => {
      console.log(' **  We found out that the vampires with the blue eyes were just fakes! Let remove all the vampires who have blue eyes from our database.  **');  
      console.log(vampires) 
      db.close();
    })



