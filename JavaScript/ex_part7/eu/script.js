/*
        -> Adicionando valores ao vetor e as options ao select <-

*/

const array = [];

function add(){
    let num = document.getElementById("entrada");
    let valor = Number(num.value);

    if(num.value.length == 0){
        window.alert("Por favor, digite um número!");

    } else if(valor > 0 && valor <= 100 && array.indexOf(valor)) {
        array.push(valor);
        visual(array);

    } else {
        window.alert("Valor INVÁLIDO")
    }
}

function visual(ary){
    const txt = [];

    for(let i = 0; i < ary.length; i++){
        txt[i] += `<option>Valor ${ary[i]} adicionado</option>`;
    }

    document.getElementById("lista").innerHTML = txt;
}

/*
            -> DADOS <-

    - quantidade de números inserido na array = V
    - O maior número = V
    - o menor número = V
    - a soma de todo =V
    - a media = V

*/

function finalizar(){
    let quantidade = array.length;
    let maiorNum = Math.max.apply(null, array);
    let menorNum = Math.min.apply(null, array);
    let somaTotal = soma(array);
    let mediaArit = media(array, somaTotal);

    let resultado = `<p>Foram inserido ${quantidade} números</p>`
                + `<p>O maior número é o ${maiorNum}</p>`
                + `<p>O menor número é o ${menorNum}</p>`
                + `<p>A soma de totos os elementos é ${somaTotal}</p>`
                + `<p>a media dos elementos é ${mediaArit}</p>`;


    document.getElementById("dados").innerHTML = resultado;
}

function soma(arr) {
    let som = 0;

    for(let i= 0; i< arr.length; i++){
        som += arr[i];
    }
    return som;

}

function media(arr, total) {
    return (total / arr.length);

}
