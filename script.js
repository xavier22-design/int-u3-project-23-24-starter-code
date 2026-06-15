// Declare variables below to save the different divs of your story.
let storyOpening = document.querySelector('.story-opening');
let optionOneScreen = document.querySelector('.option-one-screen');
let optionTwoScreen = document.querySelector('.option-two-screen');
let optionOneEnd = document.querySelector('.option-one-end');
let optionOneEnd2 = document.querySelector('.option-one-end2');
let optionTwoEnd2 = document.querySelector('.option-two-end2');
let button_open_1 = document.querySelector('.open-option-one');
let button_open_2 = document.querySelector('.open-option-two');
let option_one_two_end = document.querySelector('.option-one-two-end');
let button_option_one_one = document.querySelector('.option-one-one');
let button_option_one_two = document.querySelector('.option-one-two');
let button_option_two_one = document.querySelector('.option-two-one');
let button_option_two_two = document.querySelector('.option-two-two');
let option_one_one_end = document.querySelector('.option-one-one-end');
let button_option_one_one_end2 = document.querySelector('.option-one-one-end2');
let button_option_two_one_end = document.querySelector('.option-two-one-end');
let button_option_two_one_end2 = document.querySelector('.option-two-one-end2');
let button_option_one_end = document.querySelector('.option-one-end');
let option_two_end = document.querySelector('.option-two-end');  
let brr_brr_escape= document.querySelector('.help');
let leave_brr = document.querySelector('.me');

// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

button_open_1.addEventListener('click', function(){
    storyOpening.style.display = 'none';
    button_open_1.style.display = 'none';
    button_open_2.style.display = 'none';
    optionOneScreen.style.display = 'block';
    button_option_one_one.style.display = 'block';
    button_option_one_two.style.display = 'block';
 });

button_open_2.addEventListener('click', function(){
    storyOpening.style.display = 'none';
    button_open_1.style.display = 'none';
    button_open_2.style.display = 'none';
    optionTwoScreen.style.display = 'block';
    brr_brr_escape.style.display = 'block';
    leave_brr.style.display = 'block';
 });
 button_option_one_one.addEventListener('click', function(){
    optionOneScreen.style.display = 'none';
    button_option_one_one.style.display = 'none';
    button_option_one_two.style.display = 'none';
    option_one_one_end.style.display = 'block';
 });

 button_option_one_two.addEventListener('click', function(){
    optionOneScreen.style.display = 'none';
    button_option_one_one.style.display = 'none';
    button_option_one_two.style.display = 'none';
    option_one_two_end.style.display = 'block';
 });

 brr_brr_escape.addEventListener('click', function(){
    optionTwoScreen.style.display = 'none';
    brr_brr_escape.style.display = 'none';
    leave_brr.style.display = 'none';
    option_two_end.style.display = 'block';
 });

leave_brr.addEventListener('click', function(){
    optionTwoScreen.style.display = 'none';
    brr_brr_escape.style.display = 'none';
    leave_brr.style.display = 'none';
    optionTwoEnd2.style.display = 'block';
 });