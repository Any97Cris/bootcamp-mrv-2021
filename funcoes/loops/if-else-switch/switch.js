//estrutura SWITCH

function getAnimal(id){
    switch(id){
        case 1: 
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        case 4:
            return "peixe";
    }
}

console.log(getAnimal(3));