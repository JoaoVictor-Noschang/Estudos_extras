function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = 14//data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;

    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'foto-manha.png';
        document.body.style.background = '#db9df8';

    }else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'foto-tarde.png';
        document.body.style.background = '#fccd8b';

    }else {
        //boa noite
        img.src = 'foto-noite.png';
        document.body.style.background = '#515154'
    }
}