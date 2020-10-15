function troco(){
    var produto = prompt("Que produto você está comprando?")
    var valor = prompt(`Quanto ${produto} custa?`)
    var pago = prompt(`Qual foi o valor que você deu para pagar ${produto}?`)
    alert(`Você comprou ${produto} que custou R$${valor}.
Deu R$${pago} em dinheiro e vai receber R$${pago - valor} de troco.
Volte sempre!`)
}