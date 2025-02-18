let color= "red";

//Trafic light system
if (color==="red") {
    console.log("Stop! light color is red");
}
if (color==="yellow") {
    console.log("Slow down! light color is yellow");
}
if (color==="green") {
    console.log("go! light color is green");
}





//ESLE IF STATEMENTS 
let age=23;
if(age>=18) {
    console.log("you can vote");
}
else if(age<18) {
    console.log("you cannot vote");
}
 
//SWITCH STATEMENT 
let newcolor= "red";

switch(newcolor) {
  case"red":
    console.log("stop");
    break;
  case"yellow":
    console.log("slow down");
    break;
  default:
    console.log("Light is broken");
}

//break is important so that not all the condition execute.


// switch statement question
let day = "1";
switch(day) {
    case"1":
    console.log("monday");
    break;
    case"2":
    console.log("tuesday");
    break;
    case"3":
    console.log("wednesday");
    break;
    case"4":
    console.log("thrusday");
    break;
    case"5":
    console.log("friday");
    break;
    case"6":
    console.log("saturday");
    break;
    case"7":
    console.log("sunday");
    break;
    default:
        console.log("now such day exist");
}