
let button = document.querySelector('#btn') // Selects the first button on the page
let clickTracker = document.querySelector('p')
let counter = 0

button.addEventListener('click', function(event) {
    counter = counter + 1
    document.querySelector('p').innerHTML = counter;

})d