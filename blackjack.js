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

pedirCarta();