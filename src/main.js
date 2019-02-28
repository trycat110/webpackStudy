alert('hello world')
const commonCss = require('./common.css');

const tutu = require('./img/abc.png');
console.log(tutu)
const text = require('./img/text.png');
console.log(text);
var img = new Image();
img.src = 'dist/'+ tutu;
img.onload = function(){
    document.body.appendChild(img)
}