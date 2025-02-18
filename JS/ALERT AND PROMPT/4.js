//alert( when we show some error)
alert("This is a simple alert!")

//error and waringin the console box
console.log("this is a simple log");
console.error("this is an error msg");
console.warn("this is a warning msg");

//prompt (when we ask for some value from user)
//This is the format -> prompt("Enter your name:")


// how to show input of prompt in console
let firstName= prompt("enter your name:");
let lastName= prompt("enter last name");
console.log("Welcome", firstName,lastName, "!");

//show this as alert message also your name on main screen
let msg="Welcome" + firstName + lastName + "!";
alert(msg);