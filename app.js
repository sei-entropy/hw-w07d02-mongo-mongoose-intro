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

// Vampire.insertMany(seedData, (err, Vampire) => {
//   if (err) {
//     //if there is an error console log it
//     console.log(err);
//   } else {
//     // else show us the created tweet
//     console.log("added provided vampire data", Vampire);
//   }
//   // get control of terminal back
//   // else just use control c
//   db.close();
// });
//Using the create method, create 4 new vampires with any qualities that you like two should be male and two should be female.
//we can create an array of object and add all the 4th vampires inside it then call insertMany
//but I use create and add it Separated
//vampire 1
// var vampire1 = {
//   name: "Chocula",
//   title: "Count",
//   hair_color: "brown",
//   eye_color: "brown",
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ["cereal", "marshmallows"],
//   location: "Minneapolis, Minnesota, US",
//   gender: "m",
//   victims: 2
// };
// //1
// Vampire.create(vampire1, (err, Vampire) => {
//   if (err) {
//     //if there is an error console log it
//     console.log(err);
//   } else {
//     // else show us the created tweet
//     console.log("added provided vampire1 data", Vampire);
//   }
//   // get control of terminal back
//   // else just use control c
//   db.close();
// });
// //vampire 2
// var vampire2 = {
//   name: "Chocula",
//   title: "Count",
//   hair_color: "brown",
//   eye_color: "brown",
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ["cereal", "marshmallows"],
//   location: "Minneapolis, Minnesota, US",
//   gender: "m",
//   victims: 2
// };
// //2
// Vampire.create(vampire2, (err, Vampire) => {
//   if (err) {
//     //if there is an error console log it
//     console.log(err);
//   } else {
//     // else show us the created tweet
//     console.log("added provided vampire2 data", Vampire);
//   }
//   // get control of terminal back
//   // else just use control c
//   db.close();
// });
// //vampire 3
// var vampire3 = {
//   name: "Chocula",
//   title: "Count",
//   hair_color: "brown",
//   eye_color: "brown",
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ["cereal", "marshmallows"],
//   location: "Minneapolis, Minnesota, US",
//   gender: "f",
//   victims: 2
// };
// //3
// Vampire.create(vampire3, (err, Vampire) => {
//   if (err) {
//     //if there is an error console log it
//     console.log(err);
//   } else {
//     // else show us the created tweet
//     console.log("added provided vampire3 data", Vampire);
//   }
//   // get control of terminal back
//   // else just use control c
//   db.close();
// });
// //vampire 4
// var vampire4 = {
//   name: "Chocula",
//   title: "Count",
//   hair_color: "brown",
//   eye_color: "brown",
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ["cereal", "marshmallows"],
//   location: "Minneapolis, Minnesota, US",
//   gender: "f",
//   victims: 2
// };

// //4
// Vampire.create(vampire4, (err, Vampire) => {
//   if (err) {
//     //if there is an error console log it
//     console.log(err);
//   } else {
//     // else show us the created tweet
//     console.log("added provided vampire4 data", Vampire);
//   }
//   // get control of terminal back
//   // else just use control c
//   db.close();
// });
//***************************//
//Select by comparison
//1.Find all the vampires that that are females
// Vampire.find({ gender :'f'}, (err, vam) => {
//   console.log("females vampires "  + vam);
//   db.close();
// });

//2.have greater than 500 victims
// Vampire.find({ victims: { $gt: 500 } }, (err, vam) => {
//   console.log(" vampires greater than 500 victams are " + vam);
//   db.close();
// });
//3.have fewer than or equal to 150 victims
// Vampire.find({ victims: { $lte: 150 } }, (err, vam) => {
//   console.log(" vampires less than or equal to 150 victams are " + vam);
//   db.close();
// });
//4.have a victim count is not equal to 210234
// Vampire.find({ victims: { $ne: 210234} }, (err, vam) => {
//   console.log(" vampires not equal to 210234 victams is " + vam);
//   db.close();
// });
//5.have greater than 150 AND fewer than 500 victims
// Vampire.find({ victims: { $gt: 150 ,$lt:500} }, (err, vam) => {
//   console.log(" vampires greater than 150 AND fewer than 500 victams are " + vam);
//   db.close();
// });
//***************************//
//Select by exists or does not exist
//1. have a key of 'title'
// Vampire.find({ title: { $exists: true} }, (err, vam) => {
//   console.log(
//     " vampires with title is  " + vam
//   );
//   db.close();
// });
//2.do not have a key of 'victims'
// Vampire.find({ victims: { $exists: false } }, (err, vam) => {
//   console.log(" vampires with no victims is  " + vam);
//   db.close();
// });
//3.have a title AND no victims
// Vampire.find(
//   { victims: { $exists: false }, title: { $exists: true } },
//   (err, vam) => {
//     console.log(" vampires with title and no victims is  " + vam);
//     db.close();
//   }
// );
//4.have victims AND the victims they have are greater than 1000
// Vampire.find(
//   { victims: { $exists: true }, victims: { $gt: 1000 } },
//   (err, vam) => {
//     console.log(" vampires with title and no victims is  " + vam);
//     db.close();
//   }
// );
//***************************//
//Select with OR
//1.are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find(
//   {
//     $or: [
//       { location: "New York, New York, US" },
//       { location: "New Orleans, Louisiana, US" }
//     ]
//   },
//   (err, vam) => {
//     console.log(" vampires from New York, New York, US or New Orleans, Louisiana, US  " + vam);
//     db.close();
//   }
// );
//2.love brooding or being tragic
// Vampire.find(
//   {
//     $or: [{ loves: "brooding" }, { loves: "being tragic" }]
//   },
//   (err, vam) => {
//     console.log(" vampires brooding or being tragic  " + vam);
//     db.close();
//   }
// );

