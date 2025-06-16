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

const clickHome = () => {
    window.location.href = "/Free-E-Library/src/Home/science.html"
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
