//Loop entre propriedades enumeráveis de um objeto
//For in 

//Retorna o objeto
function forInExemplo(obj){
    for(prop in obj){
        console.log(prop)
    }
}

const meuObjeto = {
    name: "John",
    age: "20",
    tower: "Manaus"
}

//Retorna o valor de objeto
function forInExemplo2(obj){
    for(prop in obj){
        console.log(obj[prop]);
    }
}

const meuObejeto2 = {
    name: "John",
    age: "20",
    tower: "Manaus"
}

console.log(forInExemplo2(meuObejeto2));
console.log(forInExemplo(meuObjeto));