//3.have more than 1000 victims or love marshmallows
// Vampire.find(
//   {
//     $or: [{ victims: { $gte: 1000 } }, { loves: "marshmallows" }]
//   },
//   (err, vam) => {
//     console.log(" vampires brooding or being tragic  " + vam);
//     db.close();
//   }
// );
//4.have red hair or green eyes
// Vampire.find(
//   {
//     $or: [{ eye_color: "green" }, { hair_color: "red" }]
//   },
//   (err, vam) => {
//     console.log(" vampires brooding or being tragic  " + vam);
//     db.close();
//   }
// );
//***************************//
//Select objects that match one of several values
//1.love either frilly shirtsleeves or frilly collars
// Vampire.find({ loves: { $elemMatch: { $eq: "frilly shirtsleeves" , $eq: "frilly collars" }}},
//   (err, vam) => {
//     console.log( " vampires love either frilly shirtsleeves or frilly collars  " + vam
//     );
//     db.close();
//   }
// );
//2. love brooding
// Vampire.find({loves: { $elemMatch: { $eq: "brooding"} } },
//   (err, vam) => {
//     console.log(
//       " vampires love brooding  " + vam
//     );
//     db.close();
//   }
// );
//3. love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// Vampire.find(
//   {
//     loves: {
//       $elemMatch: {
//         $eq: "appearing innocent",
//         $eq: "trickery",
//         $eq: "lurking in rotting mansions",
//         $eq: "R&B music"
//       }
//     }
//   },
//   (err, vam) => {
//     console.log(
//       " vampires love appearing innocent, trickery, lurking in rotting mansions or R&B music  " + vam
//     );
//     db.close();
//   }
// );
//4.love fancy cloaks but not if they also love either top hats or virgin blood _ Hint-You will also have to use $nin _
// Vampire.find({ loves: {  $nin : ['top hats','virgin blood'], $eq: "fancy cloaks" }  }, (err, vam) => {
//   console.log(
//     " vampires love fancy cloaks but not if they also love either top hats or virgin blood  " +
//       vam
//   );
//   db.close();
// });
//***************************//
//Negative Selection
//1.love ribbons but do not have brown eyes
// Vampire.find({ loves: { $eq: "ribbons" }, eye_color : {$ne: "brown"} }, (err, vam) => {
//   console.log(" vampires love ribbons but do not have brown eyes  " + vam);
//   db.close();
// });
//2.are not from Rome ==================================!!!!!
// Vampire.find({ location: { $not: /^Rome.*/ } }, (err, vam) => {
//   console.log(" vampires love ribbons but do not have brown eyes  " + vam);
//   db.close();
// });
//3.do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find(
//   {
//     loves: {
//       $nin:[ "fancy cloaks", "frilly shirtsleeves", "appearing innocent", "being tragic", "brooding"]
//     }
//   },
//   (err, vam) => {
//     console.log(" vampires love ribbons but do not have brown eyes  " + vam);
//     db.close();
//   }
// );
//4.have not killed more than 200 people 
// Vampire.find(
//   {
//     victims: { $lte : 200 }
//   },
//   (err, vam) => {
//     console.log(" vampires love ribbons but do not have brown eyes  " + vam);
//     db.close();
//   }
// );
//***************************//
// Replace
//1. replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
// Vampire.replaceOne(
//   { name: "Claudia" },
//   { name: "Eve", portrayed_by: "Tilda Swinton" },
//   console.log("replaced")
// );
//2.replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'
// Vampire.replaceOne(
//   { gender: "m" },
//   { name: "Guy Man", is_actually: "were-lizard" },
//   console.log("replaced")
// );
//***************************//
//Update
//1.Update 'Guy Man' to have a gender of 'f'
// Vampire.findOneAndUpdate({ name: "Guy Man" }, { $set: { gender: "f" } });
//2.Update 'Eve' to have a gender of 'm'
// Vampire.findOneAndUpdate({ name: "Eve" }, { $set: { gender: "m" } });
//3.Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
// Vampire.findOneAndUpdate(
//   { name: "Guy Man" },
//   { $set: { hates: ["clothes", "jobs"] } }
// );
//4.Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
// Vampire.findOneAndUpdate(
//   { name: "Guy Man" },
//   { $set: { hates: ["alarm clocks", "jackalopes"] } }
// );
//5. Rename 'Eve's' name field to 'moniker'
// Vampire.findOneAndUpdate({ name: "Eve" }, { $set: { name: "moniker" } });
// 6.We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".
// Vampire.updateMany({ gender: "f" }, { $set: { gender: "fems" } });
//***************************//
//Remove
//Remove a single document wherein the hair_color is 'brown'
//2. Vampire.remove({ hair_color: "brown" },true);
//We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
//2. Vampire.remove({ eye_color: "blue" });