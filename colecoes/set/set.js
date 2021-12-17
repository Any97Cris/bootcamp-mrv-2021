//São estruturas que armazenam apenas valores únicos

const myArray = [1,1,2,2,3,4,5,6,7,8,2,1];

const mySet = new Set(myArray);

console.log(mySet);

//Metodos

const mySet2 = new Set();

//Adicionar
mySet2.add(1);
mySet2.add(5);

//Consultar
mySet2.has(1);

//Deletar
mySet2.delete(5);

console.log(mySet2);
