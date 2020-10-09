var num = [5, 8, 2, 9, 3, 5, 2, 10, 5]
num.push(10)
num.sort((a,b)=>a-b)

console.log(num)
/*
for(var c = 0;c < num.length;c++){
    console.log(`A posição ${c} tem o valor de ${num[c]}`)
}


for(let pos in num){
    console.log(`A posição ${pos} tem o valor de ${num[pos]}`)
}
*/

let posi = num.indexOf(4)
console.log(posi)