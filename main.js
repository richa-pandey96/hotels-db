const prompt = require('prompt-sync')();
const age=prompt("Please enter your age:");
if (age<18){
    console.log("20% off");

}
else{
    console.log("30% off");
}