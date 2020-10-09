//RECURSIVIDADE
function fator(n){
    if(n == 1){
        return 1
    }else {
        return n * fator(n-1)
    }
}

console.log(fator(5))
/*

5! = 5 x 4 x 3 x 2 x 1 = 120
5! = 5 x 4!

n! = n x (n-1)!

*/


