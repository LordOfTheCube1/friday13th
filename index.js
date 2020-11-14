const today = new Date(); // get the date object of today, built in js feature
let days = []; // array that will contain all friday 13ths
if(!(today.getDay() === 5)) today.setDate(today.getDate() - (today.getDay() - 5)); // sets it to closest friday
for(let i = 0; i < 365*20; i += 7) {
  days.push("Friday " + today.getDate().toString() + " " +  new Intl.DateTimeFormat('en-US', {month: 'long'}).format(today) + " " + today.getFullYear().toString()); // adds every friday in the next 20 years to an array. Is this slow? yes, but i couldn't care less i made this in like 20 mins
  today.setTime(today.getTime() + (1000 * 60 * 60 * 24 * 7)); // sets 'today' to the next friday
}
days = days.filter(d => d.includes("13")); // we only want friday 13ths, not every friday
console.log(days); // log the output
