let id = "";
let getName = "";
let getTelp = "";
let getEmail = "";
let getPassword = "";

$(document).ready(function() {
    if(localStorage.length > 0) {
        let accountActive = "";

        let name = document.getElementById("profile-name");
        let telp = document.getElementById("profile-telp");
        let email = document.getElementById("profile-email");

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            
            if(JSON.parse(value).status == "active") {
                accountActive = "active",
                id = key,
                name.innerText = JSON.parse(value).name,
                telp.innerText = JSON.parse(value).telp,
                email.innerText = JSON.parse(value).email,
                getName = JSON.parse(value).name,
                getTelp = JSON.parse(value).telp,
                getEmail = JSON.parse(value).email,
                getPassword = JSON.parse(value).password
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

const clickHome = () => {
    window.location.href = "/Free-E-Library/src/Home/science.html"
}

const clickFavorites = () => {
    window.location.href = "/Free-E-Library/src/Favorite/favorite.html"
}

const clickSettings = () => {
    window.location.href = "/Free-E-Library/src/Setting/setting.html"
}

const clickLogOut = () => {
    const userData = {
        name: getName,
        telp: getTelp,
        email: getEmail,
        password: getPassword,
        status: "inactive",
    };

    localStorage.setItem(id, JSON.stringify(userData));
    
    window.location.href = "/Free-E-Library/src/SignIn/login.html"   
}
