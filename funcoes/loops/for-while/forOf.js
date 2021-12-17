//Loop entre estruturas iteráveis(arrays,string).
//For of

//Letras
function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}

const palavra = 'abacaxi';

//Números
function logNumeros(numero){
    for(num of numero){
        console.log(num);
    }
}
const numeros = [30, 20, 233, 2]

console.log(logLetras(palavra));
console.log(logNumeros(numeros));