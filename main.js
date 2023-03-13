import './style.css'
import TALE from './tale.js';

const app = document.getElementById('app')
let h1 = document.createElement('h1')
let hello = document.createTextNode('Hello World')
h1.appendChild(hello)
let p = document.createElement('p')
let s = document.createTextNode('Select an image to learn its tale.')
p.appendChild(s)
app.appendChild(h1)
app.appendChild(p)


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

const locations = [
  'img/locations/bioAnomolyPlanets.jpg',
  'img/locations/fantasyWorld.jpg',
  'img/locations/giantTornado.jpg',
  'img/locations/lostStaircase.jpg',
  'img/locations/meteorStrike.jpg',
  'img/locations/ruggedPlanet.jpg',
  'img/locations/spaceExplorer.jpg',
  'img/locations/spaceMining.jpg',
  'img/locations/spaceStation.jpg',
  'img/locations/underwaterCity.jpg'
]
const characters = []
const text = []

const imgRow = document.querySelectorAll('.pics')

//V1 - Using Arrays of data
imgRow.forEach(function(Element) {
  let x = Math.floor(Math.random() * 10)
  Element.style.backgroundImage = `url(' ${locations[x]} ')`
})

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



const zero = new TALE('Biological Anomoly', '/img/locations/bioAnomolyPlanets.jpg', '/tales/story1.html', '/tales/story1.html', 'Now see Story 2', 'Story 2', 'Finally, read Story 3', 'Story 3')


console.table(zero);