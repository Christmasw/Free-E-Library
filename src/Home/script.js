$(document).ready(function() {
    measureHeightWindow()
});

// Check if body height is higher than window height
function measureHeightWindow() {
    if ($("body").height() > $(window).height()) {
        $(".body-container").css("height", "100%");
    }
    else {
        $(".body-container").css("height", "100vh");
    }
}

const clickFavorites = () => {
    window.location.href = "/src/Favorite/index.html"
}

const clickSettings = () => {
    window.location.href = "/src/Setting/setting.html"
}

const clickProfile = () => {
    window.location.href = "/src/Profile/profile.html"
}

const clickDetailPage = () => {
    window.location.href = "/src/DetailPage/index.html"
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