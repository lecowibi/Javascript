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
  count=0;
  label.textContent = count;
};
increase.onclick=function(){
    count++;
    label.textContent=count;
}