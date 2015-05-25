var tmp = document.body.getElementsByTagName("div");

console.log(tmp[155].offsetWidth);
console.log(tmp[155].offsetHeight);
console.log(tmp[155].clientWidth);
console.log(tmp[155].clientHeight);

console.log(tmp[155].getBoundingClientRect());

console.log(pageXOffset, pageYOffset, "переменные прокрутки");