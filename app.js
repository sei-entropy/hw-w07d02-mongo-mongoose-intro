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
// var vampire = {
//   name: 'Chocula',
//   title: 'Count',
//   hair_color: 'brown',
//   eye_color: 'brown',
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ['cereal', 'marshmallows'],
//   location: 'Minneapolis, Minnesota, US',
//   gender: 'm',
//   victims: 2
// };
// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('added provided vampire data', vampires);
//   mongoose.connection.close();
// });
//Using the create method, create 4 new vampires with any qualities that you like two should be male and two should be female
// const CreaVampire = [
// 	{
//     name: 'Count Chocula',
//     hair_color: 'brown',
//     eye_color: 'brown',
//     dob: new Date(1971, 2, 13, 7, 47),
//     loves: ['cereal','marshmallows'],
//     location: 'Minneapolis, Minnesota, US',
//     gender: 'm',
//     victims: 2
//   },{
//     name: 'Dracula',
//     dob: new Date(937, 0, 24, 13, 0),
//     hair_color: 'brown',
//     eye_color: 'blue',
//     loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar   mustaches'],
//     location: 'Transylvania, Romania',
//     gender: 'm',
//     victims: 1238
//   },{
//     name: 'Elizabeth Bathory ',
//     dob: new Date(1560, 8, 7, 22, 10),
//     hair_color: 'brown',
//     eye_color: 'brown',
//     loves: ['virgin blood', 'fancy cloaks','frilly collars'],
//     location: 'Nyírbátor, Hungary',
//     gender: 'f',
//     victims: 980
//   },{
//     name:'Claudia',
//     dob: new Date(1793, 2, 7, 8, 30),
//     hair_color: 'blonde',
//     eye_color: 'blue',
//     loves: ['doll babies', 'ribbons', 'appearing innocent', '  trickery'],
//     location: 'New Orleans, Louisiana, US',
//     gender: 'f',
//     victims: 290
//   }
//     ];
    
//   Vampire.create(CreaVampire , (error, vampires) => {
//     if (error) {
  
//       console.log(error);
//     } else {

//       console.log(vampires);
//     }
  
//     db.close();
//   });

  	//Find all the vampires that that are females
// Vampire.find({gender:'f'} , (err, vampires) => {
//   console.log(vampires);
//   db.close();
// });


//have greater than 500 victims
// Vampire.find({ victims: { $gt: 500}},(err,vampires)=>{
//   console.log(vampires);
//     db.close();
//   });


//have fewer than or equal to 150 victims
// Vampire.find({ victims: { $lte: 150 } }, (err, Vampire) => {
//   console.log(Vampire);
//   db.close();
// });

//have a victim count is not equal to 210234
// Vampire.find({ victims: { $ne: 210234 } }, (err, Vampire) => {
//   console.log(Vampire);
//   db.close();
// });
//have greater than 150 AND fewer than 500 victims
// Vampire.find({$and:[{victims:{$gt:150}},	{victims:{$lt:500}}]},(err,vampires)=>{
//   console.log(Vampire);
//   db.close();
// });

//Select by exists or does not exist
// Vampire.find({title:{exists:true}},{victims:{exists:false}},
// {$and:	[{title:{exists:true}}, {victims:{exists:false}}]},
//   {$and:	[{victims:{exists:true}}, {victims:{$gt:1000}}]},
// (err,vampires)=>{
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log(vampires)
// 	}
// });
//Select with OR
// Vampire.find(
//         {$or:[{location:'New York, New York,US'}, {location:'New Orleans, Louisiana,US'}]},
//         {$or:[{loves:'brooding'}, {loves:'being tragic'}]},
//         {$or:[{victims:{$gt:1000}}, {loves:'marshmallows'}]},
//           {$or:[{hair_color:'red'}, {hair_color:'green'}]},
//         (err,vampires)=>{
//          if(err){
//         console.log(err)
//          }else{
//         console.log(vampires)
//       }
//     });

