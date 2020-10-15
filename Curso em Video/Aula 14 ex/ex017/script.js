function calcular() {
    var tnumero = document.getElementById('txtnumero')
    var tlimite = document.getElementById('txtlimite')
    var tab = document.getElementById('tab')
    var numero = Number(tnumero.value)
    var limite = Number(tlimite.value)
    
    if(tnumero.value.length == 0 || tlimite.value.length == 0){
        alert('[ERRO] Insira um número!')
    }else{
        tab.size = `${limite + 1}`
        tab.innerHTML = ``
        for(var c = 0;c <= limite; c++){
            var item = document.createElement('option')
            item.text += `${c} x ${numero} = ${c * numero}`
            tab.appendChild(item)
        }
    }
}