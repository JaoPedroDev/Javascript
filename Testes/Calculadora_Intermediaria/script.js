var valor = document.getElementById("visor")
function botao(n){//Escreve o numero do botão precionado no input "visor"
    valor.value += n
}
function calcular(){
    var res = eval(valor.value)
    valor.value = res
}
function reset(){
    valor.value = ""
}