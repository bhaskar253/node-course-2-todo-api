const {ObjectID} = require('mongodb')

const mongoose = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then(result=>{
//   console.log(result);
// });

// var a = {
//     "_id" : ObjectID("5aff03d3f16ac33d684eeab1"),
//     "text" : "Sample Todo"
// }
//
// Todo.create(a,(e,s)=>{
//     if(e) return e;
//     console.log(s);
// });

Todo.findOneAndRemove({_id: '5aff03d3f16ac33d684eeab1'}).then((todo)=>{
  console.log(todo);
});

Todo.findByIdAndRemove('5aff03d3f16ac33d684eeab1').then((todo)=>{
  console.log(todo);
});
