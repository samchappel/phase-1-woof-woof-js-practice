pupUrl = 'http://localhost:3000/pups'
const dogBar = document.querySelector('#dog-bar')

function getPupData(url) {
    fetch(url)
    .then(response => response.json())
    .then(pupArray => {
        pupArray.forEach(renderDogs)
    })
}

function renderDogs(dogObj) {
    const span = document.createElement('span')
    span.textContent = dogObj.name 
    dogBar.append(span)
}

getPupData(pupUrl)
