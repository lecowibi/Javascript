const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const label = document.getElementById("label");
const reset = document.getElementById("reset");
let count = 0;
decrease.onclick = function () {
  count--;
  label.textContent = count;
};
reset.onclick = function () {
  label.textContent = 0;
};
increase.onclick=function(){
    count++;
    label.textContent=count;
}