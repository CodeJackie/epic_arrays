const array = []
const epicArray = []

function sendQuery(query) {
    return fetch('http://localhost:9343/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ query }),
    })
    .then(response => response.json())
    .catch(error => console.error('Something went wrong. Error fetching data:', error))
}

function getImages() {

    const query = `
        {
            images {
                id
                imgUrl
                imgAlt
                imgTitle
            }
        }
    
`
    return sendQuery(query) 
    .then(data => {
        const images = data.data.images
  

        images.forEach(image => {
            array.push(image)
        })
        
    })
    .catch(error => console.error('Error getting images:', error));

}
function getStories() {

    const query = `
        {
            stories {
                id
                title
                date
                content
                image {
                    id
                    imgUrl
                    imgAlt
                    imgTitle
                }
            }
        }
    
`
    return sendQuery(query) 
    .then(data => {
        const stories = data.data.stories
  

        stories.forEach(story => {
            epicArray.push(story)
        })
        
    })
    .catch(error => console.error('Error getting stories:', error));

}

export { getImages, array, getStories, epicArray }