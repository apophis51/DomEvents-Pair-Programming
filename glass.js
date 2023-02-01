let bigButton = document.querySelector('.big') 
let smallButton = document.querySelector('.small')// Selects the 
let paragraph = document.querySelector('p')



let pixcounter = 20
bigButton.addEventListener('click', function(event) {
    console.log(pixcounter)
    paragraph.style.fontSize = `${pixcounter += 1}px`;
    if (pixcounter >= 99) {
        pixcounter = 99;
    }
})


smallButton.addEventListener('click', function(event) {
    
    console.log(pixcounter)

    paragraph.style.fontSize = `${pixcounter-=1 }px`
    if (pixcounter <= 2) {
        pixcounter = 2;
    }
})