//Select objects that match one of several values
//Vampire.find(
  //     { $or: [ { loves: {$in: ['frilly shirts']} }, { loves: {$in: ['frilly collars']} } ]
 // (err,vampires)=>{
    //          if(err){
    //         console.log(err)
    //          }else{
    //         console.log(vampires)
    //       }
    //     });
    // Vampire.find({
    //       loves: {$in: ['brooding']} },
    //     (err,vampires)=>{
    //          if(err){
    //         console.log(err)
    //          }else{
    //         console.log(vampires)
    //       }
    //     });

    // Vampire.find(  { $or: [ { loves: 'appearing innocent' }, { loves: 'trickery' },
    //  { loves: 'lurking in rotting mansions' } , { loves: 'R&B music' } ] },
    //   (err, vampires) => {
    // console.log(vampires);
    // db.close();
    //  });
      
    // Vampire.find(
    //       { $and: [{loves: 'fancy cloaks'}, {loves: {$nin: ['top hats', 'virgin blood']}}]}, 
    //       (err,vampires)=>{
    //                          if(err){
    //                         console.log(err)
    //                          }else{
    //                         console.log(vampires)
    //                       }
    //                     });
    //Negative Selection
    // Vampire.find({
    //      $and: [{loves:'ribbons'}, {eye_color:'brown'}] }, 
    //      (err,vampires)=>{
    //                                if(err){
    //                               console.log(err)
    //                                }else{
    //                               console.log(vampires)
    //                             }
    //                           });
    
// Vampire.find({location:'Rome'}, 
// (err,vampires)=>{                         
//   if(err){
// console.log(err)
//  }else{
// console.log(vampires)
// }
//   });

// Vampire.find(
//     {loves:  {$nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']} }, 
//     (err,vampires)=>{                          
//   if(err){
//     console.log(err)
//      }else{
//     console.log(vampires)
//     }
//       });
// Vampire.find({
//     victims: {$lt: 200}
// }, (err,vampires)=>{                          
//   if(err){
//     console.log(err)
//      }else{
//     console.log(vampires)
//     }
//       });

//Replac
// Vampire.findOneAndUpdate({ name: 'Claudia'}, {
//   $set: { name: 'Eve', portrayed_by: 'Tilda Swinton' }
// }, { new: true, strict: false,
// }, (err,vampires)=>{                          
//       if(err){
//         console.log(err)
//          }else{
//         console.log(vampires)
//         }
//           });
//Update
// Vampire.findOneAndUpdate({ name: 'Guy Man' }, { $set: {gender: 'f'} },
// (err,vampires)=>{                          
//         if(err){
//           console.log(err)
//            }else{
//           console.log(vampires)
//           }
//             });
// Vampire.findOneAndUpdate({ name: 'Eve' }, { $set: {gender: 'm'} },
// (err,vampires)=>{                          
//         if(err){
//           console.log(err)
//            }else{
//           console.log(vampires)
//           }
//             });
// Vampire.findOneAndUpdate({ name: 'Guy Man'
// }, { $set: { hates: ['clothes', 'jobs'] }
// }, { new: true,strict: false,}, 
// (err,vampires)=>{                          
//         if(err){
//           console.log(err)
//            }else{
//           console.log(vampires)
//           }
//             });

// Vampire.findOneAndUpdate({name: 'Guy Man' }, { $push: { hates: { $each: ['alarm clocks', 'jackalopes'] } } },
//  {  new: true, strict: false,}, 
// (     err,vampires)=>{                          
//         if(err){
//           console.log(err)
//            }else{
//           console.log(vampires)
//           }
//             });
// Vampire.findOneAndUpdate(
//     { name: 'Eve' }, { $set: {name: 'moniker'} }, 
// (err,vampires)=>{                          
//         if(err){
//           console.log(err)
//            }else{
//           console.log(vampires)
//           }
//             });
// Vampire.updateMany(  {gender: 'f'}, {$set: {gender: 'fems'}},
//   (err,vampires)=>{                          
//         if(err){
//           console.log(err)
//            }else{
//           console.log(vampires)
//           }
//             });
//Remove
// Vampire.findOneAndRemove({ hair_color: 'brown' },
// (err,vampires)=>{                          
//         if(err){
//           console.log(err)
//            }else{
//           console.log(vampires)
//           }
//         });
// Vampire.deleteMany({eye_color: 'blue'},
// (err,vampires)=>{                          
//           if(err){
//             console.log(err)
//              }else{
//             console.log(vampires)
//             }
//               });

