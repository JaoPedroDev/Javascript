function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
                genero = 'Menino'
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
                genero = 'Homem'
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
                genero = 'Homem'
            }else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
                genero = 'Idoso'
            }
        }else if(fsex[1].checked){
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
                genero = 'Menina'
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
                genero = 'Mulher'
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
                genero = 'Mulher'
            }else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
                genero = 'Idosa'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} de ${idade} anos.</br>`
        res.appendChild(img)
    }
}