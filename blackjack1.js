let deck = []; 
const tipos = ['C', 'D', 'H', 'S']; 
const especiales = ['A', 'J', 'Q', 'K'];

//esta funcion crea un nuevo deck
const crearDeck = () => {
    for(let i = 2 ; i <= 10; i++){
        for(let j in tipos){
            deck.push(i + tipos[j]);
        }      
    }
    for(k in especiales){
        for (let l in tipos){
        deck.push(especiales[k]+ tipos[l]);
        }
    }
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}
crearDeck();
//esta funcion me permite tomar carta 

const pedirCarta = () => {
    if (deck.length === 0){
        throw 'no hay mas cartas en el deck';
    }
    const carta = deck.pop(); 
    console.log(deck);
    console.log(carta);
    return carta;
}

//pedirCarta();
//valor de la carta 
const valorCarta = (carta) => {  
    const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor))? 
            (valor === "A") ? 11 : 10
            : valor * 1;

 /*   console.log(valor);
    if ( isNaN(valor) ){
        if (valor === 'A' ){
            puntos = 11;
        }else{
            puntos = 10;
        }
    }else{
        console.log('es un numero');
        puntos = valor * 1;
    }*/
}
const valor = valorCarta(pedirCarta());
console.log({valor});

