let now = new Date();
console.log("Now: " + now);

let today = new Date("2024-02-06");
console.log("Today: " + today);

console.log("Year: " + today.getFullYear());
console.log("Month(0 to 11): " + today.getMonth()); //0 to 11
console.log("Day of Month(1 to 31): " + today.getDay()); //1 to 31
console.log("Day of Week(0-sun to 6-sat): " + today.getDate()); //0(sun) to 6(sat)
console.log("Hour: " + today.getHours());
console.log("Minute: " + today.getMinutes());
console.log("Second: " + today.getSeconds());
//custom function getWeekDay(var)
console.log("Day of Week: " + getWeekDay(today)); //TUE

//Log Beg-End Execution Time
let start = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let x = i * i * i;
}
let end = Date.now(); // Completed
console.log( `The loop took ${end - start} ms` ); 

//Custom function to find week day in text
function getWeekDay(date) {
    let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return days[date.getDay()];
  }