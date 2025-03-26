let textBox=document.getElementById("textBox");
let toFahrenheit=document.getElementById("toFahrenheit");
let toCelcius=document.getElementById("toCelcius");
let result=document.getElementById("result");
let temp;


function convert(){
    if(toFahrenheit.checked){
        temp=Number(textBox.value);
        temp=temp*9/5+31;
        result.textContent=temp.toFixed(1)+"°F"
    }
    else if(toCelcius.checked){
        temp=Number(textBox.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+"°F"
    }
    else{
        result.textContent="Atleast select one unit";
    }
}
