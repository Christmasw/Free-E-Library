$(document).ready(function() {
    measureHeightWindow()
    
    if(localStorage.length > 0) {
        let accountActive = "";
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            
            if(JSON.parse(value).status == "active") {
                accountActive = "active"
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

const clickFavorites = () => {
    window.location.href = "/Free-E-Library/src/Favorite/favorite.html"
}

const clickSettings = () => {
    window.location.href = "/Free-E-Library/src/Setting/setting.html"
}

const clickProfile = () => {
    window.location.href = "/Free-E-Library/src/Profile/profile.html"
}

const clickDetailPage = () => {
    window.location.href = "/Free-E-Library/src/DetailPage/detailpage.html"
}

const clickScience = () => {
    fetch("science.html")
    .then(res => res.text())
    .then(html => {
        const parser = new DOMParser();
        const newMain = parser.parseFromString(html, "text/html").querySelector(".main-content");
        console.log(newMain)
        document.querySelector(".main-content").replaceWith(newMain);
        window.history.pushState({}, '', 'science.html');
    });
}

const clickRomance = () => {
    fetch("romance.html")
    .then(res => res.text())
    .then(html => {
        const parser = new DOMParser();
        const newMain = parser.parseFromString(html, "text/html").querySelector(".main-content");
        console.log(newMain)
        document.querySelector(".main-content").replaceWith(newMain);
        window.history.pushState({}, '', 'romance.html');
    });
}

const clickCrime = () => {
    fetch("crime.html")
    .then(res => res.text())
    .then(html => {
        const parser = new DOMParser();
        const newMain = parser.parseFromString(html, "text/html").querySelector(".main-content");
        console.log(newMain)
        document.querySelector(".main-content").replaceWith(newMain);
        window.history.pushState({}, '', 'crime.html');
    });
}

const clickComedy = () => {
    fetch("comedy.html")
    .then(res => res.text())
    .then(html => {
        const parser = new DOMParser();
        const newMain = parser.parseFromString(html, "text/html").querySelector(".main-content");
        console.log(newMain)
        document.querySelector(".main-content").replaceWith(newMain);
        window.history.pushState({}, '', 'comedy.html');
    });
}

const clickPsychology = () => {
    fetch("psychology.html")
    .then(res => res.text())
    .then(html => {
        const parser = new DOMParser();
        const newMain = parser.parseFromString(html, "text/html").querySelector(".main-content");
        console.log(newMain)
        document.querySelector(".main-content").replaceWith(newMain);
        window.history.pushState({}, '', 'psychology.html');
    });
};
