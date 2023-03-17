var hobbies = [
  "Roller Derby",
  "Reading",
  "Yoga",
  "Meditating",
  "Indoor Plants",
  "Lifting Weights"
];

//hobbies - create & modifying an array
console.log(hobbies.length);
hobbies.push("Volunteering");
console.log(hobbies[2]);
hobbies.pop();
hobbies.splice(2, 0, "Volunteering", "Coaching");
hobbies.shift();
hobbies.unshift("Roller Skating");

console.log(hobbies);

//goals - create a new array & combine arrays
var goals = ["learning JavaScript", "learning JS React", "learning SQL"];
var allTheThings = hobbies.concat(goals);
var thing = allTheThings.indexOf("Lifting Weights");
allTheThings.splice(7, 1);

console.log(allTheThings);

//plans - map over an array
var plans = allTheThings.map(function (item) {
  return `I can't wait to begin ${item}!`;
});
console.log(plans);
