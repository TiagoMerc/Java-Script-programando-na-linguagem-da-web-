/* 	console.log(document.querySelector("h1")); */
var titulo = document.querySelector(".titulo");
/* console.log(titulo);

console.log(titulo.textContent); */
titulo.textContent = "Aparecida nutricionista";

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
  
  console.log(paciente); //tr
  console.log(tdPeso); // td que tem o peso
  console.log(peso); //obter 100
  
  console.log(tdAltura);
  console.log(altura);
  
  var pesoEhValido = true;
  var alturaEhValida = true;
  
  if(peso <= 0 || peso >= 1000) {
     tdImc.textContent = "Peso invalido!"
     pesoEhValido = false;
    /*  paciente.style.backgroundColor="orange"; */
     paciente.classList.add("paciente-invalido");
  }
  
  if(altura <= 0 || altura >= 3.000) {
    tdImc.textContent = "Altura Inválida!"
    alturaEhValida = false;
   /*  paciente.style.backgroundColor="orange";  */
    paciente.classList.add("paciente-invalido");
  }
  
  if(alturaEhValida && pesoEhValido){
    var IMC = peso/(altura*altura);
    console.log(IMC);
    tdImc.textContent = IMC.toFixed(2); // Colocando o resultado o IMC do Paulo na posição correta na coluna IMC
    
  }

}

/* titulo.addEventListener("click", mostraEvento);

function mostraEvento(){
  console.log("Eu fui clicado");
} */

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();
/*   console.log("Oi, eu sou o botão e funcionei");
 */

  var  form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var altura = form.gordura.value;

  console.log(nome);
  console.log(peso);
  console.log(altura);
  console.log(gordura);


});

titulo.addEventListener("click", function() {
  console.log("fui clicado");
});

