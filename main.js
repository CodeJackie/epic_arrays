import './style.css'

const app = document.getElementById('app')
let h1 = document.createElement('h1')
let hello = document.createTextNode('Hello World')
h1.appendChild(hello)
let p = document.createElement('p')
let s = document.createTextNode('This is where the app will go.')
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
