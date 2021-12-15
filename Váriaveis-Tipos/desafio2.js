function substituePares(array){
    if(!array) return -1; //verificando se o array esta vazio
    //if()

    for(let i=0; i < array.length; i++){
        if(array[i] === 0){//verificando se o array ja tem 0
            console.log("já é valor 0!");
        }else if(array[i] % 2 === 0){//verificando se o array possue numero par
            console.log(`Subistituindo ${array[i]} por 0...`);
            array[i] = 0            
        }
    }
    return array;
}

var arrei = [1, 3, 4, 6, 80, 33, 23, 90];

console.log(substituePares(arrei));