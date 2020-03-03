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

// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('added provided vampire data', vampires);
//   mongoose.connection.close();
// });


var vampireone = {
  name: 'Chocula',
  title: 'Count',
  hair_color: 'brown',
  eye_color: 'brown',
  dob: new Date(1971, 2, 13, 7, 47),
  loves: ['cereal', 'marshmallows'],
  location: 'Minneapolis, Minnesota, US',
  gender: 'm',
  victims: 2
};

// Vampire.create(vampireone, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('added provided vampire data', vampires);
//   mongoose.connection.close();
// });


var vampiretwo = {
  name: 'Chocula',
  title: 'Count',
  hair_color: 'brown',
  eye_color: 'brown',
  dob: new Date(1971, 2, 13, 7, 47),
  loves: ['cereal', 'marshmallows'],
  location: 'Minneapolis, Minnesota, US',
  gender: 'm',
  victims: 2
};

// Vampire.create(vampiretwo, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('added provided vampire data', vampires);
//   mongoose.connection.close();
// });


var vampirethree = {
  name: 'Chocula',
  title: 'Count',
  hair_color: 'brown',
  eye_color: 'brown',
  dob: new Date(1971, 2, 13, 7, 47),
  loves: ['cereal', 'marshmallows'],
  location: 'Minneapolis, Minnesota, US',
  gender: 'f',
  victims: 2
};

// Vampire.create(vampirethree, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('added provided vampire data', vampires);
//   mongoose.connection.close();
// });

var vampirefour = {
  name: 'Chocula',
  title: 'Count',
  hair_color: 'brown',
  eye_color: 'brown',
  dob: new Date(1971, 2, 13, 7, 47),
  loves: ['cereal', 'marshmallows'],
  location: 'Minneapolis, Minnesota, US',
  gender: 'f',
  victims: 2
};

// Vampire.create(vampirefour, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('added provided vampire data', vampires);
//   mongoose.connection.close();
// });



//1-Find all the vampires that that are females

Vampire.find({ gender: 'm' }, (err, res) => {
  console.log(res);
  // db.close();
});

//2-have greater than 500 victims

Vampire.find({ victims: { $gt: 500 } }, (err, res) => {
  console.log(res);
  // db.close();
});

//3-have fewer than or equal to 150 victims

Vampire.find({ victims: { $lte: 150 } }, (err, res) => {
  console.log(res);
  // db.close();
});

//4-have a victim count is not equal to 210234
Vampire.find({ victims: { $ne: 210234 } }, (err, res) => {
  console.log(res);
  // db.close();
});

//5-have greater than 150 AND fewer than 500 victims
Vampire.find( { $and: [ { victims: { $gt: 150 } }, { victims: { $lt: 500 } } ] }, (err, res) => {
  console.log(res);
  // db.close();
});
 
//1-have a key of 'title'
Vampire.find({ title: { $exists: true } }, (err, res) => {
  console.log(res);
  // db.close();
});

//2-do not have a key of 'victims'
Vampire.find({ victims: { $exists: false } }, (err, res) => {
  console.log(res);
  // db.close();
});

//3-have a title AND no victims
Vampire.find({ $and: [ { victims: { $exists: false } }, { title: { $exists: true }} ] }, (err, res) => {
  console.log(res);
  // db.close();
});

//4-have victims AND the victims they have are greater than 1000
  Vampire.find({ $and: [ { victims: { $exists: true } }, { victims: { $gt: 1000 }} ] }, (err, res) => {
  console.log(res);
  // db.close();
});

//1-are from New York, New York, US or New Orleans, Louisiana, US
Vampire.find({ $or: [ { location: "New York, New York, US" }, { location: "New Orleans, Louisiana, US"} ] }, (err, res) => {
  console.log(res);
  // db.close();
});

//2-love brooding or being tragic
Vampire.find({ $or: [ { loves: "brooding" }, { loves: "being tragic"} ] }, (err, res) => {
  console.log(res);
  // db.close();
});

//3-have more than 1000 victims or love marshmallows
Vampire.find({ $or: [ { loves: "marshmallows" }, { victims: { $gt: 1000 }} ] }, (err, res) => {
  console.log(res);
  // db.close();
});

//4-have red hair or green eyes
Vampire.find({ $or: [ { hair_color: "red" }, { eye_color: "green"} ] }, (err, res) => {
  console.log(res);
  // db.close();
});

//1-love either frilly shirtsleeves or frilly collars
Vampire.find({ $or: [ { loves: "frilly shirtsleeves" }, { loves: "frilly collars"} ] }, (err, res) => {
  console.log(res);
  // db.close();
});

