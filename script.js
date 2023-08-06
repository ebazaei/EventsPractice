var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#ccc';

//Event onclick
var btn1 = document.getElementById('btn1');
btn1.onclick = function(){
    document.getElementById('place1').innerHTML = Date();
}

//Event onchange

function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

