//Event Listeners / Multi 
let btn3 = document.getElementById('btn3');
let box3 = document.getElementById('box3');

function EventListener1(){
    document.getElementById('box3-2').innerHTML = 'test bbbbb';
}
function EventListener2(){
    alert('test');
}
function EventListener3(){
    box3.style.backgroundColor = '#ff0000';
}
function EventListener4(){
    box3.style.backgroundColor = '#ffffff';
}
btn3.addEventListener('click', EventListener1);
btn3.addEventListener('click', EventListener2);
btn3.addEventListener('mouseover', EventListener3);
btn3.addEventListener('mouseout', EventListener4);


// //Event test 2
// let btn2 = document.getElementById('btn2');
// let box2 = document.getElementById('box2');
// btn2.onclick = function(){
//     box2.innerHTML = 'test2';
// }

// //Event onclick
// var btn1 = document.getElementById('btn1');
// btn1.onclick = function(){
//     document.getElementById('place1').innerHTML = Date();
// }

// //Event onchange

// function myFunction() {
//   var x = document.getElementById("fname");
//   x.value = x.value.toUpperCase();
// }




