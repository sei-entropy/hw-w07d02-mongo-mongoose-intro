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

/****************my code */
/* Vampire.insertMany(seedData, (err, vampires) => {
  if (err) {
    console.log(err);
  }
  console.log('added provided vampire data', vampires);
  mongoose.connection.close();
});  */

/*  const vam1 = {
  name: 'jojo',
  hair_color: 'Black',
  eye_color:'Black',
  dob: new Date(1919, 5, 6, 7, 19),
  loves: ['cat', 'foode'],
  location: 'New York',
  gender: 'f',
  victims: 19
}
Vampire.create(vam1, (error, vampire) => {
  if(error){
      console.log(error);
  } else {
      console.log(vampire);
  }
  //db.close()
}) 

const vam2 = {
  name: 'huda',
  hair_color: 'Brown',
  eye_color:'Brown',
  dob: new Date(1991, 8, 4, 2, 20),
  loves: ['sky', 'whales'],
  location: 'In the sea',
  gender: 'f',
  victims: 500
}
Vampire.create(vam2, (error, vampire) => {
  if(error){
      console.log(error);
  } else {
      console.log(vampire);
  }
}) 
const vam3 = {
  name: 'fasail',
  hair_color: 'Black',
  eye_color:'Black',
  dob: new Date(1991, 8, 5, 22, 30),
  loves: ['clothes'],
  location: 'Jeedah',
  gender: 'm',
  victims: 600
}
Vampire.create(vam3, (error, vampire) => {
  if(error){
      console.log(error);
  } else {
      console.log(vampire);
  }
}) 
 const vam4 = {
  name: 'ahmad',
  hair_color: 'Black',
  eye_color:'red',
  dob: new Date(1931, 33, 52, 2, 30),
  loves: ['nothing'],
  location: 'ةars',
  gender: 'm',
  victims: 300
}
Vampire.create(vam4, (error, vampire) => {
  if(error){
      console.log(error);
  } else {
      console.log(vampire);
  }
}) */
//Find all the vampires that that are females
/* Vampire.find({gender: 'f'}, (err, vampire) => {
    console.log(vampire);
}) */

//have greater than 500 victims
/* Vampire.find({victims:{$gte:500}}, (err, vampire) => {
    console.log(vampire);
})  */

//have fewer than or equal to 150 victims
/* Vampire.find({victims:{$lte:150}}, (err, vampire) => {
    console.log(vampire);
})  */ 

//have a victim count is not equal to 210234
/* Vampire.find({victims:{$ne: 210234}}, (err, vampire) => {
    console.log(vampire);
})  */ 

//have greater than 150 AND fewer than 500 victims

//................Select by exists or does not exist
//have a key of 'title'

/*  Vampire.find({title: {$exists: true}}, (err, vampire) => {
       console.log(vampire);
 
   }) */
// do not have a key of 'victims'

/*    Vampire.find({victims: {$exists: false}}, (err, vampire) => {
    console.log(vampire);

}) */

// have a title AND no victims

/*   Vampire.find({ $and: [ { victims: { $exists: false } }, { title: { $exists: false } } ] } , (err, vampire) => {
  console.log(vampire);

})  */ 
//have victims AND the victims they have are greater than 1000
/*   Vampire.find({ $and: [ { victims: { $exists: true } }, {victims:{$gte:1000} } ] } , (err, vampire) => {
  console.log(vampire);

})  */

//...............Select with OR

//are from New York, New York, US or New Orleans, Louisiana, US

/*  Vampire.find({$or: [{location: 'New York, New York, US'}, {location: 'New Orleans, Louisiana, US'} ] } , (err, vampire) => {
  console.log(vampire);

}) */  

//love brooding or being tragic

/*    Vampire.find({ $or: [ { loves:  'brooding'  }, {loves: 'being tragic' } ] } , (err, vampire) => {
  console.log(vampire);

}) */  

//have more than 1000 victims or love marshmallows
/* 
   Vampire.find({ $or: [ { victims: {$gte :1000}  }, {loves: ' marshmallows' } ] } , (err, vampire) => {
  console.log(vampire);

}) */ 

//have red hair or green eyes

/*  Vampire.find({ $or: [ { hair_color: 'red' }, {eye_color: ' green' } ] } , (err, vampire) => {
  console.log(vampire);

})  */

//.................Select objects that match one of several values


//love either frilly shirtsleeves or frilly collars
/* Vampire.find({loves: {$in: ['frilly shirtsleeves', 'frilly collars']} } , (err, vampire) => {
    console.log(vampire);

})
 */
//love brooding
/*  Vampire.find({loves: {$in: ['brooding']} } , (err, vampire) => {
  console.log(vampire);

}) */
// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music

/* Vampire.find({loves: {$in: ['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music']} } , (err, vampire) => {
  console.log(vampire);

}) */ 

// love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
/*  Vampire.find ( {loves: {$in: ['fancy cloaks'], $nin: ['top hat','virgin blood']} } , (err, vampire) => {
     console.log(vampire);
 }) */
 

//................Negative Selection

//love ribbons but do not have brown eyes


//are not from Rome



//do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]



//have not killed more than 200 people


//...............Replace


//replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'




//replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'



//.......................Update




/**********************************************************************
Write Your Code Below

**********************************************************************/
