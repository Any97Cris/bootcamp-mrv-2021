function multiplicaPorDois(array){
    let multiplicados = [];

    for(let i=0; i < array.length;i++){
        multiplicados.push(array[i] * 2);
    }

    return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];

console.log(multiplicaPorDois(meusNumeros));