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

/**********************************************************************
Using the create method, create 4 new vampires with any qualities 
that you like two should be male and two should be female.
**********************************************************************/
// const myFirstName= {
// name: 'Salman',
// hair_color: 'black',
// eye_color: 'brown',
// victims: 999,
// gender: 'm'
// }

// Vampire.create(myFirstName, (error, name) => {
//   if (error) {
//     //if there is an error console log it
//     console.log(error);
//   } else {
//     // else show us the created name
//     console.log(name);
//   }
//   // get control of terminal back
//   // else just use control c
//   db.close();
// });
// const mySecondName= {
//   name: 'Moh',
//   hair_color: 'black',
//   eye_color: 'brown',
//   victims: 888,
//   gender: 'm'
//   }
// Vampire.create(mySecondName, (error, name) => {
//   if (error) {
//     //if there is an error console log it
//     console.log(error);
//   } else {
//     // else show us the created name
//     console.log(name);
//   }
//     // get control of terminal back
//   // else just use control c
//   db.close();
// });
// const myThirdName= {
//     name: 'Sara',
//     hair_color: 'black',
//     eye_color: 'brown',
//     victims: 777,
//     gender: 'f'
//     }
//     Vampire.create(myThirdName, (error, name) => {
//       if (error) {
//         //if there is an error console log it
//         console.log(error);
//       } else {
//         // else show us the created name
//         console.log(name);
//       }
//         // get control of terminal back
//   // else just use control c
//   db.close();
// });

//     const myFourthdName= {
//       name: 'May',
//       hair_color: 'black',
//       eye_color: 'brown',
//       victims: 666,
//       gender: 'f'
//       }
//       Vampire.create(myFourthdName, (error, name) => {
//         if (error) {
//           //if there is an error console log it
//           console.log(error);
//         } else {
//           // else show us the created name
//           console.log(name);
//         }
//           // get control of terminal back
//   // else just use control c
//   db.close();
// });
  


//Select by comparison
/**********************************************************************
1-Find all the vampires that that are females
**********************************************************************/

// Vampire.find({ gender: 'f' }, (err, name) => {
//   console.log(name);
//   db.close();
// });

/**********************************************************************
2-have greater than 500 victims
**********************************************************************/

// Vampire.find({ victims: { $gte: 500 } }, (err, name) => {
//   console.log(name);
//   db.close();
// });

/**********************************************************************
3-have fewer than or equal to 150 victims
**********************************************************************/
// Vampire.find({ victims: { $lte: 150 } }, (err, name) => {
//   console.log(name);
//   db.close();
// });

/**********************************************************************
4-have a victim count is not equal to 210234
**********************************************************************/

// Vampire.find({ victims: { $ne: 210234 } }, (err, name) => {
//   console.log(name);
//   db.close();
// });


/**********************************************************************
5-have greater than 150 AND fewer than 500 victims
**********************************************************************/

// Vampire.find({ victims: { $gt: 150, $lt: 500} }, (err, name) => {
//   console.log(name);
//   db.close();
// });



// ----------------------------
// Select by exists or does not exist
/**********************************************************************
1-have a key of 'title'
**********************************************************************/


// Vampire.find({}, 'title -_id', (err, name) => {
//   console.log(name);
//   db.close();
// });

/**********************************************************************
2-do not have a key of 'victims'
**********************************************************************/

// Vampire.find({},'-victims',(err, name) => {
//   console.log(name);
//   db.close();
// });

//other solution 
// Vampire.find({ victims: { $exists: false}},(err, name) => {
  //   console.log(name);
  //   db.close();
// });
/**********************************************************************
3-have a title AND no victims
**********************************************************************/

// Vampire.find({$and: [ { title: { $exists: true } }, { victims: { $exists: false }} ]}, (err, name) => {
//   console.log(name);
//   db.close();
// });

/**********************************************************************
4- have victims AND the victims they have are greater than 1000
**********************************************************************/
// Vampire.find({$and: [ { victims: { $exists: true } }, 
// { victims: { $gt: 1000}} ]},(err, name) => {
//     console.log(name);
//     db.close();
// });



// ----------------------------
// Select with OR
/**********************************************************************
1- are from New York, New York, US or New Orleans, Louisiana, US
**********************************************************************/

// Vampire.find({$or: [ {location: 'New York, New York, US '} , 
// {location: 'New Orleans, Louisiana, US'}]},(err, name) => {
//       console.log(name);
//       db.close();
//   });

