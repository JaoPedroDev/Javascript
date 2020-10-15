function calcular(){
    var a = Number(prompt("Insira o valor de a:"))
    var b = Number(prompt("Insira o valor de b:"))
    var c = Number(prompt("Insira o valor de C:"))
    var delta = (b)**2 - 4 * a * c
    var res = document.getElementById("res")

    res.innerHTML = ""
    res.innerHTML += `<h1>Resolvendo Bhaskara</h1>`
    res.innerHTML += `<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></br></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>&Delta; = ${b}² - 4 . ${a} . ${c}</strong></br></p>`
    res.innerHTML += `<p>O valor calculado foi <strong>&Delta; = ${delta}</strong></br></p>`
}