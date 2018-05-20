const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

var password = '123abc!';

// bcrypt.genSalt(10,(err,salt)=>{
//   bcrypt.hash(password, salt, (e,hash)=>{
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$swBvVy7LPx6qAtP0NILoXOEEmO5QAVUvJ9zz8Yxu3l6mJ6kNvQSXa';
bcrypt.compare('123!abc',hashedPassword,(e,res)=>{
  console.log(res);
});

// var data = {
//   id: 1
// };
//
// var token = jwt.sign(data,'123abc');
// console.log(token);
// var decoded = jwt.verify(token,'123abc');
// console.log('decoded',decoded);

// var message = "I love to eat chicken."
// var hash = SHA256(message).toString();
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// };
//
// token.data.id=5
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();
// if(resultHash===token.hash){
//   console.log('Data was not changed');
// }else{
//   console.log('Data was changed. Do not trust!');
// }
