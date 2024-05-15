function invertirNumero(numero) {
    let numeroaCadena = numero.toString();
    let numeroInvertido = numeroaCadena.split('').reverse().join('');
    return parseInt(numeroInvertido);
}
const numeros = 32443;
const resultado = invertirNumero(numeros);
console.log(resultado); 
invertirNumero();