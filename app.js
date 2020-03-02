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
Select by comparison
**********************************************************************/
var vampire = {
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
/*1*/
// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("added provided vampire data", vampires);
//   mongoose.connection.close();
// });
/*2*/
// Vampire.find({ gender: "m" }, (err, Vampire) => {
//   console.log(Vampire);
//   db.close();
// });
/*4*/
// Vampire.find({ victims: { $gt: 500 } }, (err, Vampire) => {
//   console.log(Vampire);
//   db.close();
// });
/*4*/
// Vampire.find({ victims: { $lte: 150 } }, (err, Vampire) => {
//   console.log(Vampire);
//   db.close();
// });
// Vampire.find(
//   { $and: [{ victims: { $gt: 150 } }, { victims: { $lt: 500 } }] },
//   (err, Vampire) => {
//     console.log(Vampire);
//     db.close();
//   }
// );
/**********************************************************************
Select by exists or does not exist
**********************************************************************/
/*1*/
// Vampire.find({title: {$exists:true }}, (err, Vampire) => {
//   console.log(Vampire);
//   db.close();
// });

/*2*/
// Vampire.find({title: {$exists:true }}, (err, Vampire) => {
//   console.log(Vampire);
//   db.close();
// });

/*3*/
// Vampire.find({ victims: { $exists: false } }, (err, Vampire) => {
//   console.log(Vampire);
//   db.close();
// });

/*4*/
// Vampire.find({ $and : [{title: { $exists: true }},{victims: { $exists: false }}] }, (err, Vampire) => {
//   console.log(Vampire);
//   db.close();
// });

/*5*/
// Vampire.find({ $and : [{victims: { $exists: true }},{victims: { $gt : 1000 }}] }, (err, Vampire) => {
//   console.log(Vampire);
//   db.close();
// });

/**********************************************************************
Select with OR
**********************************************************************/
/*1*/
// Vampire.find(
//   {
// $or: [
//   { location: "New York, New York, US" },
//   { location: "New Orleans, Louisiana, US" }
// ]
//   },
//   (err, Vampire) => {
//     console.log(Vampire);
//     db.close();
//   }
// );
/*2*/
// Vampire.find(
//   {
//     $or: [{ loves: "brooding" }, { loves: "being tragic" }]
//   },
//   (err, Vampire) => {
//     console.log(Vampire);
//     db.close();
//   }
// );
/*3*/
// Vampire.find(
//   {
//     $or: [{ victims:{$gt:1000}}, { loves: "love marshmallows" }]
//   },
//   (err, Vampire) => {
//     console.log(Vampire);
//     db.close();
//   }
// );
/*4*/
// Vampire.find(
//   {
//     $or: [{ hair_color: "red"}, { eye_color: "green" }]
//   },
//   (err, Vampire) => {
//     console.log(Vampire);
//     db.close();
//   }
// );
/**********************************************************************
Select objects that match one of several values
**********************************************************************/
/*1*/
// Vampire.find(
//   {
//     $or: [
//       { loves: { $in: "frilly shirtsleeves" } },
//       { loves: { $in: "frilly collars" } }
//     ]
//   },
//   (err, vampire) => {
//     console.log(vampire);
//   }
// );
/*2*/
// Vampire.find({loves: {$in: 'brooding'}}, (err, vampire) => {
//         console.log(vampire);
// });
// Vampire.find(
//   {
//     $or: [
//       { loves: { $in: "appearing innocent" } },
//       { loves: { $in: "trickery" } },
//       { loves: { $in: "lurking in rotting mansions" } },
//       { loves: { $in: "R&B music" } }
//     ]
//   },
//   (err, vampire) => {
//     console.log(vampire);
//   }
// );
// Vampire.find(
//   {
//     loves: { $in: "fancy cloaks", $nin: ["top hats", "virgin blood"] }
//   },
//   (err, vampire) => {
//     console.log(vampire);
//   }
// );
/**********************************************************************
Negative Selection
**********************************************************************/
/*1*/

// Vampire.find(
//   {
//     $and: [{ loves: "ribbons " }, { eye_color: { $nin: "brown"} }]
//   },
//   (err, Vampire) => {
//     console.log(Vampire);
//     db.close();
//   }
// );
/*2*/
// Vampire.find({location: {$not :"Rome" }},(err, Vampire) => {
//     console.log(Vampire);
//     db.close();
//   }
// );
/*3*/
// Vampire.find(
//   {
//     loves: {
//       $not: [
//         "fancy cloaks",
//         "frilly shirtsleeves",
//         "appearing innocent",
//         "being tragic",
//         "brooding"
//       ]
//     }
//   },
//   (err, Vampire) => {
//     console.log(Vampire);
//     db.close();
//   }
// );
/*4*/
// Vampire.find({victims: {$not: 200 }} ,
//   (err, Vampire) => {
//     console.log(Vampire);
//     db.close();
//   }
// );
/**********************************************************************
Replace
**********************************************************************/
/*1*/
// Vampire.findOneAndUpdate(
//   { Vampire: "Claudia" },
//   {
//     $set: {
//       name: "Eve",
//       portrayed_by: "Tilda-Swinton"
//     }
//   },
//   { new: true },
//   (err, vampire) => {
//     console.log(vampire);
//   }
// );

/*2*/
// Vampire.findOneAndUpdate(
//   { gender: "m" },
//   { $set: { name: "Guy Man", is_actually: "were-lizard" } },
//   { new: true },
//   (err, vampire) => {
//     console.log(vampire);
//   }
// );
/**********************************************************************
Update
**********************************************************************/
/*1*/

// Vampire.findOneAndUpdate(
//   { name: "Guy Man" },
//   { $set: { gender: "f" } },
//   { new: true},
//   (err, vampire) => {
//       console.log(vampire);
//   }
// );

/*2*/

// Vampire.findOneAndUpdate(
//   { name: "Eve'" },
//   { $set: { gender: "m" } },
//   { new: true},
//   (err, vampire) => {
//       console.log(vampire);
//   }
// );

/*3*/

// Vampire.findOneAndUpdate(
//   { name: "Guy Man'" },
//   { $set: {hates:['clothes',  'jobs'} },
//   { new: true},
//   (err, vampire) => {
//       console.log(vampire);
//   }
// );

/*4*/

// Vampire.findOneAndUpdate(
//   { name: "Guy Man'" },
//   { $set: {hates:['alarm clocks' ,'jackalopes'} },
//   { new: true},
//   (err, vampire) => {
//       console.log(vampire);
//   }
// );

/*5*/

// Vampire.findOneAndUpdate(
//   { name: "Guy Man'" },
//   { $set: {name:'moniker'} },
//   { new: true},
//   (err, vampire) => {
//       console.log(vampire);
//   }
// );

/*6*/

// Vampire.findOneAndUpdate(
//   { gender : "f" },
//   { $set: {gender:'fems'} },
//   { new: true},
//   (err, vampire) => {
//       console.log(vampire);
//   }
// );
/**********************************************************************
Remove
**********************************************************************/

/*1*/

// Vampire.deleteOne({
// 	hair_color:
// 	{$eq: 'brown'}
// }, (err, Vampire) => {
// 		console.log(Vampire)
// 	}
// 	})

/*2*/
// Vampire.deleteMany({
// 	eye_color:
// 	{$eq: 'blue'}
// }, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})
