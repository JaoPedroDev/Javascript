    var inputnum = document.getElementById('txtnumber')
    var num = [] //Declara array vazia fora da função para não apagar a lista
    var lista = document.getElementById('lista')
    var res = document.getElementById('res')

function adicionar(){
    var n = Number(inputnum.value) //n recebe o valor de inputnum em formato Number
    res.innerHTML = ""
    if(inputnum.value.length == 0){
        alert("[ERRO] Falta de numeros")
    }else if(num.indexOf(n) != -1){ //Verifica se o proximo numero a ser adicionado já esta contido na lista
        alert(`${n} já esta contido na lista`)
    }else if(n < 1 || n > 100){
        alert("Permitido apenas numeros entre 1 e 100")
    }else{
    num.push(n) //Coloca o valor de n na ultima posição da array num
    
    var lnum = num[num.length - 1] //lnum recebe o ultimo valor da array num
    var item = document.createElement('option') //Cria o elemento option
    item.text += `Valor ${lnum} foi adicionado`//Escreve o valor de lnum dentro do option anteriormente criado
    lista.appendChild(item) //Adiciona o option editado ao select lista
    }
    inputnum.value = ''
    inputnum.focus()
}


function finalizar(){
    if(num.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
    var max = Math.max.apply(null, num) //Pega o maior valor da array num
    var min = Math.min.apply(null, num) //Pega o menor valor da array num
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    var sum = num.reduce(reducer)
    res.innerHTML = `Ao todo, temos ${num.length} elementos cadastrados.</br>`
    res.innerHTML += `O maior número informado foi ${max}</br>`
    res.innerHTML += `O menor número informado foi ${min}</br>`
    res.innerHTML += `Somando todos os valores, temos ${sum}</br>`
    res.innerHTML += `A média entre os valores é ${sum/num.length}</br>`
    }
}

/*
Nao deixa repetir numeros ja adicionados, nao funciona!!
else if(num.indexOf(lnum) != -1){
    alert(`${lnum} já esta contido na lista`)
*/