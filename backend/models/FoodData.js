const mongoose = require('mongoose')

const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    CategoryName:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
       
    },
    options:[{}],
    description:{
      type:String,
      required:true,
    },

  });

  module.exports = mongoose.model('food_datas',UserSchema)