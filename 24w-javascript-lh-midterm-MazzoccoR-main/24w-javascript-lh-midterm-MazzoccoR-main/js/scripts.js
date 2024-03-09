/**
 * added a few console.log to test the code
 */
// Question 1 - The html is not attached to the script file, add the script info in header of html - 1 mark
// Question 2 - Declare and initialize a variable called, "myTest1" – you can set it to either a string, a number, or a boolean value. - 2 marks
let myTest1 = "string";
// Question 3 - Create a variable to hold your first name and store it in myFirstName
var myFirstName="Rebecca - 1218195";//added student number to myFirstName since next question sais to output student number from myFirstName when this part of the question sais first name

// Create a variable to get the paragraph from question 3 html and store it in question3Text
const question3Text = document.querySelector('#myFirstName');

// Output your student number stored in myFirstName to question3Text p tag - 3 marks
question3Text.textContent = myFirstName; //if not supposed to have first name and student number in myFirstName, then this would be question3Text.textContent = myFirstName+=" - 1218195";

// Question 4 - Create 2 variables to get the button and paragraph from question 4 html and store it in question4Button & question4Text - 2 marks
var question4Button = document.querySelector('.question4Button');
var question4Text = document.querySelector('.question4Para');
// Observe the following function
function toggleLight() {
    if (question4Button.textContent === 'turn on') {
        question4Button.textContent = 'turn off';
        question4Text.textContent = 'The light is on.';
    } else {
        question4Button.textContent = 'turn on';
        question4Text.textContent = 'The light is off.';
    }
}
// write a simple event listener that calls the function toggleLight when the button is clicked. - 4 marks
question4Button.addEventListener("click", toggleLight);

// Question 5 - Consider the following code:
var question5a = 1;
var question5b = 'I am writing Test1';

// Write a piece of code that changes the value of question5a to a string, then concatenates it to the value of question5b. 
// Assign the resulting string to a new variable called question5c. - 3 marks
var question5c = question5a.toString()+question5b;

// Question 6 - Examine the variable and its string value as shown in the following code:
var question6 = "I will finish the test in 2 hours.";
/* 
Write a short block of code that does the following things:
1. Remove the phrase, "in 2 hours."
2. Append the phrase, "SOON!"
3. Replace the phrase, "finish" with "conclude"
4. Output the resulting string to the browser console
- 4 marks */
var question6a=question6.slice(0, 22);
//could also do question6a=question6.replace("in 2 hours.", "");
question6a=question6a.replace("finish", "conclude");
question6a+=" SOON!";
console.log(question6a);

// Question 7 - Using the following array, build a simple loop that joins together each array item to create the string, "One, two, three, four, I declare thumb war!" 
// and assign the string to a variable called question7Answer. - 4 marks
var question7 = ['one', 'two', 'three', 'four', 'I', 'declare', 'thumb', 'war'];
var question7Answer="";
for(var i=0; i<question7.length; i++){
    question7Answer+=question7[i]+", ";
    if(i==question7.length-5){
        question7Answer+="I declare thumb war!";
        break;
    }
}
console.log(question7Answer);

// Question 8 - Have a look at the array below. Write a short piece of JavaScript that removes the array item "pink" from the end of the array, 
// and adds a new array item, "red" to the beginning. - 2 marks
var question8 = ['orange', 'yellow', 'green', 'blue', 'violet', 'pink'];
question8.pop();
question8.unshift("red");
console.log(question8);
// Question 9 - Considering that the following variables have already been declared:
var timeOfDay;
var meal;

// build a simple switch statement that sets the value of the variable meal to be either 'breakfast', 'lunch', or 'dinner' – 
// depending on the value of timeOfDay(can be either 'morning', 'afternoon', or 'evening'). Include a default that sets meal to the value, 'no meal'. - 5 marks
switch(timeOfDay){
    case 'morning': 
        meal='breakfast';
        break;
    case 'afternoon': 
        meal='lunch';
        break;
    case 'evening': 
        meal='dinner';
        break;
    default: meal='no meal';
}

// Question 10 - Create a simple while loop that iterates through the elements of an array called ingredients, and logs each array item out to the console. - 4 points
ingredients = ['flour', 'sugar', 'butter', 'eggs', 'vanilla', 'baking powder', 'milk', 'chocolate chips'];
while(ingredients.length>0){
    console.log(ingredients.pop());
}
// Question 11 - Create a variable to get the paragraph from question 11 html and store it in question11Para - 1 mark
const question11Para=document.querySelector(".question11Para");
// Write your name in 'Your Name Here'
question11Para.textContent = greeting('Rebecca');

// Write the function called greeting, that accepts a single parameter(name), and returns a string that reads, "Hello, [name]. How are you today?" - 2 marks
function greeting(name){
    return ( "Hello, "+name+". How are you today?");
}

// Question 12 - Dynamically create an image tag and add it inside question 12 Div. You can use any image from img folder. - 5 marks
const img12 = document.querySelector('#question12');
img12.innerHTML = "<img src='./img/img1.jpg' alt='image1'>";
// Question 13 - Consider the following code:
const question13Btn = document.querySelector('#question13');

function question13Fun(event) {
    console.log(event);
    event.target = question13Btn;
}
question13Btn.addEventListener('click', question13Fun);

// Modify the above function such that it gives this precise output "<button id="question13">Go!</button>" on console - 5 marks
// Only use the concept from 'events' lecture
// Tip: You might have to pass some parameter to the function.

// Question 14 - Considering the below multidimensional array, console log on how would you refer to or obtain the number 3? - 1 mark
let question14 = ["flower", 25, [2, 3, 6], true];
console.log(question14[2][1]);

// Question 15 - Observe the below code:
const question15BtnA = document.querySelector('#question15a');
const question15BtnB = document.querySelector('#question15b');

function question15Fun() {
    window.setInterval(sub, 1000);

    function sub() {
        console.log("I am infinite!");
    }
}

question15BtnA.addEventListener("click", question15Fun);
// Create an event listener on question15BtnB with an anonymous function, such that when user clicks question15BtnB button, it disables the above listener - 5 marks
question15BtnB.addEventListener("click", function() {
    question15BtnA.removeEventListener("click", question15Fun);
});

// Question 16 - Observe the following array
var employeeArray = ["200465123: Francoise Rautenstrauch", "200465124: Kendra Loud", "200465125: Lourdes Bauswell", "200465126: Hannah Edmison", "200465127: Tom Loeza"];
for(let i=0; i<employeeArray.length; i++){
    let sepereate=employeeArray[i].split(":");
    let tbody=document.querySelector("tbody");
    let tName=document.createElement("tName");
    let tNumver=document.createElement("tNum");
    let name=(sepereate[1]);
    let number=Number(sepereate[0]);
        let tr=document.createElement("tr");
        let td=document.createElement("td");
        var makeTd="<td>"+name+"</td><td>"+number+"</td>	";
        
        tr.innerHTML=makeTd;
        tbody.appendChild(tr);
}
// create a utility that shows the values from the above array in proper table (inside of tfoot) - check html
// To see how it looks like, check the img folder
/* your steps might include - creating a loop to iterate through the array, breaking apart the name and id from array for each item,
    capturing each values in a variable, creating dynamic tr and td tags and appending to the tfoot    - 4 marks
*/

// Question 17 - Create an external css file, store in folder and connect with html - 3 marks
// It's fine if the file has just one style in it...