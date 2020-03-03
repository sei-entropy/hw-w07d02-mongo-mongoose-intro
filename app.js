/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require("mongoose");
const seedData = require("./models/seed_vampires.js");
const Vampire = require("./models/vampire.js");

// Configuration
const mongoURI = "mongodb://localhost:27017/vampiresDB";
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success
db.on("error", err => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

db.on("open", () => {
  console.log("Connection made!");
});

/**********************************************************************
Write Your Code Below

**********Select by comparison**************

*
const newone = [
  {
    name: 'rena',
    hair_color: 'yellow',
    eye_color: 'Green',
    dob: new Date(1770, 2, 13, 8, 47),
    loves: ['Swimming',],
  location: 'Transylvania, Romania',
    gender: 'f',
    victims: 101,
  },
  {
    name: 'Emmie',
    hair_color: 'brow',
    eye_color: 'Green',
   dob: new Date(1971, 2, 13, 7, 47),
    loves: ['Music',],
  location: 'Transylvania, Romania',
    gender: 'f',
    victims: 450,
  },
  {
    name: 'Ries',
    hair_color: 'black',
    eye_color: 'black',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['Games'],
  location: 'Transylvania, Romania',
    gender: 'm',
    victims: 450,
  },
  {
    name: 'Paul',
    hair_color: 'black',
    eye_color: 'black',
   dob: new Date(1971, 2, 13, 7, 47),
    loves: ['order'],
  location: 'Transylvania, Romania',
    gender: 'm',
    victims: 450,
  },
  
]
Vampire.insertMany(newone, (err, vampires) => {
  if (err) {
    console.log(err);
  }
  console.log('added provided vampire data', vampires);
  mongoose.connection.close();


1-
const cb = function(error, result) {
  if (error) {
    
    console.log("EERR:", error);
  } else {
   
    console.log(", result);
  }
 
  db.close();
};
Vampire.find({gender:'f'},cb)


2-
have greater than 500 victims
const cb = function(error, result) {
  if (error) {
    
    console.log("EERR:", error);
  } else {
   
    console.log(", result);
  }
 
  db.close();
};
Vampire.find({victims:{$gt:500}},cb)


3-
Vampire.find({victims:{$ls:150}},cb)
have fewer than or equal to 150 victims


*******Select by exists or does not exist******

Select all the vampires that:

have a key of 'title'

Vampire.find({ title: { $exists: true} }, (err, vam) => {
   
);
 db.close();
});


do not have a key of 'victims'

Vampire.find({ victims: { $exists: false } }, (err, vam) => {
console.log(" vampires with no victims is  " + vam);
 db.close();
})


have a title AND no victims


const cb = function(error, result) {
  if (error) {
    
    console.log("EERR:", error);
  } else {
   
    console.log(", result);
  }
 
  db.close();
};
Vampire.find({ title: { $exists: true } ,victims: { $exists: false }}, }cb)




have victims AND the victims they have are greater than 1000

const cb = function(error, result) {
  if (error) {
    
    console.log("EERR:", error);
  } else {
   
    console.log(", result);
  }
 
  db.close();
};
Vampire.find({ victims: { $exists: true ,$gt:500} cb})


*****************Select with OR*******************


Select all the vampires that:

love either frilly shirtsleeves or frilly collars

Vampire.find({ loves: { $elemMatch: { $eq: "frilly shirtsleeves" , $eq: "frilly collars" }}},
   (err, vam) => {
    console.log( " vampires love either frilly shirtsleeves or frilly collars  " + vam
   );
 db.close();
  }
);






love brooding
Vampire.find({loves: { $elemMatch: { $eq: "brooding"} }},
  (err, vam) => {
   db.close();}
);



****************Negative Selection**********************
1.love ribbons but do not have brown eyes
Vampire.find({ loves: { $eq: "ribbons" }, eye_color : {$ne: "brown"} }, (err, vam) => {
 
  db.close();
 });

2.are not from Rome 
Vampire.find({ location: { $ne: "Rome"} }, (err, vam) => {
 
  db.close();
});
3.do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
 Vampire.find(
  {
  loves: {
   $nin:[ "fancy cloaks", "frilly shirtsleeves", "appearing innocent", "being tragic", "brooding"]
 }
  },
(err, vam) => {
    db.close();
  }
 );





***************************Replace *******************************************
replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
Vampire.replaceOne( { name: "Claudia" },{ name: "Eve", portrayed_by: "Tilda Swinton" },
);
2.replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'
Vampire.replaceOne(
{ gender: "m" },
{ name: "Guy Man", is_actually: "were-lizard" },
);*/






*/
