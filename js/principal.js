/* 	console.log(document.querySelector("h1")); */
var titulo = document.querySelector(".titulo");
console.log(titulo);

console.log(titulo.textContent);
titulo.textContent = "Aparecida nutricionista";

console.log("Fui carregado de um arquivo externo");

var paciente = document.querySelector("#tabela-pacientes");

var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = document.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdInfo = document.querySelector(".info-imc");

console.log(paciente); //tr
console.log(tdPeso); // td que tem o peso
console.log(peso); //obter 100

console.log(tdAltura);
console.log(altura);


var pesoEhValido = true;
var alturaEhValida = true;


if(peso <= 0 || peso >= 1000) {
   tdInfo.textContent = "Peso invalido!"
   pesoEhValido = false;
}

if(altura <= 0 || altura >= 3.000) {
  tdInfo.textContent = "Altura Inválida!"
  alturaEhValida = false; 
}

if(alturaEhValida && pesoEhValido){
  var IMC = peso/(altura*altura);
  console.log(IMC);
  tdInfo.textContent = IMC; // Colocando o resultado o IMC do Paulo na posição correta na coluna IMC
  
}