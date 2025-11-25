
function rollDise(){

const number  =  document.getElementById("num").value;
const answer =  document.getElementById("value");
const image =  document.getElementById("image");

let rollNumber = Number(number);


const values =  [];
const images = [];
let num;


    for(let i = 0 ; i<rollNumber ; i++){

        num = Math.floor(Math.random() * 6) + 1;
        
        values.push(num);
        images.push(`<img src="dice_image/${num}.png" >` );
    }

    answer.textContent = ` Dice: ${values.join(', ')} `;
    image.innerHTML = images.join('');

}