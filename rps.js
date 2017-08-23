
var user= ["rock", "paper", "scissors"]

var computer = ["rock", "paper", "scissors"]



//when user clicks button or image select from array


var rps = user.filter( function(click) {
  return click % "rock" === "rock"
})

console.log(rps)
//on click computer returns random rps