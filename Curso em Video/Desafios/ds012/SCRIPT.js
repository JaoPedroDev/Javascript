function verificar(){
    var precoAnterior = Number(prompt("Quanto custava o produto?"))
    var precoPosterior = Number(prompt("Quanto o produto custa agora?"))
    var res = document.getElementById("res")
    var comp = comparar(precoAnterior, precoPosterior)


    res.innerHTML = ""
    res.innerHTML += `<h1>Analisando os valores informados</h1>`
    res.innerHTML += `<p>O produto custava R$${precoAnterior.toFixed(2)} e agora custa R$${precoPosterior.toFixed(2)}.</p>`
    res.innerHTML += `<p>${comp[0]}</p>`
    res.innerHTML += `<p>${comp[1]}</p>`
    res.innerHTML += `<p>${comp[2]}</p>`
}

function comparar(anterior, posterior){
    
    if(anterior == posterior){
        return [
            "Hoje o produto está com o mesmo valor.", 
            "O preço não mudou.", 
            "Não houve variação."
        ]
    }else if(anterior > posterior){
        var caiu = (anterior - posterior).toFixed(2)
        var vari = ((anterior / posterior - 1) * 100).toFixed(2)
        return [
            "Hoje o produto está mais barato.",
            `O preço caiu R$${caiu} em relação ao preço anterior.`,
            `Uma variação de ${vari}% para baixo.`
        ]
    }else{
        var subiu = (posterior - anterior).toFixed(2)
        var vari = ((posterior / anterior - 1) * 100).toFixed(2)
        return [
            "Hoje o produto está mais caro.",
            `O preço subiu R$${subiu} em relação ao preço anterior.`,
            `Uma variação de ${vari}% para cima.`
        ]
    }
}