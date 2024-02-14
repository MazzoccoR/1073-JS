// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");
const studentIDButton = document.getElementById("studentId");

// Constants for p tag to display query selectors
const noun1Display = document.getElementById("choosenNoun1");
const verbDisplay = document.getElementById("choosenVerb");
const adjectiveDisplay = document.getElementById("choosenAdjective");
const noun2Display = document.getElementById("choosenNoun2");
const settingDisplay = document.getElementById("choosenSetting");
const studentDisplay = document.getElementById("choosenStudent");


// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyPagragraph = document.getElementById("story");

// Variables for pre-defined arrays
nount1Word=["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
functionWord=["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
adjectiveWord=["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
noun2Word=["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
serringWord=["on the moon", "on the chair", "in my spaghetti", "on the grass", "in the garden", "in my shoes"];


// Variables for count to grab array elements
var arrayStroy=[];

/* Functions
-------------------------------------------------- */
function studentID_on_click() {
   studentDisplay.textContent="Rebecca Mazzocco - 200560972";
}
function noun1_on_click() {
    var noun1 = getRandomElementFromArray(nount1Word);
    // add noun1 to array
    arrayStroy[0] = noun1;
    //display noun1
    noun1Display.textContent = noun1;
}

function verb_on_click() {
    // variable to get array element
    var verb = getRandomElementFromArray(functionWord);
    // add verb to array
    arrayStroy[1] = verb;
    //display verb
    verbDisplay.textContent = verb;
}

function adjective_on_click() {
    var adjective = getRandomElementFromArray(adjectiveWord);
    // add adjective to array
    arrayStroy[2] = adjective;
    //display adjective
    adjectiveDisplay.textContent = adjective;
}

function noun2_on_click() {
    var noun2 = getRandomElementFromArray(noun2Word);
    // add noun2 to array
    arrayStroy[3] = noun2;
    //display noun2
    noun2Display.textContent = noun2;
}

function setting_on_click() {
    var setting = getRandomElementFromArray(serringWord);
    // add setting to array
    arrayStroy[4] = setting;
    //display setting
    settingDisplay.textContent = setting;
}

// concatenate the user story and display
function playback_on_click() {
    var story = noun1Display.textContent + " " + verbDisplay.textContent + " " + adjectiveDisplay.textContent + " " + noun2Display.textContent + " " + settingDisplay.textContent + ".";
    //display story
    storyPagragraph.textContent = story;    
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {

    // Select the first word from each shuffled array
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();
    // Display the randomized story
    playback_on_click();
}

function getRandomElementFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);
studentIDButton.addEventListener("click", studentID_on_click);