let roll=document.getElementById("roll");
let label=document.getElementById("label");
let min=1;
let max=6;
let randomnum

roll.onclick = function(){
    randomnum=Math.floor(Math.random()*max)+min;
    label.innerText=randomnum;
}