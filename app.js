
// Variables de los selectores Ej. Css h1{}

const h1 = document.querySelector('h1');

const input1 = document.querySelector('#inptCalculo1');
const input2 = document.querySelector('#inptCalculo2');
const btnCalculo = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');
const formulario = document.querySelector('#formulario');


formulario.addEventListener('submit', btnOnclik)

function btnOnclik (event){
    event.preventDefault()
    const sumaInputs = input1.value + input2.value 
    

    result.textContent = sumaInputs
}