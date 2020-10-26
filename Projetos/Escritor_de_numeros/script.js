function extender(){
    var numero = document.getElementById("numero")
    var res = document.getElementById("res")
    var numeroEx
    res.innerHTML = ""

    var unidade = ["zero","um","dois","três","quatro","cinco","seis","sete","oito","nove"]
    var dezena = ["","dez","vinte","trinta","quarenta","cinquenta","sessenta","setenta","oitenta","noventa"]
    var centena = ["","cento","duzentos","trezentos","quatrocentos","quinhentos","seiscentos","setecentos","oitocentos","novecentos"]

    var n = numero.value.split("")
    res.innerHTML += centena[n[0]]
    res.innerHTML += " e "
    res.innerHTML +=  dezena[n[1]]
    res.innerHTML += " e "
    res.innerHTML += unidade[n[2]]
}