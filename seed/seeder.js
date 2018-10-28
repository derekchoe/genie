// var Transaction = require('../models/transaction');
// var Category = require('../models/category');
// var User = require('../models/user');
// var mongoose = require('mongoose');

// mongoose.connect(db, { useNewUrlParser: true });

// var transactions = 
// [
// new Transaction({
//   category: category1,
//   amount: 100,
//   typeOfTrans: "expense",
//   description: "lunch at Elaines kitchen with Alice, Derek and Justin",
//   date: 2018-10-28,
//   categoryName: "food",
//   user: user1,
// }),

// ]


// var done = 0;
// for (var i = 0; i < transactions.length; i++) {
//   transactions.save(function(err, result){
//     done++;
//     if (done === transactions.length) {
//       exit();
//     }
//   });
// }


// function exit(){
//   mongoose.disconnect();
// }