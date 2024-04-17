const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
   
  registrationNo: {
        type: String,
        required: true,
        unique: true ,
        
      },
   
}, {strict:false, minimize: false});

module.exports = mongoose.model(`${process.env.Mongo_Collection}`, userSchema);