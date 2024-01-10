// JavaScript Fundamentals - Day 14: Assignment

// 1. Create a variable named `temperature` and assign it a value.
temperature= 25;
// 2. Use an `if` statement to check if the `temperature` is greater than 30. Print a message to the console accordingly.
// 3. Extend the previous example with an `else` statement to print a different message if the temperature is not greater than 30.
if (temperature>30){
    console.log("It's hot");
}else{
    console.log("Nanlalamig ka na sa akin");
}
// 4. Create a variable named `time` and assign it a value representing the current hour (in 24-hour format).
let time=14
// 5. Use `else if` statements to greet the user based on the time of day (morning, afternoon, evening).
if (time>=5&&time<=11){
    console.log("Good Morning!");
}else if(time>=12&&time<=17){
    console.log("Good Afternoon!");
}else if(time>=18&&time<=24){
    console.log("Good night <333");
}else if (time>=0&&time<=4){
    console.log("Tulog na uy wala ka namang ka-chat haha");
}else{
    console.log("Invalid time");
}
// 6. Create a switch statement for the variable `day`. Print a message based on the day of the week.
switch(day){
    case "Monday":
        console.log("First day of the week. Goodluck!");
    case "Friday":
        console.log("Today is Friday, Munggo ulam hehe");
    case "Saturday":
    case "Sunday":
        console.log("Weekend na parang 3 hours lang");
    default:
        console.log("Just a normal day zzz");
}