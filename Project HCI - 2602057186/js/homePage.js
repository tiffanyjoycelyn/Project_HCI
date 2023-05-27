$(document).ready(function(){
  var slides = $('.slides')
  var curr = 0
  var prev = 0

  for(let i=1;i<slides.length;i++){
      slides.eq(i).hide();
  }

  $("#slide-right").click(nextImage)
  $("#slide-left").click(prevImage)

  setInterval(() => {
      prev = curr
      curr++
      if(curr > slides.length){
          curr = 0
      }
      slides.eq(prev).fadeOut(0)
      slides.eq(curr).fadeIn(1000)
  }, 7000);

  function prevImage(){
    prev = curr
    curr--
    if(curr < 0){
        curr = slides.length - 1
    }
    slides.eq(prev).fadeOut(0)
    slides.eq(curr).fadeIn(1000)
  }

  function nextImage(){
    prev = curr
    curr++
    if(curr > slides.length){
        curr = 0
    }
    slides.eq(prev).fadeOut(0)
    slides.eq(curr).fadeIn(1000)
  }


})
   
  const validateForm = () => {
    const formButton = document.getElementById("register-button")
  
    formButton.addEventListener("click", (e) => {
      e.preventDefault();
  
      const username = document.getElementById("username").value
      const password = document.getElementById("password").value
      const passwordConfirm = document.getElementById("password-confirmation").value
      const fullName = document.getElementById("full-name").value
      const maleGender = document.getElementById("maleGender").checked
      const femaleGender = document.getElementById("femaleGender").checked
      const email = document.getElementById("email").value
      const age = document.getElementById("age").value
      const agree = document.getElementById("agree")
      const error = document.getElementById("error");
  
      error.innerText = ""
  
      console.log(maleGender)
      console.log(femaleGender)
  
      if (username === "") {
        error.innerText = "Username must not be empty"
      } else if (password === "" || password.length < 5) {
        error.innerText = "Password must not be empty and length must be greater than 5"
      } else if (password !== passwordConfirm) {
        error.innerText = "Password must match the password confirmation"
      } else if (fullName == "") {
        error.innerText = "Fullname must not be empty"
      } else if (maleGender === false && femaleGender === false) {
        error.innerText = "Gender must be chosen"
      } else if (email === "" || !email.endsWith(".com")) {
        error.innerText = "Email not be empty and must ended with '.com' (without quote)"
      } else if (age === "" | Number.parseInt(age) < 16) {
        error.innerText = "Age must not be empty and must be greater than 16"
      } else if (!agree.checked) {
        error.innerText = "You must agree to our terms and conditions"
      } else {
        error.style.color = "green"
        error.innerText = "Register Success!"
      }
    })
  }
  
  runSlider()
  validateForm()