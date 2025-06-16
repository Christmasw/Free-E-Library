$(document).ready(function() {
    if(localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            
            if(JSON.parse(value).status == "active") {
                window.location.href = "/Free-E-Library/src/Home/science.html"
            }
        }
    }
});

const clickLogin = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let id = "";
    let getName = "";
    let getTelp = "";
    let getEmail = "";
    let getPassword = "";

    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            
            if(email == JSON.parse(value).email) {
                id = key,
                getName = JSON.parse(value).name,
                getTelp = JSON.parse(value).telp,
                getEmail = JSON.parse(value).email
                getPassword = JSON.parse(value).password
            }
        }

        if (password != "" && password == getPassword) {
            const userData = {
                name: getName,
                telp: getTelp,
                email: getEmail,
                password: getPassword,
                status: "active",
            };
            localStorage.setItem(id, JSON.stringify(userData));

            window.location.href = "/Free-E-Library/src/Home/science.html"
        }
        else {
            const validateAccount = document.getElementById('active-warning');
            validateAccount.style.display = "block"
        }
    }
    else {
        const validateAccount = document.getElementById('active-warning');
        validateAccount.style.display = "block"
    }
}

const closeWarning = () => {
    const validateAccount = document.getElementById('active-warning');
    validateAccount.style.display = "none"
}
