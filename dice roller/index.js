function rollDice(){
    const numOfDice=document.getElementById("numOfDice").value;
    const diceResult=document.getElementById("diceResult");
    const diceImage=document.getElementById("diceImage");
    const values=[];
    const image=[];
    for(let i=0;i<numOfDice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        image.push(`<img src="dice_image/${value}.png" alt="Dice of${value}">`)
    }
   diceResult.textContent=`Dice: ${values.join(', ')}`;
   diceImage.innerHTML=image.join('');
}