function numerosbajo(array){
    let bajo = array[0];
    for(i = 1; i < array.length; i++ ){
        if(array[i] < bajo){
            bajo = array[i];          
        }
    }
    console.log("el valor minimo es: "+ bajo);
}
const numeros=[20,15,2,58,47,2,1];
numerosbajo(numeros);