//2-love brooding
Vampire.find({ loves: "brooding"}, (err, res) => {
  console.log(res);
  // db.close();
});

//3-love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
Vampire.find({ $or: [ { loves: "appearing innocent" }, { loves: "trickery"},{ loves: "lurking in rotting mansions"},{ loves: "R&B music"} ] }, (err, res) => {
  console.log(res);
  // db.close();
});

//4-love fancy cloaks but not if they also love either top hats or virgin blood _ Hint-You will also have to use $nin _
Vampire.find({ $and: [ { loves: "fancy cloaks" }, { loves: { $nin: [ "top hats", "virgin blood"  ] } } ] }, (err, res) => {
  console.log(res);
  // db.close();
});

//1-love ribbons but do not have brown eyes
Vampire.find({ $and: [ { loves: "ribbons" }, { eye_color: { $nin: [ "brown"] } } ] }, (err, res) => {
  console.log(res);
  // db.close();
});

//2-are not from Rome
Vampire.find( { location: { $nin: [ "Rome"] } }, (err, res) => {
  console.log(res);
  // db.close();
});

//3-do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
Vampire.find( { loves: { $nin: [ "fancy cloaks","frilly shirtsleeves","appearing innocent","being tragic","brooding"] } }, (err, res) => {
  console.log(res);
  // db.close();
});

//4-have not killed more than 200 people
Vampire.find({ victims: { $lte: 200 }} , (err, res) => {
  console.log(res);
  // db.close();
});

//1-replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
Vampire.findOneAndUpdate(
  { name: 'Claudia' },
  { name:'Eve'},
  { new: true },
  (err, tweet) => {
    if (err) {
      console.log(err);
    } else {
      console.log(tweet);
    }
    // db.close();
  }
);
Vampire.findOneAndUpdate(
  { name: 'Eve' },
  {portrayed_by:"Tilda Swinton"},
  { new: true },
  (err, tweet) => {
    if (err) {
      console.log(err);
    } else {
      console.log(tweet);
    }
    // db.close();
  }
);

//2-replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'
Vampire.findOneAndUpdate(
  { gender: 'm' },
  { name:'Guy Man'},
  { new: true },
  (err, tweet) => {
    if (err) {
      console.log(err);
    } else {
      console.log(tweet);
    }
    // db.close();
  }
);


//1-Update 'Guy Man' to have a gender of 'f'
Vampire.findOneAndUpdate(
  { name:'Guy Man' },
  { gender:'f'},
  { new: true },
  (err, tweet) => {
    if (err) {
      console.log(err);
    } else {
      console.log(tweet);
    }
    // db.close();
  }
);

//2-Update 'Eve' to have a gender of 'm'
Vampire.findOneAndUpdate(
  { name:'Eve' },
  { gender:'m'},
  { new: true },
  (err, tweet) => {
    if (err) {
      console.log(err);
    } else {
      console.log(tweet);
    }
    // db.close();
  }
);

//3-update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
Vampire.findOneAndUpdate(
  { name:'Guy Man' },
  { hates:['clothes','jobs']},
  { new: true },
  (err, tweet) => {
    if (err) {
      console.log(err);
    } else {
      console.log(tweet);
    }
    // db.close();
  }
);

//4-Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
Vampire.findOneAndUpdate(
  { name:'Guy Man' },
  { hates:['clothes','jobs','alarm clocks','jackalopes']},
  { new: true },
  (err, tweet) => {
    if (err) {
      console.log(err);
    } else {
      console.log(tweet);
    }
    // db.close();
  }
);

//5-Rename 'Eve's' name field to 'moniker'
Vampire.findOneAndUpdate(
  { name:'Eve' },
  { name:'moniker'},
  { new: true },
  (err, tweet) => {
    if (err) {
      console.log(err);
    } else {
      console.log(tweet);
    }
    // db.close();
  }
);


//6-We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".
Vampire.findOneAndUpdate(
  { gender: 'f' },
  { gender:'fems'},
  {multi: true},
  (err, tweet) => {
    if (err) {
      console.log(err);
    } else {
      console.log(tweet);
    }
    // db.close();
  }
);


//1-Remove a single document wherein the hair_color is 'brown'
Vampire.findOneAndRemove({ hair_color: 'brown' }, (err, tweet) => {
  if (err) {
    console.log(err);
  } else {
    console.log('This is the deleted tweet:', tweet);
  }
  // db.close();
});



//2-We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
Vampire.findOneAndRemove({ eye_color: 'blue' }, (err, tweet) => {
  if (err) {
    console.log(err);
  } else {
    console.log('This is the deleted tweet:', tweet);
  }
  // db.close();
});