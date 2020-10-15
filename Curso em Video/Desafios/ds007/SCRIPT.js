function converter(){
    var dolar = Number(prompt("Qual o valor do dolar atualmente?"))
    var reais = Number(prompt("Quanto você possui na sua carteira?"))
    var convertido = reais/dolar
    var res = document.getElementById("res")

    res.innerHTML = ""
    res.innerHTML += `<h1>Com R$${reais} é possível comprar U$${convertido}!</h1>`
}