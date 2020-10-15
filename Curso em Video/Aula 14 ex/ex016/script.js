function contar(){
    var inicio = document.getElementById('txtInicio')
    var fim = document.getElementById('txtFim')
    var passo = document.getElementById('txtPasso')
    var res = document.getElementById('res')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    }
    else if(passo.value == 0){
        //Se o passo for igual a zero, muda o valor de passo para um
        alert(`0 não é um passo válido! Utilizando 1 no lugar!`)
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = 1 //Passo recebe um
        
        //Testa se o inicio é menor ou maoir que o fim
        if(i < f){
            //Se for menor, contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} -`
            }
        }else if(i > f){
            //Se for maior, contagem regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} -`
            }
        } 
        res.innerHTML += ` Acabou!`
    }
    else{
        //Se o passo não for igual a zero, passo não ganha nenhum valor pré-determinado
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value) //Passo recebe o value do input passo em formato Number

        //Testa se o inicio é menor ou maior que o fim
        if(i < f){
            //Se for menor, contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} -`
            }
        }else if(i > f){
            //Se for maior, contagem regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} -`
            }
        }

        res.innerHTML += ` Acabou!`
    }
}