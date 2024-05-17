// Selecionando elementos do DOM


// ------- Selecionam apenas um elemento

//const addUserText = document.getElementById('add-user');
//addUserText.innerText = "Adicionar usuários";

//const addUserText = document.querySelector("#add-user");
//addUserText.textContent = "Adicionar Usuário";


// ------ Selecionar multiplos elementos

//const allItems = document.querySelectorAll(".items .item");
// Retorna uma Node Lista
//console.log(allItems);
//console.log(allItems[1]);

//const allItems = document.getElementsByClassName("item");
// Retorna um Html Colecction que não possíbilita usar métodos
//console.log(allItems);

const allItems = document.getElementsByTagName("li");
// Retorna um Html Colecction que não possíbilita usar métodos
console.log(allItems);
