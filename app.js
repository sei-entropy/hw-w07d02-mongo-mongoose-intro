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

Vampire.insertMany(seedData, (err, vampires) => {
  if (err) {
    console.log(err);
  } else{
  console.log('added provided vampire data', vampires);
  }
  db.close();
});



//vampir 1
var vampire1 = {
    name: "Chocula",
    title: "Count",
    hair_color: "brown",
    eye_color: "brown",
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ["cereal", "marshmallows"],
    location: "Minneapolis, Minnesota, US",
    gender: "m",
    victims: 2
  };

  Vampire.create(vampire1, (err, Vampire) => {
      if (err) {
        console.log(err);
      } else {
        console.log("added provided vampire1 data", Vampire);
      }
      db.close();
    });


//vampir 2
var vampire2 = {
  name: "Chocula",
  title: "Count",
  hair_color: "brown",
  eye_color: "brown",
  dob: new Date(1971, 2, 13, 7, 47),
  loves: ["cereal", "marshmallows"],
  location: "Minneapolis, Minnesota, US",
  gender: "m",
  victims: 2
};

Vampire.create(vampire2, (err, Vampire) => {
    if (err) {
      console.log(err);
    } else {
      console.log("added provided vampire2 data", Vampire);
    }
    db.close();
  });

  //vampire 3
  var vampire3 = {
  name: "Chocula",
  title: "Count",
  hair_color: "brown",
  eye_color: "brown",
  dob: new Date(1971, 2, 13, 7, 47),
  loves: ["cereal", "marshmallows"],
  location: "Minneapolis, Minnesota, US",
  gender: "f",
  victims: 2
};

Vampire.create(vampire3, (err, Vampire) => {
    if (err) {
      console.log(err);
    } else {
      console.log("added provided vampire3 data", Vampire);
    }
    db.close();
  });

// //vampire 4
var vampire4 = {
  name: "Chocula",
  title: "Count",
  hair_color: "brown",
  eye_color: "brown",
  dob: new Date(1971, 2, 13, 7, 47),
  loves: ["cereal", "marshmallows"],
  location: "Minneapolis, Minnesota, US",
  gender: "f",
  victims: 2
};

Vampire.create(vampire4, (err, Vampire) => {
  if (err) {
    console.log(err);
  } else {
    console.log("added provided vampire4 data", Vampire);
  }
  db.close();
});


//Querying
/////////////  Select by comparison  /////////////
//1
Vampire.find({ gender :'f'}, (err, vam) => {
  console.log("females vampires "  + vam);
  db.close();
});

//2
Vampire.find({ victims: { $gt: 500 } }, (err, vam) => {
  console.log(" vampires greater than 500 victams are " + vam);
  db.close();
});

//3
Vampire.find({ victims: { $lte: 150 } }, (err, vam) => {
  console.log(" vampires less than or equal to 150 victams are " + vam);
  db.close();
});

//4
Vampire.find({ victims: { $ne: 210234} }, (err, vam) => {
  console.log(" vampires not equal to 210234 victams is " + vam);
  db.close();
});

//5
Vampire.find({ victims: { $gt: 150 ,$lt:500} }, (err, vam) => {
  console.log(" vampires greater than 150 AND fewer than 500 victams are " + vam);
  db.close();
});

/////////////  Select by exists or does not exist  /////////////
//1
Vampire.find({ title: { $exists: true} }, (err, vam) => {
  console.log(
    " vampires with title is  " + vam
  );
  db.close();
});

//2
Vampire.find({ victims: { $exists: false } }, (err, vam) => {
  console.log(" vampires with no victims is  " + vam);
  db.close();
});

//3
Vampire.find(
  { victims: { $exists: false }, title: { $exists: true } },
  (err, vam) => {
    console.log(" vampires with title and no victims is  " + vam);
    db.close();
  });

//4
Vampire.find(
  { victims: { $exists: true }, victims: { $gt: 1000 } },
  (err, vam) => {
    console.log(" vampires with title and no victims is  " + vam);
    db.close();
  });

/////////////  Select with OR  /////////////
//1
Vampire.find({
    $or: [
      { location: "New York, New York, US" },
      { location: "New Orleans, Louisiana, US" }
    ]
  },
  (err, vam) => {
    console.log(" vampires from New York, New York, US or New Orleans, Louisiana, US  " + vam);
    db.close();
  });

