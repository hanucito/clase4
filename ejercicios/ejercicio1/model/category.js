const api = require("./api");
const mongo = require('../modules/mongo');
const uuid = require('uuid');

exports.getAll = () => {
  return mongo.collection('categories')
  .then(col => col.find().toArray())
};

exports.getById = id => {
  return mongo.collection('categories')
  .then(col => col.findOne({id: id}))
}

exports.add = category => {
   category.id = uuuid.v4()  
   return mongo.collection('categories')
  .then(col => col.insert(category)) 
}

exports.update = category => {
   return mongo.collection('categories')
  .then(col => col.findOneAndUpdate({id: category.id}))  
}

exports.remove = id => {
  return mongo.collection('categories')
  .then(col => col.remove({id}))
}
