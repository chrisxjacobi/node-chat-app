var moment = require('moment');

// Jan 1st 1970 00:00:00

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.subtract(4, 'months')
// console.log(date.format('MMMM Do, YYYY'));


// 10:35 am print current time


var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
