function notas(){
    var aluno = prompt("Qual o nome do aluno?")
    var nota1 = Number(prompt(`Primeira nota de ${aluno}:`))
    var nota2 = Number(prompt(`Segunda nota de ${aluno}:`))
    var med = (nota1 + nota2)/2
    var res = document.getElementById("res")

    
    res.innerHTML = ""
    res.innerHTML = `<h1>Analisando as notas de ${aluno}</h1>`
    res.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${med}.</strong></p>`

    if(med < 3){
        res.innerHTML += `Com a média abaixo de 3, o aluno está reprovado`//reprovado
    }else if(med >= 3 && med <= 6){
        res.innerHTML += "Com a média entre 3 e 6, o aluno está de recuperação"//recuperacao
    }else if(med > 6){
        res.innerHTML += "Com a média acima de 6, o aluno está aprovado"//aprovado
    }
}