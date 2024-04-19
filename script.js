const target = document.getElementById('target');
let yes= document.getElementById('yes');
yes.addEventListener('click', () => {
alert("I Love you too jaan mera babu");
})
function moveTarget(){
const maxwidth = 400;
const maxHeight = 400;
const ranomX = Math.floor(Math.random() * maxwidth);
const ranomy = Math.floor(Math.random() * maxHeight);
target.style.top = ranomy + 'px';
target.style.left = ranomy + 'px';
}

target.addEventListener('mouseenter',function(){moveTarget();})