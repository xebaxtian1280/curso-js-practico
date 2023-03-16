
// Variables de los selectores Ej. Css h1{}

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value)

console.log(
    {h1,
    p,
    parrafito,
    pid,
    input}
)

//h1.innerText = 'Patito <br> Feo'
//console.log( h1.setAttribute('class', 'rojo'))

h1.classList.add('rojo')
h1.classList.remove('verde')
input.value = 456

const img = document.createElement('img')

img.setAttribute('src', 'https://http2.mlstatic.com/D_NQ_NP_909644-MCO49114589585_022022-V.jpg')

pid.textContent = ""
pid.innerHTML(img)