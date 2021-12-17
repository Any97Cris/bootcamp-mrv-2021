//Metodo APPLY

//Exemplo 1
const pessoa = {
    nome: 'Pidge'
};

const animal = {
    nome:'alienigena'
};

function getSomething() {
    console.log(this.nome);
}

getSomething.apply(pessoa);

//Exemplo 2

//A diferença entre CALL e APPLY esta na forma de passar os parametros, no apply os parametros são passados dentro de um array

const myObj = {
    num1: 10,
    num2: 12
};

function soma(a,b) {
    console.log(this.num1 + this.num2 + a + b);
};

console.log(soma.apply(myObj,[10,5]));