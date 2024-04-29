/*function tabuada(){

    const valor = Number(document.getElementById('num').value);
    let resposta = '<option value="0">Digite um número acima</option>';
    let vall = 1;

    if ( valor == 0) {
        alert('Por favor digite um número');
    } else {
        for(var i = 0; i<=10; i++){
            resposta += `<option value="${vall}">${i} x ${valor} = ${Number(i * valor)}</option>`;
            vall++;
        }

        document.getElementById('resultado').innerHTML = resposta;
    }

}*/

function tabuada() {
    let num =document.getElementById('num');
    let tab = document.getElementById('resultado');
    if(num.value.length == 0 ){
        window.alert('Por favor, digite um número');
    } else {
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = '';
        while (c <= 10){
            let item = document.createElement('option');   //criando um item option no HTML
            item.text = `${n} x ${c} = ${n * c}`;  // definindo a sua estrutura de texto
            item.value= `tab${c}`; //adicionando um VALUE para cada option
            tab.appendChild(item); //para adicionar um elemento filho
            c++;
        }
    }
}

