const texto = 'webmaster';
function ordenAlfabetico(textos){
return[...textos].sort((a,b) => a.localeCompare(b)).join('');
}
console.log(ordenAlfabetico(texto));
