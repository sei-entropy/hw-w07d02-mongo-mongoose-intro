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

const allVampires = [
  {
    name: 'Chocula',
    title: 'Count',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['brooding', 'marshmallows'],
    location: 'Minneapolis, Minnesota, US',
    gender: 'm',
    victims: 2
  },
  {
      name: "Chocula the second",
      hair_color: "blonde",
      eye_color: "blue",
      dob: new Date(1990, 2, 13, 7, 47),
      loves: ["being tragic", "blood"],
      location: "Minneapolis, Minnesota, US",
      gender: "m",
      victims: 500
  },
  {
      name: "Claudia",
      hair_color: "black",
      eye_color: "black",
      dob: new Date(2020, 2, 13, 7, 47),
      loves: ["cats", " frilly collars"],
      location: "Minneapolis, Minnesota, US",
      gender: "f",
      victims: 9
  },
  {
      name: "Claudia the second",
      hair_color: "blonde",
      eye_color: "green",
      dob: new Date(1998, 2, 13, 7, 47),
      loves: ["shirtsleeves", "color pink"],
      location: "Minneapolis, Minnesota, US",
      gender: "f",
      victims: 150
  }
];

// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   } else{
//   console.log( vampires);
//   }
//   db.close();
// });


// //gender female
// Vampire.find({ gender :'f'}, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// });

// //victims 500
// Vampire.find({ victims: { $gt: 500 } }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// });

// //victims  150
// Vampire.find({ victims: { $lte: 150 } }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// });

// //victims 210234
// Vampire.find({ victims: { $ne: 210234} }, (err, vampires) => {
//   console.log( vampires);
//   db.close();
// });

// //greater than 150 AND fewer than 500 victims
// Vampire.find({ victims: { $gt: 150 ,$lt:500} }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// });





// //Select by exists or does not exist

// //title
// Vampire.find({ title: { $exists: true} }, (err, vampires) => {
//   console.log(vampires);
//    db.close();
//   });

// //victims
// Vampire.find({ victims: { $exists: false } }, (err, vampires) => {
//     console.log(vampires);
//      db.close();
//     })

// //victims and title
// Vampire.find(
//       { victims: { $exists: false }, title: { $exists: true } },
//       (err, vampires) => {
//         console.log(vampires);
//         db.close();
// });

// //have victims AND the victims they have are greater than 1000
// Vampire.find(
//   { victims: { $exists: true }, victims: { $gt: 1000 } },
//   (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });





// //location  New York, New York, US or New Orleans, Louisiana, US
// Vampire.find({
//   $or: [
//     { location: "New York, New York, US" },
//     { location: "New Orleans, Louisiana, US" }
//   ]
// },
// (err, vampires) => {
//   console.log(vampires);
//   db.close();
// });

// //loves or being tragic
// Vampire.find({
//   $or: [{ loves: "brooding" }, { loves: "being tragic" }]
// },
// (err, vampires) => {
//   console.log(vampires);
//   db.close();
// });

// //victims 1000 or loves marshmallows
// Vampire.find({
//   $or: [{ victims: { $gte: 1000 } }, { loves: "marshmallows" }]
// },
// (err, vampires) => {
//   console.log(vampires);
//   db.close();
// });

// //red hair or green eyes
// Vampire.find({
//   $or: [{ eye_color: "green" }, { hair_color: "red" }]
// },
// (err, vampires) => {
//   console.log(vampires);
//   db.close();
// });





//loves frilly shirtsleeves or frilly collars
// vampire.find({ loves: { $elemMatch: { $eq: "frilly shirtsleeves" , $eq: "frilly collars" }}},
//    (err, vampires) => {
//     console.log(vampires);
//  db.close();
//   }
// );

// //love brooding
// Vampire.find({loves: { $elemMatch: { $eq: "brooding"} } },
//   (err, vampires) => {
//     console.log(vampires);
//     db.close();
// });

