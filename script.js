let add = document.getElementById("adicionar")
let tarefas= document.querySelector("#botao")
let inputTarefa= document.querySelector("#tarefa")

add.onclick = function(){

    let valor=inputTarefa.value

    let tarefaNova=` 
    <div class="card-tarefa row" >
    <div class="texto-tarefa ">
        ${valor}
    <div class="botao">

        <img src="IMG/buttom.png" width="32" class="confir">

    </div>
    
    </div>
    </div> `
  tarefas.innerHTML+=tarefaNova
}
