//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDb server.');
  }
  console.log('Connected to MongoDb server.');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res)=>{
  //   console.log(res);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res)=>{
  //   console.log(res);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((res)=>{
  //   console.log(res);
  // });

  // db.collection('Users').deleteMany({name: 'Bhaskar'}).then((res)=>{
  //   console.log(res);
  // });

  // db.collection('Users').findOneAndDelete({_id: new ObjectID('5af88f3b29566c07486a7adf')}).then((res)=>{
  //   console.log(res);
  // });

  //client.close();
});
