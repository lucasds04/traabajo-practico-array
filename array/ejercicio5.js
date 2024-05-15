let numeros =[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
let indicen = 1 ;
function imprimirnumero(array,indice){
    if (indice >= 0 && indice < array.length) {
        const numero = array[indice];
        console.log("El numero en la posicion ", indice, "es:", numero);
    }
}
imprimirnumero(numeros, indicen);