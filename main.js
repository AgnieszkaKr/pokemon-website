// alert("JavaScript is working")
// let pokemon = ["bulbasaur", "charmander", "squirtle"];
let pokemonIds = ["001", "002", "003"];
const pokemon = [
    {name: "Bulbasaur", id: "001"},
    {name: "Bharmander", id: "002"},
    {name: "Squirtle", id: "003"}
]
let containerDiv = document.querySelector('#container')

pokemon.map((element, index) =>{
    console.log(element);
    let imgUrl =`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`
    let div = document.createElement('div');
    let h3 =document.createElement("h1");
    h3.innerText = element.name;
    div.setAttribute("class", "pokemon-card");
    let img = document.createElement('img');
    img.src = imgUrl;
    // img.setAttribute('height', '100px')
    // img.setAttribute('width', '100px')
    div.append(img, h3);
    containerDiv.append(div);
})

// sprite -pixeled picture

