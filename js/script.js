const texts = document.querySelectorAll('.text');
let currentIndex = 0;

function showNextText() {
  const currentText = texts[currentIndex];
  const previousText = texts[(currentIndex - 1 + texts.length) % texts.length];
  
  previousText.classList.remove('show');
  previousText.classList.add('hide');
  currentText.classList.remove('hide');
  currentText.classList.add('show');

  currentIndex = (currentIndex + 1) % texts.length;
}

function rotateText() {
  setInterval(showNextText,2000); // Adjust the delay between text changes (in milliseconds)
}

rotateText();

// =======================about me TAB Design==========

// ============Mixit UP Starts===========


var mixer = mixitup('.portfolio__item__wrap', {
  selectors: {
      target: '.portfolio__item'
  },
  animation: {
      duration: 300
  }
});
// ============Mixit UP Ends===========

let nam = document.querySelector(".nam");
let email = document.querySelector(".email");


let nam_err=document.querySelector(".nam_err");
let email_err=document.querySelector(".email_err");


let valid_email= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let submit = document.querySelector(".submit");


submit.addEventListener("click", function(){
// name validation starts
    if(nam.value == ""){
        nam_err.innerHTML = "Type a name";
        nam.style.background="red";
    }
    else{
        nam_err.innerHTML="";
        nam.style.background="unset";
    }
// email validation starts
    if(email.value == ""){
        email_err.innerHTML = "Type an email address";
    }
    else{
        if(email.value.match(valid_email)){
            email_err.innerHTML="";
        }
        else{
            email_err.innerHTML = "Type a valid email address"; 
        }  
    }
  })
// skill TAb design==========
function updateProgress(progress, progressBar) {
    var offset = (100 - progress) / 100 * 283;
    progressBar.style.strokeDashoffset = offset;
    progressBar.parentElement.nextElementSibling.textContent = progress + '%';
  }
  
  // Usage example:
  var progress1 = 70; // Set your progress here (0 to 100)
  var progressBar1 = document.querySelector('#progress-1 .progress');
  updateProgress(progress1, progressBar1);
  
  var progress2 = 85; // Set your progress here (0 to 100)
  var progressBar2 = document.querySelector('#progress-2 .progress');
  updateProgress(progress2, progressBar2);
  
  var progress3 = 95; // Set your progress here (0 to 100)
  var progressBar3 = document.querySelector('#progress-3 .progress');
  updateProgress(progress3, progressBar3);
  
//   ===============Color Switcher===========
$(function(){
    $('#dark').click(dark);
    $('#light').click(light);

    function dark() {
    $('body').attr('class', 'dark');
    }

    function light() {
    $('body').attr('class', 'light');
    }
})