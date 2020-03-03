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
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

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

// Commenting the below so that we don't get repeated documents in the db
// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("added provided vampire data", vampires);
//   mongoose.connection.close();
// });

const vampires = [
  {
    name: "Frey",
    dob: new Date(980, 9, 1, 1, 9),
    hair_color: "grey",
    eye_color: "blue",
    loves: [
      "fresh blood",
      "scaring people",
      "looking fancy",
      "handlebar   mustaches"
    ],
    location: "Transylvania, Romania",
    gender: "m",
    victims: 13889
  },
  {
    name: "Griffin",
    dob: new Date(2020, 5, 2, 4, 2),
    hair_color: "light brown",
    eye_color: "green",
    loves: ["fly", "hunt others", "tell jokes"],
    location: "Bucharest, Romania",
    gender: "m",
    victims: 99333
  },
  {
    name: "Venus",
    dob: new Date(2015, 0, 9, 3, 8),
    hair_color: "red",
    eye_color: "green",
    loves: ["sunlight", "shopping", "Drinking blood"],
    location: "Paris, France",
    gender: "f",
    victims: 390
  },
  {
    name: "Mercy",
    dob: new Date(2003, 6, 2, 8, 8),
    eye_color: "blue",
    loves: ["volunteer work", "taste blood", "water"],
    location: "Berlin, Germany",
    gender: "f",
    victims: 1119999992222
  }
];

// // insert the above array
// Vampire.insertMany(vampires, (err, vampires) => {
//   if (err) {
//     //if there is an error console log it
//     console.log(err);
//   } else {
//     // else show us the created vampire
//     console.log("added provided vampire data", vampires);
//   }
//   // get control of terminal back
//   db.close();
// });

Vampire.find({ gender: "f" }, (err, vampires) => {
  if (err) {
    //if there is an error console log it
    console.log(err);
  }
  // else show us the created vampire
  else console.log(vampires);
  // get control of terminal back
  db.close();
});

Vampire.find({ victims: { $gt: 500 } }, (err, vampires) => {
  if (err) {
    //if there is an error console log it
    console.log(err);
  }
  // else show us the created vampire
  else console.log(vampires);
  // get control of terminal back
  db.close();
});

Vampire.find({ victims: { $ne: 210234 } }, (err, vampires) => {
  if (err) {
    //if there is an error console log it
    console.log(err);
  }
  // else show us the created vampire
  else console.log(vampires);
  // get control of terminal back
  db.close();
});

Vampire.find(
  {
    $and: [{ victims: { $gt: 150 } }, { victims: { $lt: 500 } }]
  },
  (err, vampires) => {
    if (err) {
      //if there is an error console log it
      console.log(err);
    } else {
      // else show us the created vampire
      console.log(vampires);
    }

    // get control of terminal back
    db.close();
  }
);

Vampire.find({ title: { $exists: true } }, (err, vampires) => {
  if (err) {
    //if there is an error console log it
    console.log(err);
  }
  // else show us the created vampire
  else console.log(vampires);
  // get control of terminal back
  db.close();
});

Vampire.find({ victims: { $exists: false } }, (err, vampires) => {
  if (err) {
    //if there is an error console log it
    console.log(err);
  }
  // else show us the created vampire
  else console.log(vampires);
  // get control of terminal back
  db.close();
});

Vampire.find(
  { $and: [{ title: { $exists: true } }, { victims: { $exists: false } }] },
  (err, vampires) => {
    if (err) {
      //if there is an error console log it
      console.log(err);
    }
    // else show us the created vampire
    else console.log(vampires);
    // get control of terminal back
    db.close();
  }
);


Vampire.find(
  { $and: [{ victims: { $exists: true } }, { victims: { $gt: 1000 } }] },
  (err, vampires) => {
    if (err) {
      //if there is an error console log it
      console.log(err);
    }
    // else show us the created vampire
    else console.log(vampires);
    // get control of terminal back
    db.close();
  }
);



Vampire.find(
  { $or: [{ location:"New York, New York, US"}, { location: "New Orleans, Louisiana, US" }] },
  (err, vampires) => {
    if (err) {
      //if there is an error console log it
      console.log(err);
    }
    // else show us the created vampire
    else console.log(vampires);
    // get control of terminal back
    db.close();
  }
);


