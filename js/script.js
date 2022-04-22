// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// 1. genero numeri da 1 a 100
//  1.1 per ogni numero creo una  cella, con classe grid-item e con dentro uno span che contiene il numero
//  1.2 aggiungo la cella alla griglia

const grid = document.getElementById('griglia');
const max = 100;

// FUNZIONE
function printGrid() {
    for (let i = 1; i <= max; i++) {
        /*
            <div class="grid-item">
                <span>1</span>
            </div>
        */
    //    creo div grid-item
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
    
        // creo span e lo inserisco all'interno di grid-item
        const gridSpan = document.createElement("span");
        gridSpan.innerHTML = i;
        gridItem.append(gridSpan);
        grid.append(gridItem);

        // al click dell'utente il numero cambia colore
        gridItem.addEventListener("click", function() {
            this.classList.add("active");
        });
    }
}
printGrid();