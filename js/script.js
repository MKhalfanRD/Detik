$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".nav-content").css("right", "0");
    });

    $(".close").click(function () {
        $(".nav-content").css("right", "-100vw");
    });
});

function openFileInput() {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
}