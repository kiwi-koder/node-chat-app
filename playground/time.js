var moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

// 

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
var createdAt = 1234;
var date = moment(createdAt);

console.log(date.format('h:mm a'));