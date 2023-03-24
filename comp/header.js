function createHead(titleText) {
  const head = document.head

  const title = document.createElement('title')
  const metaCharset = document.createElement('metaCharset')
  const viewport = document.createElement('meta')
  const desc = document.createElement('meta')
  const version = document.createElement('meta')
  const author = document.createElement('meta')

  title.textContent = titleText
  metaCharset.setAttribute('charset', 'UTF-8')
  viewport.setAttribute('name', 'Viewport',)
  viewport.setAttribute('content', 'width=device-width, initial-scale=1.0')
  desc.setAttribute('name', 'description')
  desc.setAttribute('content', 'An application to match AI generated art from Dream with AI generated stories from ChatGPT based on the animated art.')
  version.setAttribute('name', 'version')
  version.setAttribute('content', '1.0')
  version.setAttribute('date', 'March 2023')
  author.setAttribute('name', 'author')
  author.setAttribute('content', 'CodeJackie')

  head.appendChild(metaCharset)
  head.appendChild(viewport)
  head.appendChild(title)
  head.appendChild(desc)
  head.appendChild(version)
  head.appendChild(author)
}

function createHeader() {
  const header = document.createElement('header')
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')
  const logo = document.createElement('h2')
  const div = document.createElement('div')
  const menu = document.createElement('div')

  div.id = 'logo'
  logo.textContent = 'Project EPIC'
  div.appendChild(logo)
  nav.appendChild(div)

  const links = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about.html' },
    { text: 'Contact', href: '/contact.html' }
  ]

  links.forEach(link => {
    const li = document.createElement('li')
    const a = document.createElement('a')

    li.textContent = link.text
    a.href = link.href
    menu.id = "menu"

    li.appendChild(a)
    ul.appendChild(li)
    }
  )
  
  menu.appendChild(ul)
  nav.appendChild(menu)
  header.appendChild(nav)

  document.body.prepend(header)
  
}

function ignite(titleText) {
  createHead(titleText)
  createHeader()
}

export { ignite }