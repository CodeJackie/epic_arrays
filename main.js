import './css/style.css'
import { ignite } from './comp/header'
import { getImages, array, getStories, epicArray } from './queries/queries'


document.addEventListener('DOMContentLoaded', () => {
  ignite(titleText)
} )



const picArray = []
const div = document.createElement('div')

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


//Match all images to all possible stories
//refactor to return promise

function matchmaker() {
  return new Promise ((resolve) => {
    
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
        resolve(epicMatch)
    })
  })
}

//Event Listeners
matchmaker().then((epicMatch) => {
  let epic = []
  const cards = document.querySelectorAll('.pics')
  cards.forEach((card) => {
    card.addEventListener('click', function() {
      const customId = this.getAttribute('data-custom-id')
      console.log(customId)
      
      let epicCopy = []
      for (const match of epicMatch) {
        if (customId === match.image.id) {
          epic.push(match) 
        } else {
          epicCopy.push(match)
        }
        }
        if (epic.length === 0) {
          console.log("This didn't work. Something isn't right.") 
        } else {
            if (epic.length > 0) {
              let x = Math.floor( Math.random() * epic.length )
              //take the random narrative and map the data to the appropriate html elements
              const nar = document.getElementById('narrative')
              const h2 = document.createElement('h2')
              const div = document.createElement('div')
              const p = document.createElement('p')
              const flex = document.createElement('div')//.classList.add('content')
              const flexy1 = document.createElement('div')
              const flexy2 = document.createElement('div')//.classList.add('textContent')
              const title = document.createTextNode(epic[x].title)
              const content = document.createTextNode(epic[x].content)
              const date = document.createTextNode(epic[x].date)
              const img = epic[x].image.imgUrl //returns [object]
              flexy1.style.backgroundImage = `url('${img}')`
              flex.appendChild(flexy1)
              h2.appendChild(title)
              flexy2.appendChild(h2)
              p.appendChild(date)
              flexy2.appendChild(p)
              div.appendChild(content)
              flexy2.appendChild(div)
              flex.appendChild(flexy2)
              nar.appendChild(flex)
              flex.classList.add('content')
              flexy2.classList.add('textContent')
              nar.style.display = 'block'
              
              
              epicCopy = []     
          }
        }
      })
    })
  })




//On Click, select one of the matching stories to the image id
//On click, match the ids in StoryArray to the Data Attribute of the selected story
//On Click, set data attribute as variable. EpicArray.forEach(item() => { if(data.val === EpicArray.id) { epic.push(item)}})