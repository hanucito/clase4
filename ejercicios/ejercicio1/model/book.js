const api = require("./api");
const mongo = require('../modules/mongo');
const uuid = require('uuid');

exports.getAll = () => {
  return mongo.collection('books')
  .then(col => col.find().toArray())
};

exports.getById = id => {
  return mongo.collection('books')
  .then(col => col.findOne({id: id}))
}

exports.add = book => {
   book.id = uuuid.v4()  
   return mongo.collection('books')
  .then(col => col.insert(book)) 
}

exports.update = book => {
   return mongo.collection('books')
  .then(col => col.findOneAndUpdate({id: book.id}))  
}

exports.remove = id => {
  return mongo.collection('books')
  .then(col => col.remove({id}))
}

exports.getByCategoryId = id => {
/*
api
    .fetchBooks()
    .then(books => books.filter(book => book.categories.includes(id)));
*/
}
  