/**********************************************************************
2- love brooding or being tragic
**********************************************************************/  
// Vampire.find({$or: [ { loves: 'brooding'} , 
// {loves: 'being tragic'}]},(err, name) => {
//       console.log(name);
//       db.close();
//   });


  /**********************************************************************
3- have more than 1000 victims or love marshmallows
**********************************************************************/  
// Vampire.find({$or: [ { victims: { $gt: 1000 } },
// {loves: 'marshmallows'}]},(err, name) => {
//       console.log(name);
//       db.close();
//   });


    /**********************************************************************
4- have red hair or green eyes
**********************************************************************/  
// Vampire.find({$or: [ { hair_color:'red' },
//   {eye_color: 'green'}]},(err, name) => {
//         console.log(name);
//         db.close();
//     });




// ----------------------------
// Select objects that match one of several values
    /**********************************************************************
1-love either frilly shirtsleeves or frilly collars
**********************************************************************/  
// Vampire.find({$or: [ { loves:'frilly shirtsleeves' },
//   {loves: 'frilly collars'}]},(err, name) => {
//         console.log(name);
//         db.close();
//     });


        /**********************************************************************
2-love brooding
**********************************************************************/  
// Vampire.find({ loves: 'brooding'},
// (err, name) => {
//       console.log(name);
//       db.close();
//   });



 /**********************************************************************
3- love at least one of the following: appearing innocent, 
trickery, lurking in rotting mansions, R&B music
**********************************************************************/ 
// Vampire.find({ $or: [ { loves: 'appearing innocent'}, 
// { loves: 'trickery'}, {loves: 'lurking in rotting mansions'}, 
// { loves: 'R&B music' } ] },
// (err, name) => {
//         console.log(name);
//         db.close();
//     });

 /**********************************************************************
3- love at least one of the following: appearing innocent, 
trickery, lurking in rotting mansions, R&B music
**********************************************************************/ 
// Vampire.find({ $or: [ { loves: 'appearing innocent'}, 
// { loves: 'trickery'}, {loves: 'lurking in rotting mansions'}, 
// { loves: 'R&B music' } ] },
// (err, name) => {
//         console.log(name);
//         db.close();
//     });


 /**********************************************************************
4- love fancy cloaks but not if they also 
love either top hats or virgin blood _ Hint-You will also have to use $nin _
**********************************************************************/ 
// Vampire.find( {
// 	$and: [
// 		{ loves: { $nin: [ 'top hats', 'virgin blood' ]}},
// 		{ loves: 'fancy cloaks' }
//   ]},
//   (err, name) => {
//     console.log(name);
//     db.close();
// });



// ---------------------------------------
// Negative Selection
 /**********************************************************************
1-love ribbons but do not have brown eyes
**********************************************************************/ 

// Vampire.find( {
// $and: [
//   	{ loves: 'ribbons'},
//   	{ eye_color: { $nin: [ 'brown' ]}}
//     ]},
//       (err, name) => {
//     console.log(name);
//     db.close();
// });
  
 /**********************************************************************
2-are not from Rome
**********************************************************************/ 
// Vampire.find( { location: { $nin: ['Rome, Italy'] }},
//      (err, name) => {
//       console.log(name);
//       db.close();
//   });

  
 /**********************************************************************
3-do not love any of the following: [fancy cloaks, 
  frilly shirtsleeves, appearing innocent, being tragic, brooding]
**********************************************************************/ 

// Vampire.find( { loves: { $nin: ['fancy cloaks', 'frilly shirtsleeves',
//  'appearing innocent', 'being tragic', 'brooding']}},
//       (err, name) => {
//       console.log(name);
//       db.close();
//   });

 /**********************************************************************
4-have not killed more than 200 people
**********************************************************************/ 

// Vampire.find( { victims: { $not: { $gt: 200 }}},
//         (err, name) => {
//       console.log(name);
//       db.close();
//   });





// -------------------------------------------
// Replace
 /**********************************************************************
1-replace the vampire called 'Claudia' with a vampire called 'Eve'. 
'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
**********************************************************************/ 

Vampire.findOneAndUpdate(
  { name: 'Claudia' },
  { $set: { name: 'Eva' } }, 
  { $set: {portrayed_by:'Tilda Swinton' }},
  { new: true },
        (err, name) => {
      console.log(name);
      db.close();
  });
 /**********************************************************************
2-replace the first male vampire with another whose name is 'Guy Man', 
and who has a key 'is_actually' with the value 'were-lizard'
**********************************************************************/ 