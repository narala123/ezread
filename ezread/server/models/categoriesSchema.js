/**
 * Created by nikhi on 8/26/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({

  categoryNumber:Number,
  detailes: {type: String},
  value:{type: String},
  phonemcode:{type: String},
  Type:{type: String},
 // code:{type: String},
  wordActive:{type: Boolean, default:false},
  createdTime:{type:Date},
  updatedTime:{type:Date}


});
module.exports = mongoose.model('categoriesList',CategorySchema);
