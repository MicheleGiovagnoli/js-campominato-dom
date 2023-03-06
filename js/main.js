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
        console.log(domDifficolta.value);


        console.log(arrayNumber());
        


        for( let i = 0; i < difficolta; i++) {
            const box = newBox(i+1, difficolta);
            domGriglia.append(box);
            box.addEventListener('click',
                function(){
                    this.classList.toggle('click');
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

function arrayNumber(){
    let myArray = [];
    console.log(myArray);

    for(let i = 0; i <= 15; i++){
        const newNumber = generateUniqueRandomNumber(myArray);
        myArray.push(newNumber);
        
    }
    return myArray;
}

function generateRandomNumber(){
    const randomNumber = Math.floor((Math.random() * (100 - 1 +1)) + 1);
    return randomNumber;
}

function generateUniqueRandomNumber(array){
    let value = false;
    let uniqueRandomNumber;
    while( !value ){
        uniqueRandomNumber = generateRandomNumber();
        console.log(uniqueRandomNumber);
        
        if(!array.includes(uniqueRandomNumber)){
            value = true;
            console.log(value);
        }
    }
    return uniqueRandomNumber;
}
