/* colocar o número de passos e validações de caixa vazia e passo zero */


function somando(){

    const ini = Number(document.getElementById('inicio').value);

    const fim = Number(document.getElementById("fim").value);

    let resposta = `${ini}`;
    let control = ini;

    for(var i=0; i < fim; i++){

        control = control + 2;

        if ( control <= fim ){
            resposta += ` <span>-></span> ${control}`;
            console.log(ini);
        }
    }
    console.log(`fim: ${ini}`);
    document.getElementById("resultado").innerHTML = resposta;
}

