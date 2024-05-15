function primerMayuscula(texto){
    var letra = texto.split(' ')
    for (var i = 0; i < letra.length; i++) {
        letra[i] = letra[i].charAt(0).toUpperCase() + letra[i].slice(1)
    }
    return letra.join(' ')
}
frase = prompt('Ingresa una frase  en minúsculas')
console.log(primerMayuscula(frase));