// alert("JavaScript is working")
let pokemon = ["Charmander", "Squirtle", "Blastoise"];
let pokemonIds = ["001", "002", "003", "004", "005", "006"];
let containerDiv = document.querySelector('#container')

pokemonIds.map((id) =>{
    let imgUrl =`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
    console.log('img url', imgUrl)
    let div =document.createElement('div')
    div.setAttribute("class", "pokemon-card")
    let img = document.createElement('img')
    img.src = imgUrl;
    // img.setAttribute('height', '100px')
    // img.setAttribute('width', '100px')
    div.append(img)
    document.body.append(div)
})

