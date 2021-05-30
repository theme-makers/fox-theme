let element = document.getElementById('parallax-box');
let sensitivity = .7;
function changePosition() {
    let documentTop = document.documentElement.scrollTop;
    let elementTop = element.offsetTop;
    let bgPosition = Math.floor((documentTop - elementTop) * sensitivity);
    element.style.backgroundPositionY = `${bgPosition}px`;
}
document.addEventListener('DOMContentLoaded', function () {
    changePosition();
});
document.addEventListener('scroll', function () {
    changePosition();
});

console.log('amir');