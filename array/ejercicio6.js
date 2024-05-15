let numeros =[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
function imprimiRepetidos(array){
    let num =[];
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] === array[j]){
               console.log((array[j]));
            }
        }
    }
}
imprimiRepetidos(numeros);