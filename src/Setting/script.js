let id = "";

$(document).ready(function() {
    measureHeightWindow()

    if(localStorage.length > 0) {
        let accountActive = "";

        let name = document.getElementById("name");
        let telp = document.getElementById("telp");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let confirmPassword = document.getElementById("confirmPassword");

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            
            if(JSON.parse(value).status == "active") {
                accountActive = "active",
                id = key,
                name.value = JSON.parse(value).name,
                telp.value = JSON.parse(value).telp,
                email.value = JSON.parse(value).email
                password.value = JSON.parse(value).password,
                confirmPassword.value = JSON.parse(value).password
            }
        }

        if(accountActive == "") {
            window.location.href = "/Free-E-Library/src/SignIn/login.html"
        }
    }
    else {
        window.location.href = "/Free-E-Library/src/SignIn/login.html"
    }
});

function measureHeightWindow() {
    if ($("body").height() > $(window).height()) {
        $(".body-container").css("height", "100%");
    }
    else {
        $(".body-container").css("height", "100vh");
    }
}

const clickHome = () => {
    window.location.href = "/Free-E-Library/src/Home/science.html"
}

const clickFavorites = () => {
    window.location.href = "/Free-E-Library/src/Favorite/favorite.html"
}

const clickProfile = () => {
    window.location.href = "/Free-E-Library/src/Profile/profile.html"
}

const isAlphanumeric = (password) => {
  let hasLetter = false;
  let hasDigit = false;

  for (const char of password) {
    if (char.toLowerCase() !== char.toUpperCase()) {
        hasLetter = true;   
    }
    else if (!isNaN(char)){
        hasDigit = true;
    }
    if (hasLetter && hasDigit) return true;
  }

  return false;
};

const saveChangeData = () => {
    let nameIsValid = true;
    let telpIsValid = true;
    let emailIsValid = true;
    let passwordIsValid = true;
    let confirmPasswordIsValid = true;

    let name = document.getElementById("name").value;
    let telp = document.getElementById("telp").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if(name.length < 6){
        const inputName = document.getElementById('name');
        inputName.style.border = "1.5px solid red"

        const validateName = document.getElementById('validateName');
        validateName.style.display = "block"

        nameIsValid = false;
    }

    if(telp.length < 1){
        const inputTelp = document.getElementById('telp');
        inputTelp.style.border = "1.5px solid red"

        const validateTelp = document.getElementById('validateTelp');
        validateTelp.style.display = "block"

        telpIsValid = false;
    }

    if(!email.endsWith(".com") && !email.includes("@gmail")){
        const inputEmail = document.getElementById('email');
        inputEmail.style.border = "1.5px solid red"

        const validateEmail = document.getElementById('validateEmail');
        validateEmail.style.display = "block"
        
        emailIsValid = false;
    }

    if(!isAlphanumeric(password) || password.length < 5) {
        const inputPassword = document.getElementById('password');
        inputPassword.style.border = "1.5px solid red"

        const validatePassword = document.getElementById('validatePassword');
        validatePassword.style.display = "block"
        
        passwordIsValid = false;
    }

    if(confirmPassword != password || confirmPassword == "") {
        const inputConfirmPassword = document.getElementById('confirmPassword');
        inputConfirmPassword.style.border = "1.5px solid red"

        const validateConfirmPassword = document.getElementById('validateConfirmPassword');
        validateConfirmPassword.style.display = "block"
        
        confirmPasswordIsValid = false;
    }

    if (nameIsValid == false || telpIsValid == false || emailIsValid == false || passwordIsValid == false || confirmPasswordIsValid == false) {
        return
    }

    const userData = {
        name: name,
        telp: telp,
        email: email,
        password: password,
        status: "active",
    };

    localStorage.setItem(id, JSON.stringify(userData));

    const popup = document.getElementById("myPopup");
    popup.classList.add("show");
    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);
}

const inputName = document.getElementById('name');
inputName.addEventListener("input", () => {
    let name = document.getElementById("name").value;
    if (name.length >= 6) {
        inputName.style.border = "1.5px solid #aaa";
        validateName.style.display = "none";
    }
});

const inputTelp = document.getElementById('telp');
inputTelp.addEventListener("input", () => {
    let telp = document.getElementById("telp").value;
    if (telp.length > 0) {
        inputTelp.style.border = "1.5px solid #aaa";
        validateTelp.style.display = "none";
    }
});

const inputEmail = document.getElementById('email');
inputEmail.addEventListener("input", () => {
    let email = document.getElementById("email").value;
    if (email.endsWith(".com") && email.includes("@gmail")) {
        inputEmail.style.border = "1.5px solid #aaa";
        validateEmail.style.display = "none";
    }
});

const inputPassword = document.getElementById('password');
inputPassword.addEventListener("input", () => {
    let password = document.getElementById("password").value;
    if (isAlphanumeric(password) && password.length >= 5) {
        inputPassword.style.border = "1.5px solid #aaa";
        validatePassword.style.display = "none";
    }
});

const inputConfirmPassword = document.getElementById('confirmPassword');
inputConfirmPassword.addEventListener("input", () => {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword == password && confirmPassword != "") {
        inputConfirmPassword.style.border = "1.5px solid #aaa";
        validateConfirmPassword.style.display = "none";
    }
});
