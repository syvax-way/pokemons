import pokemons from "./pokemons.js"

const cards_wrapper = document.querySelector('.cards_wrapper')

const GetCards =()=>{
    pokemons.map((card)=>{
        let carPok = document.createElement('div')
        carPok.classList.add('w-[200px]','h-[200px]','bg-yellow-500')
        carPok.innerHTML = `<h1>${card.name}</h1>`
        cards_wrapper.appendChild(carPok)
 })
}

GetCards()