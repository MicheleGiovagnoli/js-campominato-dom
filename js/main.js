//Consegna
//L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

const domBtn = document.getElementById('btn');
const domGriglia = document.getElementById('griglia');
let domDifficolta = document.getElementById('difficolta');



domBtn.addEventListener('click',
    function(){
        domGriglia.innerHTML= '';
        let difficolta = domDifficolta.value;
        const arrayBombe = arrayNumber(16, difficolta);
        console.log(arrayBombe);
        
              
        for( let i = 0; i < difficolta; i++) {
            const box = newBox(i+1, difficolta);
            domGriglia.append(box);
            box.addEventListener('click',
                function(){
                
                    if (arrayBombe.includes(i)){
                        this.classList.toggle('bomba');
                    }else{
                        this.classList.toggle('click');
                    }
                    console.log(box.innerHTML);    

                }



            );
        }



    }
);

function newBox(numero, difficolta){
    const box = document.createElement('div');
    box.classList.add('box-general');
    box.innerHTML = numero;
    if(difficolta == 100){
        box.classList.add('box');
    }
    else if (difficolta == 81){
        box.classList.add('box-1'); 
    }
    else{
        box.classList.add('box-2');  
    }
    return box;
}

function arrayNumber(number, difficolta){
    let myArray = [];
    for(let i = 0; i < number; i++){
        const newNumber = generateUniqueRandomNumber(myArray, 1, difficolta);
        myArray.push(newNumber);
    }
    return myArray;
}

function generateRandomNumber(min, max){
    const randomNumber = Math.floor((Math.random() * (max - min + 1)) + min);
    return randomNumber;
}

function generateUniqueRandomNumber(array, min, max){
    let value = false;
    let uniqueRandomNumber;
    while( !value ){
        uniqueRandomNumber = generateRandomNumber(min, max);
        if(!array.includes(uniqueRandomNumber)){
            value = true; 
        }
    }
    return uniqueRandomNumber;
}
