const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vampireSchema = new Schema({
  name:{type:String,required:true,unique: true},
	hair_color:{type:String, default:'blonde'},
	eye_color:{type:String},
	dob:Date,
	loves:[{type:String}],
	location:{type:String},
	gender:String,
	victim:Number,
	title:{type:String}
});


const Vampire = mongoose.model('Vampire', vampireSchema);


//make this exportable to be accessed in `app.js`
module.exports = Vampire;