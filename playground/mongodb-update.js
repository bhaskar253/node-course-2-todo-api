//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDb server.');
  }
  console.log('Connected to MongoDb server.');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5af9a4f5a2fa6c49b8004b79')},{$set: {completed: true}},{returnOriginal: false}).then((res)=>{
  //   console.log(JSON.stringify(res,undefined,2));
  // });

  db.collection('Users').findOneAndUpdate({
    name: 'Jen'
  },{
    $set: {
      name: 'Bhaskar'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((res)=>{
    console.log(JSON.stringify(res,undefined,2));
  });
  //client.close();
});
