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
const myVampires = [
    {
        name: "Awesome Dracula",
        hair_color: "black",
        eye_color: "green",
        dob: new Date(1801, 2, 13, 7, 47),
        loves: ["money", "cars"],
        location: "Minneapolis, Minnesota, US",
        gender: "m",
        victims: 10
    },
    {
        name: "Random The Vampires",
        hair_color: "blonde",
        eye_color: "blue",
        dob: new Date(1990, 2, 13, 7, 47),
        loves: ["programming", "food"],
        location: "Minneapolis, Minnesota, US",
        gender: "m",
        victims: 6
    },
    {
        name: "Baby Vampire",
        hair_color: "black",
        eye_color: "yellow",
        dob: new Date(2020, 2, 13, 7, 47),
        loves: ["swimming", "blood"],
        location: "Minneapolis, Minnesota, US",
        gender: "f",
        victims: 2
    },
    {
        name: "Killer Queen",
        hair_color: "blonde",
        eye_color: "brown",
        dob: new Date(1998, 2, 13, 7, 47),
        loves: ["reading", "fried chicken"],
        location: "Minneapolis, Minnesota, US",
        gender: "f",
        victims: 999
    }
];

// Vampire.insertMany(myVampires, (err, vampires) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("added provided vampire data", vampires);
//     mongoose.connection.close();
// });

// Find all the vampires that that are females
// Vampire.find({ gender: "f" }, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("All females vampires: ", result);
//     }
// });

// Vampire that have greater than 500 victims
// Vampire.find({ victims: { $gte: 500 } }, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("All vampires with greater than 500 victims: ", result);
//     }
// });

// Find all vampires that have fewer than or equal to 150 victims
// Vampire.find({ victims: { $lte: 150 } }, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("all vampires that have fewer than or equal to 150 victims: ", result);
//     }
// });

// Find all vampires that have a victim count is not equal to 210234
// Vampire.find({ victims: { $ne: 210234 } }, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("vampires that have a victim count is not equal to 210234: ", result);
//     }
// });

// Find all vampires that have greater than 150 AND fewer than 500 victims
// Vampire.find({ victims: { $gt: 150, $lt: 500 } }, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("vampires that have greater than 150 AND fewer than 500 victims: ", result);
//     }
// });

// have a key of 'title'
// Vampire.find({ title: { $exists: true } }, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// });

//do not have a key of 'victims'
// Vampire.find({ victims: { $exists: true } }, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// });

// have a title AND no victims
// Vampire.find(
//     { title: { $exists: true }, victims: { $exists: false } },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// have victims AND the victims they have are greater than 1000
// Vampire.find(
//     { victims: { $exists: true }, victims: { $gt: 1000 } },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find(
//     {
//         location: {
//             $in: ["New York, New York, US", "New Orleans, Louisiana, US"]
//         }
//     },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// love brooding or being tragic
// Vampire.find(
//     {
//         loves: {
//             $in: ["brooding", "being tragic"]
//         }
//     },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// have more than 1000 victims or love marshmallows
// Vampire.find(
//     { $or: [{ victims: { $gt: 1000 } }, { loves: "marshmallows" }] },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// have red hair or green eyes
// Vampire.find(
//     { $or: [{ eye_color: "green" }, { hair_color: "red" }] },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

//love either frilly shirtsleeves or frilly collars
// Vampire.find(
//     {
//         loves: {
//             $in: ["frilly shirtsleeves", "frilly collars"]
//         }
//     },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// love brooding
// Vampire.find(
//     {
//         loves: "brooding"
//     },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// Vampire.find(
//     {
//         loves: {
//             $in: [
//                 "appearing innocent",
//                 "trickery",
//                 "lurking in rotting mansions",
//                 "R&B music"
//             ]
//         }
//     },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// love fancy cloaks but not if they also love either top hats or virgin blood _ Hint-You will also have to use $nin _
// Vampire.find(
//     {
//         $and: [
//             { loves: "fancy cloaks" },
//             {
//                 loves: {
//                     $nin: [
//                         "appearing innocent",
//                         "trickery",
//                         "lurking in rotting mansions",
//                         "R&B music"
//                     ]
//                 }
//             }
//         ]
//     },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// love ribbons but do not have brown eyes
// Vampire.find(
//     {
//         loves: "ribbons",
//         eye_color: { $not: { $eq: "brown" } }
//     },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// are not from Rome
// Vampire.find(
//     {
//         location: { $not: { $regex: "Rome" } }
//     },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find(
//     {
//         loves: {
//             $not: {
//                 $in: [
//                     "fancy cloaks",
//                     "frilly shirtsleeves",
//                     "appearing innocent",
//                     "being tragic",
//                     "brooding"
//                 ]
//             }
//         }
//     },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// have not killed more than 200 people
// Vampire.find(
//     {
//         victims: { $not: { $gt: 200 } }
//     },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// replace the vampire called 'Claudia' with a vampire called 'Eve'.
// 'Eve' will have a key called 'portrayed_by'
// with the value 'Tilda Swinton'
// Vampire.findOneAndUpdate(
//     { name: "Claudia" },
//     { $set: { name: "Eve", portrayed_by: "Tilda Swinton" } },
//     { new: true, strict: false },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// replace the first male vampire with another whose name is 'Guy Man',
// and who has a key 'is_actually' with the value 'were-lizard'
// Vampire.findOneAndUpdate(
//     { $and: [{ gender: "Guy Man" }, { is_actually: { $exists: true } }] },
//     { is_actually: "were-lizard" },
//     { new: true },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// Update 'Guy Man' to have a gender of 'f'
// Vampire.findOneAndUpdate(
//     { name: "Guy Man" },
//     { gender: "f" },
//     { new: true },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// Update 'Eve' to have a gender of 'm'
// Vampire.findOneAndUpdate(
//     { name: "Eve" },
//     { gender: "m" },
//     { new: true },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// Update 'Guy Man' to have an array called 'hates' that
// includes 'clothes' and 'jobs'
// Vampire.findOneAndUpdate(
//     { name: "Guy Man" },
//     { hates: ['clothes', 'jobs'] },
//     { new: true },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// Update 'Guy Man's' hates array also to include
// 'alarm clocks' and 'jackalopes'
// Vampire.findOneAndUpdate(
//     { name: "Guy Man" },
//     { $push: { hates: ["alarm clocks", "jackalopes"] } },
//     { new: true },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// Rename 'Eve's' name field to 'moniker'
// Vampire.findOneAndUpdate(
//     { name: "Eve" },
//     { name: "moniker" },
//     { new: true },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// We now no longer want to categorize female gender as "f",
// but rather as fems. Update all females so that the they are of
// gender "fems".
// Vampire.updateMany(
//     { gender: "f" },
//     { gender: "fems" },
//     { new: true },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     }
// );

// Remove a single document wherein the hair_color is 'brown'
// Vampire.findOneAndRemove({ hair_color: "brown" }, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// });

// We found out that the vampires with the blue eyes were just fakes!
// Let's remove all the vampires who have blue eyes from our database.
// Vampire.deleteMany({ eye_color: "blue" }, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// });
