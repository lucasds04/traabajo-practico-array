function palabaraMasLarga(text){
    let frase = text.split(" ");
    let aux = text[0];
    
    for (let i = 0; i < frase.length; i++){
        if(aux.length < frase[i].length){
            aux = frase[i];
        }
    }
    return aux;
}
texto = prompt('ingrese una frase')
console.log(palabaraMasLarga(texto));