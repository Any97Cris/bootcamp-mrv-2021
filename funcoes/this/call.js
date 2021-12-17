//metodo CALL

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

getSomething.call(pessoa);


//Exemplo 2

//É possível passar parâmetros para essa função separando-os por vírgulas

const myObj = {
    num1: 3,
    num2: 2
};

function soma(a,b) {
    console.log(this.num1 + this.num2 + a + b);
};

console.log(soma.call(myObj,1,5));