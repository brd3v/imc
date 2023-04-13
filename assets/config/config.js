console.log('hello world')

const app = document.getElementById('app')



resultado = ''

app = document.getElementById('app').innerHTML = `
<h1 class='title'>CALULADORA DE IMC</h1>
<div class='calculator'>
<input type='number' id='peso' class='peso'>
<input type='number' id='altura' class='altura'>
<input type='submit' onclick='calculos()' id='btn' value='calcular'>
<p id='resultado'>${resultado}</p>
</div>

`


const btn = document.getElementById('btn')



function calculos(){
    var peso = document.getElementById('peso').value
var altura = document.getElementById('altura').value
var calculo = document.getElementById('resultado')
    console.log('click')
   let resultado =  peso / (altura* altura)
   calculo.innerHTML = ` seu imc é ${resultado.toFixed(1)}`




   console.log(resultado)
   
    
}




console.log(resultado)


