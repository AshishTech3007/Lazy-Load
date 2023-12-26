var opacity = 0;
var intervalID = 0;
window.onload = fadeout;
function fadeout() {
    setInterval(hide, 200);
}
function hide() {
    var loadercont = document.querySelector('.loadercont');
    var body = document.querySelector('.maincontent');
    opacity =
        Number(window.getComputedStyle(loadercont).getPropertyValue("opacity"))

    if (opacity > 0) {
        opacity = opacity - 0.1;
        loadercont.style.opacity = opacity
    }
    else {                   
        clearInterval(intervalID);
        loadercont.classList.add('hide')
        body.classList.remove('hide');
    }
} 