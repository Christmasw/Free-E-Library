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

const clickHome = () => {
    window.location.href = "/src/Home/science.html"
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