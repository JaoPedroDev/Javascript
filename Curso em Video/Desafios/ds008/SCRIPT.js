function calcular(){
    var produto = prompt("Digite o nome do produto:")
    var valor = Number(prompt("Digite o valor do produto"))
    var porcentagem = Number(prompt("Digitie o valor do desconto em porcentagem(%)"))
    var desconto = (valor*porcentagem)/100
    var res = document.getElementById('res')
    

    res.innerHTML = ""
    res.innerHTML += `<h1>Calcular o valor de desconto de ${porcentagem}% sobre ${produto}...</h1>`
    res.innerHTML += `O preço original era de R$${valor}.</br>`
    res.innerHTML += `Você acaba de ganhar R$${desconto} de desconto (-%${porcentagem})</br>`
    res.innerHTML += `Você irá pagar R$${valor - desconto}.`
}