// constants for query selector
var studentId = document.querySelector('#myStudentId');
const custNum = document.querySelector('#customNumber');
const customColorButton = document.querySelector('.custColor');
const randomColor= document.querySelector('.randColor');
const imagSelect = document.querySelector('#imageSelect');
const imgages = document.querySelector('#images');
var bg = document.querySelector('html');

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
    else{
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
    const imgSet = [
        {src:'../img/img1.jpg', alt:'image1'}, 
        {src:'../img/img2.jpg', alt:'image2'},
        {src:'../img/img3.jpg', alt:'image3'},
        {src:'../img/img4.jpg', alt:'image4'},
        {src:'../img/img5.jpg', alt:'image5'},
    ];
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    imageSelect.innerHTML = '';
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    imgSet.forEach((img) => {
        const option = document.createElement('option');
        option.value = img.src;
        option.textContent = img.alt;
        imageSelect.appendChild(option);
    });    
}
// function to change image
function changeImage() {
    const selectedIndex = imageSelect.value;
    if (selectedIndex !== '') {
        const selectedImage = imagesData[selectedIndex];
        images.src = selectedImage.src;
        images.alt = selectedImage.alt;
    } else {
        images.src = '';
        images.alt = '';
    }
}
// event listeners for on click event of buttons and select
//custNum.addEventListener('input', function() {changeCustomColor()});
customColorButton.addEventListener('click', function() {
    changeCustomColor(parseInt(custNum.value));
});
randomColor.addEventListener('click', changeRandomColor);
// event listeners for on change event of select
imageSelect.addEventListener('change', changeImage);