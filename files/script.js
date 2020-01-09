var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var tarefas = JSON.parse(localStorage.getItem('lista_tarefas')) || [];

function criaLista() {
    listElement.innerHTML = '';
    for(tarefa of tarefas) {
        var tarefaElement = document.createElement('li');
        var tarefaText = document.createTextNode(tarefa + ' ');

        var linkElement = document.createElement('a');
        
        linkElement.setAttribute('href', '#');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        var pos = tarefas.indexOf(tarefa);
        linkElement.setAttribute('onclick', 'deleteTarefa('+pos+')')
        
        tarefaElement.appendChild(tarefaText);
        tarefaElement.appendChild(linkElement);

        listElement.appendChild(tarefaElement);
    }
}

criaLista();

function adicionaTarefa() {
    var tarefaText = inputElement.value;
    tarefas.push(tarefaText);
    inputElement.value = '';
    criaLista();
    saveToStorage();
}

buttonElement.onclick = adicionaTarefa;

function deleteTarefa(pos) {
    tarefas.splice(pos, 1);
    criaLista();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('lista_tarefas', JSON.stringify(tarefas));
}