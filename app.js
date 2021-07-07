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

// Inserting seed data that was provided which includes many vampires data
// Commenting the below so that we don't get repeated documents in the db
Vampire.insertMany(seedData, (err, vampires) => {
  if (err) {
    console.log(err);
  }
  console.log("added provided vampire data", vampires);
  mongoose.connection.close();
});

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

// insert the above array
// Commenting the below so that we don't get repeated documents in the db
Vampire.insertMany(vampires, (err, vampires) => {
  if (err) {
    //if there is an error console log it
    console.log(err);
  } else {
    // else show us the created vampire
    console.log("added provided vampire data", vampires);
  }
  // get control of terminal back
  db.close();
});


// Find all the vampires that are females
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


// have greater than 500 victims
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


// have fewer than or equal to 150 victims
Vampire.find({ victims: { $lte: 150 } }, (err, vampires) => {
  if (err) {
    //if there is an error console log it
    console.log(err);
  }
  // else show us the created vampire
  else console.log(vampires);
  // get control of terminal back
  db.close();
});


// have a victim count is not equal to 210234
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


// have greater than 150 AND fewer than 500 victims
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


// Select all the vampires that have a key of 'title'
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


// Select all the vampires that do not have a key of 'victims'
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


// Select all the vampires that have a title AND no victims
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


// Select all the vampires that have victims AND the victims they have are greater than 1000
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


// Select all the vampires that are from New York, New York, US or New Orleans, Louisiana, US
Vampire.find(
  {
    $or: [
      { location: "New York, New York, US" },
      { location: "New Orleans, Louisiana, US" }
    ]
  },
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


// Select all the vampires that love brooding or being tragic
Vampire.find(
  { loves: { $in: ["brooding", "being tragic"] } },
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


// Select all the vampires that have more than 1000 victims or love marshmallows
Vampire.find(
  { $or: [{ loves: { $in: ["marshmallows"] } }, { victims: { $gt: 1000 } }] },
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


// Select all the vampires that have red hair or green eyes
Vampire.find(
  { $or: [{ hair_color: "red" }, { eye_color: "green"}] },
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

// Select all the vampires that love either frilly shirtsleeves or frilly collars
Vampire.find({ loves: { $in: ["frilly shirtsleeves", "frilly collars"] } },
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


// Select all the vampires that love brooding
Vampire.find({ loves: { $in: ["brooding"] } },
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


// Select all the vampires that love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
Vampire.find({ loves: { $in: ["appearing innocent", "trickery", "lurking in rotting mansions", "R&B music"] } },
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


// Select all the vampires that love fancy cloaks but not if they also love either top hats or virgin blood 
Vampire.find({ $and: [ {loves: { $in: ["fancy cloaks"] } }, {loves: {$nin: ["top hats", "virgin blood"]} }] },
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


// Select all vampires that love ribbons but do not have brown eyes
Vampire.find({ $and: [{ loves: {$in: ["ribbons"]} }, {eye_color: {$ne:"brown"} }]},
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


// Select all vampires that are not from Rome
Vampire.find({location: {$nin: ['Rome, Italy']}}, (err, vampires) => {
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


// Select all vampires that do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
Vampire.find({loves: {$nin: ["fancy cloaks", "frilly shirtsleeves", "appearing innocent", "being tragic", "brooding"]}},
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


// Select all vampires that have not killed more than 200 people
Vampire.find({victims: {$lte: 200}},
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


// replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
Vampire.findOneAndReplace({name: "Claudia"}, {name: "Eve", portrayed_by: "Tilda Swinton"}, {new:true}, (error, vampires) => {
  if (error) {
    //if there is an error console log it
    console.log(err);
  }
  // else show us the created vampire
  else console.log(vampires);
  // get control of terminal back
  db.close();
});


// replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'
Vampire.findOneAndReplace({gender: "m"}, {name: "Guy Man", is_actually: "were-lizard"}, {new: true}, (error, vampires) => {
  if (error) {
    //if there is an error console log it
    console.log(err);
  }
  // else show us the created vampire
  else console.log(vampires);
  // get control of terminal back
  db.close();
});


// Update 'Guy Man' to have a gender of 'f'
Vampire.findOneAndUpdate({name: "Guy Man"}, {gender: "f"}, (error, vampires) => {
  if (error) {
    //if there is an error console log it
    console.log(err);
  }
  // else show us the created vampire
  else console.log(vampires);
  // get control of terminal back
  db.close();
});


// Update 'Eve' to have a gender of 'm'
Vampire.findOneAndUpdate({name: "Eve"}, {gender: "m"}, (error, vampires) => {
  if (error) {
    //if there is an error console log it
    console.log(err);
  }
  // else show us the created vampire
  else console.log(vampires);
  // get control of terminal back
  db.close();
});


// Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
Vampire.findOneAndUpdate({name: "Guy Man"}, {hates: ["clothes", "jobs"]}, {new: true}, (error, vampires) => {
  if (error) {
    //if there is an error console log it
    console.log(err);
  }
  // else show us the created vampire
  else console.log(vampires);
  // get control of terminal back
  db.close();
});


// Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
Vampire.findOneAndUpdate({name: "Guy Man"}, {$push: {hates: {$each: ["alarm clocks", "jackalopes"]} }}, {new:true},  (error, vampires) => {
  if (error) {
    //if there is an error console log it
    console.log(err);
  }
  // else show us the created vampire
  else console.log(vampires);
  // get control of terminal back
  db.close();
});


// Rename 'Eve's' name field to 'moniker'
Vampire.findOneAndUpdate({name: "Eve"}, {name: "moniker"}, {new: true}, (error, vampires) => {
  if (error) {
    //if there is an error console log it
    console.log(err);
  }
  // else show us the created vampire
  else console.log(vampires);
  // get control of terminal back
  db.close();
});


// We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems"
Vampire.update({gender: "f"}, {gender: "fems"}, {new: true, multi: true}, (error, vampires) => {
  if (error) {
    //if there is an error console log it
    console.log(err);
  }
  // else show us the created vampire
  else console.log(vampires);
  // get control of terminal back
  db.close();
});


// Remove a single document wherein the hair_color is 'brown'
Vampire.findOneAndRemove({hair_color: "brown"}, (error, vampires) => {
    if (error) {
      //if there is an error console log it
      console.log(err);
    }
    // else show us the created vampire
    else console.log(vampires);
    // get control of terminal back
    db.close();
  });


// We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database
Vampire.remove({eye_color: "blue"}, {multi: true}, (error, vampires) => {
    if (error) {
      //if there is an error console log it
      console.log(err);
    }
    // else show us the created vampire
    else console.log(vampires);
    // get control of terminal back
    db.close();
  });