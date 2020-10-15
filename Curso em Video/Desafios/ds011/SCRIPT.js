function verificar(){
    var ano = Number(prompt("Digitie o ano que deseja verificar."))
    var res = document.getElementById("res")

    if(ano % 4 == 0){// Etapa 1
        if(ano % 100 == 0){// Etapa 2
            if(ano % 400 == 0){// Etapa 3
                res.innerHTML = `O ano de ${ano} é bissexto &#10004;`
            }else{
                res.innerHTML = `O ano de ${ano} não é bissexto &#10006;`
            }
        }else{
            res.innerHTML = `O ano de ${ano} é bissexto &#10004;`
        }
    }else{
        res.innerHTML = `O ano de ${ano} não é bissexto &#10006;`
    }
}