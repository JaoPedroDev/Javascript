var divHora = document.getElementById('txthora')
var divImagem = document.getElementById('imagem')
var date = new Date()
var hora = date.getHours()
if(hora < 12){
    divHora.innerHTML = `São ${hora} horas! Bom dia!`
    document.body.style.backgroundColor = 'rgb(21, 200, 255)'
    divImagem.src = 'manha.png'
}else if(hora < 18){
    divHora.innerHTML = `São ${hora} horas! Boa tarde!`
    document.body.style.backgroundColor = 'rgb(248, 188, 23)'
    divImagem.src = 'tarde.png'
}else{
    divHora.innerHTML = `São ${hora} horas! Boa noite!`
    document.body.style.backgroundColor = 'rgb(3, 1, 114)'
    divImagem.src = 'noite.png'
}
