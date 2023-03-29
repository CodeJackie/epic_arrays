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

//V3 - Using Arrays of API data and preventing duplicates

let chosen = []
getImages().then(() => {
  let arrayCopy = [...array]
    imgRow.forEach(function(Element) {
        if (arrayCopy.length > 0) {
            let x = Math.floor(Math.random() * arrayCopy.length)
            Element.style.backgroundImage = `url('${arrayCopy[x].imgUrl}')`
            Element.setAttribute('data-custom-id', arrayCopy[x].id)
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



//Event Listeners
const cards = document.querySelectorAll('.card')
cards.forEach((card) => {
  card.addEventListener('click', function() {
    const data = this.getAttribute('data-custom-id')
    console.log('click')
    console.log(this)
    console.log(this.getAttribute('data')) //returns null

    const nar = document.getElementById('narrative')
    const title = document.createElement('h2')
    const content = document.createElement('div')
    const xbox = document.createElement('p')

  });
});

//On Click, select one of the matching stories to the image id
//On click, match the ids in StoryArray to the Data Attribute of the selected story
//On Click, set data attribute as variable. EpicArray.forEach(item() => { if(data.val === EpicArray.id) { epic.push(item)}})