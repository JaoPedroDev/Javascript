function reajustar(){
    var nome = prompt("Nome do funcionário:")
    var salario = Number(prompt(`Salário de ${nome}`))
    var porcentagem = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    var aumento = (salario*porcentagem)/100
    var res = document.getElementById("res")

    res.innerHTML = ""
    res.innerHTML += `<h1>${nome} recebeu um aumento salarial!</h1>`
    res.innerHTML += `<p>O saláro atual era de R$${salario}.</br></p>`
    res.innerHTML += `<p>Com um aumento de ${porcentagem}%, o salário vai aumentar R$${aumento} no próximo mês.</br></p>`
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar R${salario + aumento}.</br></p>`
}