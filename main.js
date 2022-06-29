// // alert("JavaScript is working")
// // let pokemon = ["bulbasaur", "charmander", "squirtle"];
// let pokemonIds = ["001", "002", "003"];
// const pokemon = [
//     {name: "bulbasaur", id: "001"},
//     {name: "charmander", id: "002"},
//     {name: "squirtle", id: "003"}
// ]

// const userRoster = [];

// const containerDiv = document.querySelector('#container')
// const newBtn = document.querySelector('#new-pokemon-btn')
// const rosterDiv = document.querySelector('#roster');

// // async()????
// newBtn.addEventListener('click', async () =>{
//     let num = prompt("Enter a Pokemon number:")
//     console.log("Number entered:", num)
//     let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`
//     let dataUrl = `https://pokeapi.co/api/v2/pokemon/${num}`
//     let req = await fetch(dataUrl)
//     let res = await req.json()
//     let name = res.forms[0].name;
//     let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${num}.mp3`
//     let audio = document.createElement("audio");
//     let source = document.createElement("source");
//     source.setAttribute("src", audioUrl);
//     source.setAttribute("type", "audio/mpeg");
//     audio.append(source);
//     let h3 = document.createElement("h3");
//     h3.innerText = name 
//     let img = document.createElement('img');
//     img.setAttribute('src', imgUrl)
//     img.setAttribute('class', 'roster-img')
//     let position = document.querySelector(`#pokemon-${userRoster.length+1}`);
//     position.addEventListener('click', () =>{
//         audio.play()
//     })
//     position.append(img, h3, audio);
//     userRoster.push(num);
//     })
// const createPokemon = (pokemonName, imgUrl) =>{
//     let div = document.createElement('div');
//     let h3 = document.createElement("h1");
//     h3.innerText = pokemonName;
//     div.setAttribute("class", "pokemon-card");
//     let img = document.createElement('img');
//     let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${pokemonName.toLowerCase()}.mp3`
//     let audio = document.createElement("audio");
//     let source = document.createElement("source");
//     source.setAttribute("src", audioUrl);
//     source.setAttribute("type", "audio/mpeg");
//     audio.append(source);
//     div.append(audio)
    
//     div.addEventListener('click', () =>{
//         console.log("audio", audioUrl)
//         div.classList.add('pokemon-card-flash')
//         audio.play()
//     })
//     img.src = imgUrl;
//     div.append(img, h3, audio);
//     return div
// }

// pokemon.map((element, index) =>{
//     console.log(element);
//     let imgUrl =`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`

//     const pokemonElement = createPokemon(name, imgUrl)
//     containerDiv.append(pokemonElement);
// })

// // sprite -pixeled picture
const pokemon = [
  {name: 'Bulbasaur', id: '001'},
  {name: 'Charmander', id: '004'},
  {name: 'Squirtle', id: '007'},
]

const userRoster = []


const containerDiv = document.querySelector('#container')
const newBtn = document.querySelector('#new-pokemon-btn')
const rosterDiv = document.querySelector('#roster')
const removeBtn = document.createElement('button')
removeBtn.innerHTML = "Remove Button"
document.body.append(removeBtn)

removeBtn.addEventListener('click', () => {
    if (userRoster.length === 0){
        console.log(alert("There is no Pokemon to remove :(!"))
    } else {
        let questionToRemove = prompt('Are you sure you want to remove element? yes/no')
        if (questionToRemove === "yes"){
            let length = userRoster.length;
            let elToRemove = document.querySelector(`#pokemon-${length}`)
            // console.log(elToRemove)
            let imageRemove = elToRemove.firstChild
            imageRemove.remove()
            let h3Remove = elToRemove.firstChild
            h3Remove.remove()
            let audioRemove = elToRemove.firstChild
            audioRemove.remove()
            // elToRemove.removeChild(img)
            // elToRemove.removeChild('h3')
            userRoster.pop()
        } else {
            alert('Great choice!')
        }       
        
    }
})





newBtn.addEventListener('click', async () => {
    if (userRoster.length<6){
        let num = prompt('ENTER A POKEMON NUMBER')
        console.log('Number entered', num)
        let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`
        let dataUrl = `https://pokeapi.co/api/v2/pokemon/${num}`
        let req = await fetch(dataUrl)
        let res = await req.json()
        let name = res.forms[0].name
        let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${name.toLowerCase()}.mp3`
        let audio = document.createElement('audio')
        let source = document.createElement('source')
        source.setAttribute('src', audioUrl)
        source.setAttribute('type', 'audio/mpeg')
        audio.append(source)
        let h3 = document.createElement('h3')
        let nickName = prompt('Give nick name to your Pokemon')
        h3.innerText = nickName
        let img = document.createElement('img')
        img.setAttribute('src', imgUrl)
        img.setAttribute('class', 'roster-img')
        let position = document.querySelector(`#pokemon-${userRoster.length + 1}`)
        position.addEventListener('click', () => {
            audio.play()
        })
        position.append(img, h3, audio)
        userRoster.push(num)
    } else {
        console.log(alert("You can't add more Pokemon!"))
    }
})



pokemon.map((element, index) => {
  console.log(element)
  let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`
  let div = document.createElement('div') // adding a div to house the img element
  let h3 = document.createElement('h3')
  h3.innerText = element.name
  div.setAttribute('class', 'pokemon-card') // setting the class of the div
  let img = document.createElement('img') // creating the img element itself
  let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${element.name.toLowerCase()}.mp3`
  let audio = document.createElement('audio')
  let source = document.createElement('source')
  source.setAttribute('src', audioUrl)
  source.setAttribute('type', 'audio/mpeg')
  audio.append(source)
  div.addEventListener('click', () => {
    console.log('audio', audioUrl)
    audio.play()
  })
  img.src = imgUrl
  div.append(img, h3, audio) // append the img element to the div
  containerDiv.append(div)
})
