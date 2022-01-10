// Tarjetas
const crearTarjetas = document.getElementById("tarjetas-personajes");
// Buscador
const form = document.getElementById("form");
const buscador = document.getElementById("buscador");
// Paginado
const firstPage = document.getElementById("first-page");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const lastPage = document.getElementById("last-page");

let paginaActual = 1
let ultimaPagina = 0

const buscarInfo = () => {
    fetch(`https://www.rickandmortyapi.com/api/character?page=${paginaActual}`)
    .then((res) => res.json())
    .then((data) => {
        cardsPersonajes(data.results)
    })
}
buscarInfo()

// Buscador

/* form.onsubmit = (e) => {
    e.preventDefault();
    buscarPersonaje(buscador.value)
} */

// Tarjetas

const cardsPersonajes = (data) => {
    const html = data.reduce((acc, curr) => {
        return acc + 
        `<article class="cards-container">
            <div class="cards-container-card"> 
                <div class="cards-container-flex">
                    <img class="card-img" src="${curr.image}">
                    <div>
                        <h2  class="card-info card-name">${curr.name}</h2>
                        <div class="status-species">
                            <p class="card-info card-info-txt">${curr.status}/</p>
                            <p class="card-info card-info-txt">${curr.species}</p>
                        </div>
                        <div>
                            <h3 class="card-info card-info-title">Last known location:</h3>
                            <p class="card-info card-info-txt">${curr.location.name}</p>
                        </div>
                        <div>
                            <h3 class="card-info card-info-title">First seen in:</h3>
                            <p class="card-info card-info-txt"></p>
                        </div>
                    </div>
                </div>
            </div>
        </article>`
    }, "")
    crearTarjetas.innerHTML = html
}

/* const buscarPersonaje = (personaje) => {
    fetch(`https://rickandmortyapi.com/api/characters/${curr.name}`)
    .then((res) => res.json())
    .then((data) => {
        cardIndidivudal(data, personaje)
    })
}

buscarPersonaje()

const cardIndidivudal = (data) => {
    const tarjeta = document.getElementById("tarjetas-personajes")
    const htmlCard = data.reduce((acc, curr) => {
        return acc +
        `<article class="cards-container">
        <div class="cards-container-card"> 
            <div class="cards-container-flex">
                <img class="card-img" src="${curr.image}">
                <div>
                    <h2  class="card-info card-name">${curr.name}</h2>
                    <div class="status-species">
                        <p class="card-info card-info-txt">${curr.status}/</p>
                        <p class="card-info card-info-txt">${curr.species}</p>
                    </div>
                    <div>
                        <h3 class="card-info card-info-title">Last known location:</h3>
                        <p class="card-info card-info-txt">${curr.location.name}</p>
                    </div>
                    <div>
                        <h3 class="card-info card-info-title">First seen in:</h3>
                        <p class="card-info card-info-txt"></p>
                    </div>
                </div>
            </div>
        </div>
    </article>
        `
    }, "")
    tarjeta.innerHTML = htmlCard
} */

// Paginado

/* firstPage.onclick = () => {
    paginaActual = 1
    firstPage.disabled = true
    prev.disabled = true
    next.disabled = false
    lastPage.disabled = false
    buscarInfo()
}

next.onclick = () => {
    paginaActual++ 
    firstPage.disabled = false
    prev.disabled = false
     if (paginaActual === 42) {
      next.disabled = true
      lastPage.disabled = true
    } 
    buscarInfo()
}

prev.onclick = () => {
    paginaActual--
    next.disabled = false
    lastPage.disabled = false
    if (paginaActual === 1) {
        prev.disabled = true
        firstPage.disabled = true
    }
    buscarInfo()
}

lastPage.onclick = () => {
    paginaActual = 42
    prev.disabled = false
    firstPage.disabled = false
    if (paginaActual === 42) {
        next.disabled = true
        lastPage.disabled = true
    }
    buscarInfo()
} */

// Tarjeta individual