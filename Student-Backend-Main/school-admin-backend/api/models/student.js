const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },
 // _id: mongoose.Types.ObjectId,
 id:{
     type:String,
     required:true
 },
 modules:{
     type:[String]

 },
  
  dateCreated: {
    type: Date,
    default: Date.now
  },
  dateUpdated: Date
});

module.exports = mongoose.model('Student', studentSchema); //Stdent with caps
