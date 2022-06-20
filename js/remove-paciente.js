var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
  event.target.parentNode.classList.add("fadeOut"); //Classe criada no CSS para animação

  setTimeout(function(){
    if(event.target.tagName == 'TD'){
    event.target.parentNode.remove(); // TR = paciente = remover
    }
  },500);
});































/* var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
  var alvoEvento = event.target;
  var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover

  paiDoAlvo.remove();

}); */




/* pacientes.forEach(function(paciente){
  paciente.addEventListener("dblclick", function(){
      console.log("Fui clicado com um duplo click");
  });
}); */