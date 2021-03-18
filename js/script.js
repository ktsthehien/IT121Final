


//Hover text change to red
let $h = $(".changecolor");
        
$h.hover(function() {
  // Add the "big" class
$(".changecolor").addClass("teal");
},
function() {
  // Remove the "big" class
$(".changecolor").removeClass("teal");
});

// Add the click callback function here!
$h.click(function() {
$(".changecolor").toggleClass("blue");
});


// What people said about us CLICK and FADETOGGLE

$(".review1").on("click", revealreview1);

function revealreview1 () {
  $(".reviewInner1").fadeToggle("hide");
};

$(".review2").on("click", revealreview2);

function revealreview2 () {
  $(".reviewInner2").fadeToggle("hide");
};

$(".review3").on("click", revealreview3);

function revealreview3 () {
  $(".reviewInner3").fadeToggle("hide");
};

//Order the Magazine

$(".yesBtn").on("click", yesResult);

function yesResult () {
  $(".resultText").append("<h3>Great! We will send you a print magazine shortly! Please fill out this <a href='contact.html' style='color:blue'>FORM</a></h3>");
  $(".resultText").addClass("teal");
  $(".yesBtn").addClass("hide");
  $(".noBtn").addClass("hide");
};

$(".noBtn").on("click", noResult);

function noResult () {
  $(".resultText").append("<h3>No problem at all! See you next month! We will refresh the page in 10 seconds in case you change your mind</h3>");
  $(".resultText").addClass("teal");

  $(".yesBtn").addClass("hide");
  $(".noBtn").addClass("hide");
    
  setTimeout(function() {
    location.reload();
}, 10000);
};
// Slide Show
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// Menu


(function($){
$(document).ready(function(){

$("#cssmenu").menumaker({
    title: "Menu",
    breakpoint: 827,
    format: "multitoggle"
});

});
})(jQuery);

// START CONTACT FORM

function checkForm() {
const name = document.getElementById('fullName');
const email = document.getElementById('email');
const comment = document.getElementById('comment');
const error = document.getElementById('formErrors');
let errorsFound = false;

if (!name.value) {
errorsFound = true;
name.style = "border: 2px solid red;";
error.style = "display: block";
const nameErr = document.createElement("li");
nameErr.textContent = "Missing full name.";
error.appendChild(nameErr);
}
if (!email.value || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email.value)) {
errorsFound = true;
email.style = "border: 2px solid red;";
error.style = "display: block";
const emailErr = document.createElement("li");
emailErr.textContent = "Invalid or missing email address.";
error.appendChild(emailErr);
}
    
if (!comment.value) {
errorsFound = true;
comment.style = "border: 2px solid red;";
error.style = "display: block";
const nameErr = document.createElement("li");
nameErr.textContent = "Missing comment.";
error.appendChild(nameErr);
}

    
    
if (errorsFound === false) {
error.style = "display: none";
name.style = "border: 1px solid #aaa;";
email.style = "border: 1px solid #aaa;";
comment.style = "border: 1px solid #aaa;";
commentConfirm.style = "border: 1px solid #aaa;";
}
}

document.getElementById("submit").addEventListener("click", function(event) {
checkForm();

// Prevent default form action. DO NOT REMOVE THIS LINE
event.preventDefault();
});

// END CONTACT FORM

//5 DOM

























