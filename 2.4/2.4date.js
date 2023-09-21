date = new Date();

// 1. Name of the current day e.g. Sunday
let dayOfWeek = date.getDay();
switch (dayOfWeek) {
  case 0:
    dayOfWeek = "Sunday";
    break;
  case 1:
    dayOfWeek = "Monday";
    break;
  case 2:
    dayOfWeek = "Tuesday";
    break;
  case 3:
    dayOfWeek = "Wednesday";
    break;
  case 4:
    dayOfWeek = "Thursday";
    break;
  case 5:
    dayOfWeek = "Friday";
    break;
  case 6:
    dayOfWeek = "Saturday";
    break;
  default:
    dayOfWeek = "I have never heard of this day";
}

// 2. Current day of the month e.g. 31
let dayOfMonth = date.getDate();

// 3. Current month e.g January
let month = date.getMonth();

switch (month) {
  case 1:
    month = "January";
    break;
  case 2:
    month = "February";
    break;
  case 3:
    month = "March";
    break;
  case 4:
    month = "April";
    break;
  case 5:
    month = "May";
    break;
  case 6:
    month = "June";
    break;
  case 7:
    month = "July";
    break;
  case 8:
    month = "August";
    break;
  case 9:
    month = "September";
    break;
  case 10:
    month = "October";
    break;
  case 11:
    month = "November";
    break;
  case 12:
    month = "December";
    break;
  default:
    console.log("I have never heard of this day");
}

// 4. Current Year e.g 2021
let year = date.getFullYear();

console.log(dayOfMonth);
console.log(dayOfWeek);
console.log(month + 1);
console.log(year);

// Create a function that will return a string in the following format:
// `Today is Sunday the 31 of January 2021’

function sentence(dayOfWeek, dayOfMonth, month, year) {
  console.log(`Today is ${dayOfWeek} the ${dayOfMonth} of ${month} ${year}`);
}

sentence(dayOfWeek, dayOfMonth, month, year);
