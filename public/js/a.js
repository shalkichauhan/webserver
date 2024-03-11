// const fetch = require('node-fetch')
// fetch('http://localhost:3000/help?girls=2').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(" there is an error")
//         } else {
//             console.log(data.girls)
//
//         }
//         console.log(data)
//     })
// })
import fetch from 'node-fetch';

fetch('http://localhost:3000/help?girls=2').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(" there is an error");
        } else {
            console.log(data.girls);
        }
        console.log(data);
    });
}).catch(error => console.error('Error:', error));
//
// const my_variable = document.querySelector('form')
// const search = document.querySelector('input')
//
// my_variable.addEventListener('submit', (event) => {
//     event.preventDefault()
//
//     const vari = search.value
//     console.log(vari)
// })