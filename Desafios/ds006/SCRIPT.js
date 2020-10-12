function converter(){
    var n = Number(prompt("Diga uma temperatura, em Celcius (°C), a ser convertida:"))
    var res = document.getElementById("res")
    var k = n + 273.15
    var f = n * 1.8 + 32
    
    res.innerHTML = ""
    res.innerHTML += `<h1>A temperatura de ${n}°C, corresponde a...</h1>`
    res.innerHTML += `${k}°K (Kelvin) </br>`//Kelvin
    res.innerHTML += `${f}°F (Fahrenheit)`//Fahrenheit
}