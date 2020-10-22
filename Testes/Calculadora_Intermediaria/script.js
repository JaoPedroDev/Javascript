    res = document.getElementById("res")
function number(n){//Escreve o numero do botão precionado no input "res"
    res.value += n
}
function calculator(o){//Deve calcular o resultado
    var numbers = []
    numbers.push(res.value)
    alert(numbers)
    res.value = ""
}