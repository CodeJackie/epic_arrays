import './css/style.css'
import { ignite } from './comp/header'
import { getImages, array, getStories, epicArray } from './queries/queries'


document.addEventListener('DOMContentLoaded', () => {
  ignite(titleText)
} )



const app = document.getElementById('app')
let h1 = document.createElement('h1')
let hello = document.createTextNode('Hello World')
h1.appendChild(hello)
let p = document.createElement('p')
let s = document.createTextNode('Select an image to learn its tale.')
p.appendChild(s)
app.appendChild(h1)
app.appendChild(p)

const imgRow = document.querySelectorAll('.pics')

// //V2 - Using Arrays of API data
// getImages().then(() => {
//   console.table(array);
//   imgRow.forEach(function(Element) {
//     let x = Math.floor(Math.random() * array.length)
//     Element.style.backgroundImage = `url(' ${array[x].imgUrl} ')`
//   })
// });

//V3 - Using Arrays of API data and preventing duplicates

let chosen = []
getImages().then(() => {
  let arrayCopy = [...array]
    imgRow.forEach(function(Element) {
        if (arrayCopy.length > 0) {
            let x = Math.floor(Math.random() * arrayCopy.length)
            Element.style.backgroundImage = `url('${arrayCopy[x].imgUrl}')`
            chosen.push(arrayCopy[x])
            arrayCopy.splice(x, 1)
        } else {
            console.error('No more unique images available')
            // You can handle this case based on your requirements.
        }
    });
    console.log('chosen images:', chosen)
});

let epic = []  
let epicMatch = []
Promise.all([getImages(), getStories()]).then(() => {
    epicArray.forEach((epicItem) => {
      chosen.forEach((chosenItem) => {
        if(epicItem.image.id === chosenItem.id) {
          epicMatch.push(epicItem)
        }
      })
    })
    console.log('Epic Items:', epicMatch)
})






function buttonMaker() {
  const button = document.createElement('button')
  const text = document.createTextNode('I serve no purpose')
  button.setAttribute('name', 'push me')
  button.appendChild(text)
  app.appendChild(button)

}

buttonMaker()

const picArray = []
const div = document.createElement('div')

//Actual App

// const locations = [
//   'img/locations/bioAnomolyPlanets.jpg',
//   'img/locations/fantasyWorld.jpg',
//   'img/locations/giantTornado.jpg',
//   'img/locations/lostStaircase.jpg',
//   'img/locations/meteorStrike.jpg',
//   'img/locations/ruggedPlanet.jpg',
//   'img/locations/spaceExplorer.jpg',
//   'img/locations/spaceMining.jpg',
//   'img/locations/spaceStation.jpg',
//   'img/locations/underwaterCity.jpg'
// ]
// const characters = []
// const text = []

// //V1 - Using Arrays of data
// imgRow.forEach(function(Element) {
//   let x = Math.floor(Math.random() * 10)
//   Element.style.backgroundImage = `url(' ${locations[x]} ')`
// })

//Event Listeners
const cards = document.querySelectorAll('.card')
cards.forEach((card) => {
  card.addEventListener('click', function() {
    card.classList.toggle('flipped');
  });
});

//V2 - Using JSON like an API
// fetch('fakeapi.json', {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//     },
// })
//    .then(response => response.json())
//    .then(response => console.log(JSON.stringify(response)))
