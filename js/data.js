var cash = Number(localStorage.getItem('cash'));
var vue = Number(localStorage.getItem('vue'));
var popularité = Number(localStorage.getItem('popularité'));
var interval = setInterval(update, 100);

function update(){
  cash = cash + 1
  document.getElementById("cash").innerHTML = cash + '💰';
  document.getElementById("vue").innerHTML = vue + ' 👁';
  document.getElementById("popularité").innerHTML = popularité + ' 😃';
}

function save(){
  localStorage.setItem('cash', cash);
  localStorage.setItem('vue', vue);
  localStorage.setItem('popularité', popularité);
}
