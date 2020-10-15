function converter(){
    var valor = Number(prompt("Digite uma distancia em metros (m)"))
    var res = document.getElementById("res")
    
    res.innerHTML = ""
    res.innerHTML = `<h1>A distância de ${valor} metros, corresponde a...</h1>`
    res.innerHTML += `${((valor/10)/10)/10} quilômetros (Km) </br>`
    res.innerHTML += `${(valor/10)/10} hectômetros (Hm) </br>`
    res.innerHTML += `${valor/10} decâmetros (Dam) </br>`
    res.innerHTML += `${valor*10} decímetros (dm) </br>`
    res.innerHTML += `${valor*10*10} centímetros (cm) </br>`
    res.innerHTML += `${valor*10*10*10} milímetros (mm)`
}