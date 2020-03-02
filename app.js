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
const myFirstTweet = [
  {
    title: "Deep Thoughts",
    body: "Friends, I have been navel-gazing"
  },
  {
    title: "Deep Thoughts",
    body: "Friends,  I have been navel-gazing"
  }
];
console.log(myFirstTweet);

// adding all the data from the seed_vampire
Vampire.insertMany(seedData, (err, vampires) => {
  if (err) {
    console.log(err);
  }
  console.log("added provided vampire data", vampires);
  mongoose.connection.close();
});

const newVampires4 = [
  {
    name: "Count Chocula V2",
    hair_color: "brown",
    eye_color: "brown",
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ["cereal", "marshmallows"],
    location: "Minneapolis, Minnesota, US",
    gender: "m",
    victims: 2
  },
  {
    name: "Dracula V2",
    dob: new Date(937, 0, 24, 13, 0),
    hair_color: "brown",
    eye_color: "blue",
    loves: [
      "Winona Ryder",
      "top hats",
      "fancy cloaks",
      "handlebar   mustaches"
    ],
    location: "Transylvania, Romania",
    gender: "m",
    victims: 1238
  },
  {
    name: "Elizabeth Bathory V2 ",
    dob: new Date(1560, 8, 7, 22, 10),
    hair_color: "brown",
    eye_color: "brown",
    loves: ["virgin blood", "fancy cloaks", "frilly collars"],
    location: "Nyírbátor, Hungary",
    gender: "f",
    victims: 980
  },
  {
    name: "Lestat V2",
    dob: new Date(1760, 11, 9, 18, 44),
    hair_color: "blonde",
    eye_color: "blue",
    loves: [
      "frilly shirtsleeves",
      "frilly collars",
      "lurking in   rotting mansions",
      "Louis"
    ],
    location: "Auvergne, France",
    gender: "m",
    victims: 324
  }
];
// creating new vampires
Vampire.create(newVampires4, (err, vampires) => {
  if (err) {
    console.log(err);
  }
  console.log("added provided vampire data", vampires);
  mongoose.connection.close();
});