//   //love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// Vampire.find(  { $or: [ { loves: 'appearing innocent' }, { loves: 'trickery' }, { loves: 'lurking in rotting mansions' } , { loves: 'R&B music' } ] }, 
//   (err, vampires) => {
//       console.log(vampires);
//       db.close();
// });

//     //love fancy cloaks but not if they also love either top hats or virgin blood _ Hint-You will also have to use $nin _
// Vampire.find({ loves: {  $nin : ['top hats','virgin blood'], $eq: "fancy cloaks" }  }, 
//(err, vampires) => {
//    console.log(vampires);
//     db.close();
// });




// //love ribbons but do not have brown eyes
// Vampire.find({ loves: { $eq: "ribbons" }, eye_color : {$ne: "brown"} }, 
// (err, vampires) => {
//   console.log(vampires);
//   db.close();
// });

// //are not from Rome
// Vampire.find( { location: { $nin: 'Rome' } }, 
//   (err, vampires) => {
//   console.log(vampires);
//   db.close();
// });

// //do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find(
//   {
//     loves: {
//       $nin:[ "fancy cloaks", "frilly shirtsleeves", "appearing innocent", "being tragic", "brooding"]
//     }},
//   (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });

// //have not killed more than 200 people
// Vampire.find({ victims: { $lte : 200 }},
//   (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   });





// //replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
// Vampire.findOneAndUpdate(
//   { name: 'Claudia' },
//   { name:'Eve'},
//   { new: true },
//   (err, vampires) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(vampires);
//     }
//   }
// );

// Vampire.findOneAndUpdate(
//   { name: 'Eve' },
//   {portrayed_by:"Tilda Swinton"},
//   { new: true },
//   (err, vampires) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(vampires);
//     }
//   }
// );

// //replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'
// Vampire.findOneAndUpdate(
//   { gender: 'm' },
//   { name:'Guy Man'},
//   { new: true },
//   (err, vampires) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(vampires);
//     }
//   }
// );






// //Update 'Guy Man' to have a gender of 'f'
// Vampire.findOneAndUpdate(
//   { name:'Guy Man' },
//   { gender:'f'},
//   { new: true },
//   (err, vampires) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(vampires);
//     }
//   }
// );

// //Update 'Eve' to have a gender of 'm'
// Vampire.findOneAndUpdate(
//   { name:'Eve' },
//   { gender:'m'},
//   { new: true },
//   (err, vampires) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(vampires);
//     }
//   }
// );

// //update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
// Vampire.findOneAndUpdate(
//   { name:'Guy Man' },
//   { hates:['clothes','jobs']},
//   { new: true },
//   (err, vampires) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(vampires);
//     }
//   }
// );

// //Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
// Vampire.findOneAndUpdate(
//   { name:'Guy Man' },
//   { hates:['clothes','jobs','alarm clocks','jackalopes']},
//   { new: true },
//   (err, vampires) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(vampires);
//     }
//   }
// );

// //Rename 'Eve's' name field to 'moniker'
// Vampire.findOneAndUpdate(
//   { name:'Eve' },
//   { name:'moniker'},
//   { new: true },
//   (err, vampires) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(vampires);
//     }
//   }
// );

// //We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".
// Vampire.findOneAndUpdate(
//   { gender: 'f' },
//   { gender:'fems'},
//   {multi: true},
//   (err, vampires) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(vampires);
//     }
//   }
// );






//Remove a single document wherein the hair_color is 'brown'
Vampire.findOneAndRemove({ hair_color: 'brown' }, 
(err, vampires) => {
  if (err) {
    console.log(err);
  } else {
    console.log('This is the deleted tweet:', vampires);
  }
});

//We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
Vampire.findOneAndRemove({ eye_color: 'blue' }, 
(err, vampires) => {
  if (err) {
    console.log(err);
  } else {
    console.log('This is the deleted tweet:', vampires);
  }
})
