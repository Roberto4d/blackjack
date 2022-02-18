let deck = []; 
const tipos = ['C', 'D', 'H', 'S']; 
const especiales = ['A', 'J', 'Q', 'K'];
let = puntosJugador = 0, puntosComputadora = 0;

//referencias del HTML
const btnPedir = document.querySelector("#btnPedir");
const btnParar = document.querySelector("#btnParar");
const btnNuevo = document.querySelector("#btnNuevo");
const acumulador = document.querySelectorAll("small");
const sectionCartasJugador = document.querySelector("#jugador-cartas");
const sectionCartasComputadora = document.querySelector("#jugador-computadora");

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
//inteligencia artificial

const turnoComputadora = (puntosMinimos) => {
    do {
            const carta = pedirCarta();
            puntosComputadora = puntosComputadora + valorCarta(carta);
            acumulador[1].innerText = puntosComputadora ;
            const imgCarta = document.createElement("img");
            imgCarta.src = `Assets/cartas/${carta}.png`;
            sectionCartasComputadora.append(imgCarta);

            if (puntosMinimos > 21){
                break;
            }
    } while ((puntosMinimos > puntosComputadora) && (puntosMinimos <= 21));
    setTimeout(() =>{
    if (puntosMinimos === puntosComputadora){
        alert('Esto fue un empate'); 
    } else if (puntosMinimos > 21) {
        alert('Te gane bicho'); 
    } else if (puntosComputadora > 21){
        alert('you win!');
    } else if (puntosComputadora > puntosMinimos){
        alert('Metele mas sin miedo al exito te gane');
    }

}, 30);}
//Eventos

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    acumulador[0].innerText = puntosJugador;
    const imgCarta = document.createElement("img");
    imgCarta.src = `Assets/cartas/${carta}.png`;
    sectionCartasJugador.append(imgCarta);
    if (puntosJugador > 21){
        btnPedir.disabled = true;
        btnParar.disabled = true; 
        turnoComputadora( puntosJugador);
    }
    else if(puntosJugador === 21) {
        console.log("ganaste");
        btnPedir.disabled = true;
        btnParar.disabled = true;
        turnoComputadora( puntosJugador);

    }
});
// boton dentener 
    btnParar.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnParar.disabled = true;
        turnoComputadora(puntosJugador);
});

//nuevoJuego

    btnNuevo.addEventListener('click', () =>{ 
        console.clear();
        deck = []; 
        deck = crearDeck(); 

        puntosJugador = 0;
        puntosComputadora = 0;

        acumulador[0].innerText = '0';
        acumulador[1].innerText = '0';

        sectionCartasJugador.innerHTML = ''; 
        sectionCartasComputadora.innerHTML = ''; 
       
        btnPedir.disabled = false;
        btnParar.disabled = false;


    })


