// constants for query selector
var studentId = document.querySelector('#myStudentId');
const custNum = document.querySelector('#customNumber');
const customColorButton = document.querySelector('.custColor');
const randomColor= document.querySelector('.randColor');
const imagSelect = document.querySelector('#imageSelect');
const images = document.querySelector('#images');
var bg = document.querySelector('html');
var imgSet;

// function to change bg color from user input and add student id
function changeCustomColor(inputNum) {
    if(inputNum === undefined){
        inputNum = parseInt(custNum.value);
    }
    studentId.textContent = "Student ID: 1218195";
    if(inputNum<0 || inputNum > 100){
        bg.style.backgroundColor = 'red';
    }
    else if(inputNum > 0 && inputNum < 20){
        bg.style.backgroundColor = 'green';
    }
    else if(inputNum < 40){
        bg.style.backgroundColor = 'blue';
    }
    else if(inputNum < 60){
        bg.style.backgroundColor = 'orange';
    }
    else if(inputNum < 80){
        bg.style.backgroundColor = 'purple';
    }
    else if(inputNum <=100){
        bg.style.backgroundColor = 'yellow';
    }
    else{//this should not happen but is here to test the code. This will happen if the input is not a number
        bg.style.backgroundColor = 'black';
    }
}
// function to change bg color from random no.
function changeRandomColor() {
    custNum.textContent = ' ';
    let rand= Math.floor(Math.random() * 101);
    changeCustomColor(rand);
}
// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    imageSelect.innerHTML = '';
    imgSet = [
        {src:'./img/img1.jpg', alt:'grass'}, 
        {src:'./img/img2.jpg', alt:'tree and sunset'},
        {src:'./img/img3.jpg', alt:'mountain and refelction in water'},
        {src:'./img/img4.jpg', alt:'deer in grassland'},
        {src:'./img/img5.jpg', alt:'river in forest'}
    ];
    
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    imgSet.forEach((img) => {
        const option = document.createElement('option');
        option.value = img.src;
        option.textContent = img.alt;
        imagSelect.appendChild(option);
    });    
}
// function to change image
function changeImage() {
    const selectedIndex = imagSelect.selectedIndex;
    if (selectedIndex !== -1) {
        const selectedImage = imgSet[selectedIndex];
        images.src = selectedImage.src;
        images.alt = selectedImage.alt;
    } else {
        images.src = '';
        images.alt = '';
    }
    addList();
}
// event listeners for on click event of buttons and select
//custNum.addEventListener('input', function() {changeCustomColor()});
customColorButton.addEventListener('click', function() {
    changeCustomColor(parseInt(custNum.value));
});
randomColor.addEventListener('click', changeRandomColor);
// event listeners for on change event of select
imagSelect.addEventListener('change', changeImage);
window.addEventListener('load', addList);