/* 	console.log(document.querySelector("h1")); */
var titulo = document.querySelector(".titulo");
/* console.log(titulo);

console.log(titulo.textContent); */
titulo.textContent = "Aparecida Nutricionista";

/* console.log("Fui carregado de um arquivo externo");
 */
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;
  
  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;
  
  var tdImc = paciente.querySelector(".info-imc");
    
  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);
  
  if(!pesoEhValido){
     console.log("Peso invalido!");
     pesoEhValido = false;
    /*  paciente.style.backgroundColor="orange"; */
     tdImc.textContent = "Peso invalido!";
     paciente.classList.add("paciente-invalido");
  }
  
  if(!alturaEhValida) {
    console.log("Altura inválida!");
    alturaEhValida = false;
   /*  paciente.style.backgroundColor="orange";  */
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
  }
  
  if(alturaEhValida && pesoEhValido){
    var IMC = calculaImc(peso, altura);
    tdImc.textContent = IMC; // Colocando o resultado o IMC do Paulo na posição correta na coluna IMC
  }
}

function validaPeso(peso){
  if(peso >= 0 && peso <= 1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura >=0 && altura <= 3.0){
    return true;
  }else{
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso/(altura*altura);
  
  return imc.toFixed(2);
}




