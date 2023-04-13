console.log('hello world')

const app = document.getElementById('app')




app = document.getElementById('app').innerHTML = `
<h1 class='title'>CALULADORA DE IMC</h1>
<div class='calculator'>
<input type='number' placeholder='digite o seu peso...' id='peso' class='peso'>
<input type='number' placeholder='digite a sua altura...' id='altura' class='altura'>
<input type='submit' onclick='calculos()' id='btn' value='calcular'>
<p id='resultado'></p>
</div>

`


const btn = document.getElementById('btn')



function calculos() {
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let calculo = document.getElementById('resultado')
    console.log('click')
    let resultado = peso / (altura * altura)

  if (resultado < 18.5) {
        calculo.innerHTML = ` seu imc é ${resultado.toFixed(1)}, e você esta abaixo do peso e precisa se alimentar melhor`
    } else if (resultado > 18.5 && resultado < 24.9) {
        calculo.innerHTML = ` seu imc é ${resultado.toFixed(1)}, e você esta no seu peso ideal`
    }
    else if (resultado > 24.9 && resultado < 29.9) {
        calculo.innerHTML = ` seu imc é ${resultado.toFixed(1)}, e você esta com obesidade nivel 1`
    }
    else if (resultado > 29.9 && resultado < 39.9) {
        calculo.innerHTML = ` seu imc é ${resultado.toFixed(1)}, e você esta com obesidade nivel 2 CUIDADO!`
    }
    else if (resultado > 40) {
        calculo.innerHTML = ` seu imc é ${resultado.toFixed(1)}, e você esta com obesidade nivel 3 Preocure um profissional`
    }
    console.log(resultado)


}




console.log(resultado)


