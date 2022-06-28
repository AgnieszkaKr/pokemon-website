// alert("JavaScript is working")
// let pokemon = ["bulbasaur", "charmander", "squirtle"];
let pokemonIds = ["001", "002", "003"];
const pokemon = [
    {name: "Bulbasaur", id: "001"},
    {name: "Charmander", id: "002"},
    {name: "Squirtle", id: "003"}
]
let containerDiv = document.querySelector('#container')
const newBtn = document.querySelector('#new-pokemon-btn')

newBtn.addEventListener('click', () =>{
    let num = prompt("Enter a Pokemon number:")
    console.log("Number entered:", num)
})

pokemon.map((element, index) =>{
    console.log(element);
    let imgUrl =`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`
    let div = document.createElement('div');
    let h3 = document.createElement("h1");
    h3.innerText = element.name;
    div.setAttribute("class", "pokemon-card");
    let img = document.createElement('img');
    
    let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${element.name.toLowerCase()}.mp3`
    let audio = document.createElement("audio");
    let source = document.createElement("source");
    source.setAttribute("src", audioUrl);
    source.setAttribute("type", "audio/mpeg");
    audio.append(source);
    div.append(audio)
    div.addEventListener('click', () =>{
        console.log("audio", audioUrl)
        audio.play()
    })
    img.src = imgUrl;
    const rosterDiv = document.getElementById("roster");
    // setTimeout(() => {
        
    // }, 5000);

    div.append(img, h3, audio);
    containerDiv.append(div);
})

// sprite -pixeled picture

