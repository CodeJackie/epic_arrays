import './style.css'

const app = document.getElementById('app')
let h1 = document.createElement('h1')
let hello = document.createTextNode('Hello World')
h1.appendChild(hello)
let p = document.createElement('p')
let s = document.createTextNode('This is my mythical app.')
p.appendChild(s)
app.appendChild(h1)
app.appendChild(p)


function buttonMaker() {
  const button = document.createElement('button')
  const text = document.createTextNode('Push Me')
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


imgRow.forEach(function(Element) {
  let x = Math.floor(Math.random() * 10)
  Element.style.backgroundImage = `url(' ${locations[x]} ')`
})

// document.querySelector('.pics').style.backgroundImage = "url('" + locations[0] + "')"
// document.querySelectorAll('.pics')[1].style.backgroundImage = "url('" + locations[7] + "')"
// document.querySelectorAll('.pics')[2].style.backgroundImage = "url('" + locations[5] + "')"