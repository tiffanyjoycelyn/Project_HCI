const validateForm = () => {
    const formButton = document.getElementById("register-button");
  
    formButton.addEventListener("click", (e) => {
      e.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const passwordConfirm = document.getElementById(
        "password-confirmation"
      ).value;
      const fullName = document.getElementById("full-name").value;
      const maleGender = document.getElementById("maleGender").checked;
      const femaleGender = document.getElementById("femaleGender").checked;
      const email = document.getElementById("email").value;
      const dateofbirth = document.getElementById("date-of-birth").value;
      const agree = document.getElementById("agree");
      const error = document.getElementById("error");
  
      error.innerText = "";
  
      if (username === "") {
        error.innerText = "Username must not be empty";
      } else if (password === "" || password.length < 5) {
        error.innerText =
          "Password must not be empty and length must be greater than 5";
      } else if (password !== passwordConfirm) {
        error.innerText = "Password must match the password confirmation";
      } else if (fullName == "") {
        error.innerText = "Fullname must not be empty";
      } else if (maleGender === false && femaleGender === false) {
        error.innerText = "Gender must be chosen";
      } else if (email === "" || !email.endsWith(".com")) {
        error.innerText =
          "Email not be empty and must ended with '.com' (without quote)";
      } else if (dateofbirth == "" || dateofbirth == null) {
        error.innerText = "Age must not be empty and must be greater than 16";
      } else if (!agree.checked) {
        error.innerText = "You must agree to our terms and conditions";
      } else {
        error.style.color = "green";
        error.innerText = "Register Success!";
      }
    });
  };
  
  validateForm();