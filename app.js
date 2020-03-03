/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require("mongoose");
const seedData = require("./models/seed_vampires.js");
const Vampire = require("./models/vampire.js");

// Configuration
const mongoURI = "mongodb://localhost:27017/" + "vampires";
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
**********************************************************************/
Vampire.insertMany(seedData, (err, vampires) => {
  if (err) {
    console.log(err);
  }
  console.log("added provided vampire data", vampires);
  mongoose.connection.close();
});

const newVampire = [
  {
    name: "Yuki Kuran",
    hair_color: "Brown",
    eye_color: "Red",
    dob: new Date(1770, 2, 13, 8, 47),
    loves: ["cake", "strawberry"],
    location: " Guardian , Kuran  ",
    gender: "f",
    victims: 101
  },
  {
    name: "Ren Kiryu",
    hair_color: "Silver",
    eye_color: "Red",
    dob: new Date(1770, 2, 13, 8, 47),
    loves: ["cake", "strawberry"],
    location: " Guardian , Kuran  ",
    gender: "f",
    victims: 101
  },
  {
    name: "Zero Kiryu",
    hair_color: "Silver",
    eye_color: "Lavender",
    dob: new Date(1770, 2, 13, 8, 47),
    loves: ["cake", "strawberry"],
    location: " Guardian , Kuran  ",
    gender: "m",
    victims: 101
  },
  {
    name: "Kaname Kuran ",
    hair_color: "Brown",
    eye_color: "Red",
    dob: new Date(1770, 2, 13, 8, 47),
    loves: ["cake", "strawberry"],
    location: " Guardian , Kuran  ",
    gender: "m",
    victims: 101
  }
];

Vampire.insterMany(newVampire);

const vm = function(error, result) {
  if (error) {
    console.log("*******error*******");
    console.log("err:", error);
  } else {
    console.log("result:", result);
  }

  db.close();
};

//All f
Vampire.find({ gender: "f" }, vm);

// greater than 500 victims

Vampire.find({ victims: { $gt: 500 }, vm });

//less than or equal 150 victims
Vampire.find({ victims: { $lte: 150 }, vm });
//not equal to 210234
Vampire.find({ $gte: 210234 }, vm);
//greater than 150 and less than 500 victims
Vampire.find({ $and: [{ victims: { $gte: 150, $lte: 500 } }] }, vm);

//key title
Vampire.find({}, "title", vm);
//not have key of victims
Vampire.find({ victims: null }, vm);
//have title and no victims
Vampire.find({ $and: [{ title: { $ne: null } }, { victims: null }] }, vm);
//have victims AND the victims they have are greater than 1000
Vampire.find({ $and: [{ victims: { $ne: null } }, { $gt: 1000 }] }, vm);

//OR
//are from New York, New York, US or New Orleans, Louisiana, US
Vampire.find({$or:[{location:'New York, New York, US'},{location:'New Orleans, Louisiana, US'}]},vm);
//love brooding or being tragic
Vampire.find({$or:[{loves:'brooding'},{loves:'being tragic'}]},vm);
//have more than 1000 victims or love marshmallows
Vampire.find({$or:[{victims:{$gt:1000}},{loves:'marshmallows'}]},vm);
//have red hair or green eyes
Vampire.find({$or:[{hair_color:'red'},{eye_color:'green'}]},vm);



//love either frilly shirtsleeves or frilly collars
Vampire.find({$or:[{loves:'frilly shirtsleeves'},{loves:'frilly collars'}]},vm);
//love brooding
Vampire.find({loves:'brooding'},vm);
//love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
Vampire.find({$or:[{loves:' appearing innocent'},{loves:'trickery'},{loves:'lurking in rotting mansions'},{loves:'R&B music'}]},vm);
//love fancy cloaks but not if they also love either top hats or virgin blood _ Hint-You will also have to use $nin _
Vampire.find({loves:'fancy cloaks'},{$or:[{loves:{$nin:'top hats'}},{loves:{$nin:'virgin blood'}}]},vm);


//love ribbons but do not have brown eyes
Vampire.find({$and:[{loves:'ribbons'},{eye_color:'brown'}]},vm);
//are not from Rome
Vampire.find({location:{$nin:'Rome'}},vm);
//do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
Vampire.find({$and:[{loves:{$nin:['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}}]},vm);
//have not killed more than 200 people
Vampire.find({victims:{$not:{$gt:200}}},vm);


//replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
//replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'




//Update 'Guy Man' to have a gender of 'f'
//Update 'Eve' to have a gender of 'm'
//Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
//Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
//Rename 'Eve's' name field to 'moniker'
//We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".



//Remove a single document wherein the hair_color is 'brown'
//We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.