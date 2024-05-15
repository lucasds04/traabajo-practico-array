const numeros=[20,15,2,58,47,2,1];
function numbajo(array) {
    const numMinimo = Math.min(...array);
    console.log("el numero mas bajo es: " + numMinimo);
}
numbajo(numeros);