//2
Vampire.find({
    $or: [{ loves: "brooding" }, { loves: "being tragic" }]
  },
  (err, vam) => {
    console.log(" vampires brooding or being tragic  " + vam);
    db.close();
  });

//3
Vampire.find({
    $or: [{ victims: { $gte: 1000 } }, { loves: "marshmallows" }]
  },
  (err, vam) => {
    console.log(" vampires brooding or being tragic  " + vam);
    db.close();
  });

//4
Vampire.find({
    $or: [{ eye_color: "green" }, { hair_color: "red" }]
  },
  (err, vam) => {
    console.log(" vampires brooding or being tragic  " + vam);
    db.close();
  });

/////////////  Select objects that match one of several values  /////////////
//1
Vampire.find({ loves: { $elemMatch: { $eq: "frilly shirtsleeves" , $eq: "frilly collars" }}},
  (err, vam) => {
    console.log( " vampires love either frilly shirtsleeves or frilly collars  " + vam
    );
    db.close();
  });

//2
Vampire.find({loves: { $elemMatch: { $eq: "brooding"} } },
  (err, vam) => {
    console.log(
      " vampires love brooding  " + vam
    );
    db.close();
  });

//3
Vampire.find({
    loves: {
      $elemMatch: {
        $eq: "appearing innocent",
        $eq: "trickery",
        $eq: "lurking in rotting mansions",
        $eq: "R&B music"
      }}},
  (err, vam) => {
    console.log(
      " vampires love appearing innocent, trickery, lurking in rotting mansions or R&B music  " + vam);
    db.close();
  });

//4
Vampire.find({ loves: {  $nin : ['top hats','virgin blood'], $eq: "fancy cloaks" }  }, (err, vam) => {
  console.log(
    " vampires love fancy cloaks but not if they also love either top hats or virgin blood  " +vam);
  db.close();
});

/////////////  Negative Selection  /////////////
//1
Vampire.find({ loves: { $eq: "ribbons" }, eye_color : {$ne: "brown"} }, (err, vam) => {
  console.log(" vampires love ribbons but do not have brown eyes  " + vam);
  db.close();
});

//2
Vampire.find({ location: { $not: /^Rome.*/ } }, (err, vam) => {
  console.log(" vampires love ribbons but do not have brown eyes  " + vam);
  db.close();
});

//3
Vampire.find(
  {
    loves: {
      $nin:[ "fancy cloaks", "frilly shirtsleeves", "appearing innocent", "being tragic", "brooding"]
    }},
  (err, vam) => {
    console.log(" vampires love ribbons but do not have brown eyes  " + vam);
    db.close();
  });

//4
Vampire.find({ victims: { $lte : 200 }},
  (err, vam) => {
    console.log(" vampires love ribbons but do not have brown eyes  " + vam);
    db.close();
  });

/////////////  Replace  /////////////
//1
Vampire.replaceOne(
  { name: "Claudia" },
  { name: "Eve", portrayed_by: "Tilda Swinton" },
  console.log("replaced")
);

//2
Vampire.replaceOne(
  { gender: "m" },
  { name: "Guy Man", is_actually: "were-lizard" },
  console.log("replaced")
);

/////////////  Update  /////////////
//1
Vampire.findOneAndUpdate({ name: "Guy Man" }, { $set: { gender: "f" } });

//2
Vampire.findOneAndUpdate({ name: "Eve" }, { $set: { gender: "m" } });

//3
Vampire.findOneAndUpdate(
  { name: "Guy Man" },
  { $set: { hates: ["clothes", "jobs"] } }
);

//4
Vampire.findOneAndUpdate(
  { name: "Guy Man" },
  { $set: { hates: ["alarm clocks", "jackalopes"] } }
);

//5
Vampire.findOneAndUpdate({ name: "Eve" }, { $set: { name: "moniker" } });

// 6
Vampire.updateMany({ gender: "f" }, { $set: { gender: "fems" } });

/////////////  Remove  /////////////
//1
Vampire.remove({ hair_color: "brown" },true);
//2
Vampire.remove({ eye_color: "blue" });