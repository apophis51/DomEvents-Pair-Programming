let button = document.querySelector("button");
let log = document.querySelector("input");
let body = document.querySelector("body");

console.log("ghf")


// button.addEventListener('click', function());

// function changeColor(log) {

//     input.addEventListener('input', function (egh) {
//         logg.textContent = egh.target.value;
//         body.style.backgroundColor = egh.target.value
//       });


    // body.style.backgroundColor = log.target.value;


// const input = document.querySelector('input');
// const logg = document.querySelector('#values');


// input.addEventListener('input', function (egh) {
//     let store = logg.textContent = egh.target.value;
//     // body.style.backgroundColor = egh.target.value
//   });


//   button.addEventListener('click', function(event) {
//     body.style.backgroundColor = `${store}`
// })


// let clickTracker = document.querySelector('p')
// let counter = 0

// button.addEventListener('click', function(event) {
//     counter = counter + 1
//     document.querySelector('p').innerHTML = counter;

// })


// const input = document.querySelector('input');
// const log = document.getElementById('values');

// input.addEventListener('input', updateValue);

// function updateValue(e) {
//   log.textContent = e.target.value;

button.addEventListener("click", function(changeColor) {
    function changeColor(i) {
        let inputValue = log.value;
        console.log(inputValue);
        body.style.backgroundColor = inputValue;
    }
})
