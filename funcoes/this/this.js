//A palavra reservada THIS é uma referência de contexto
//No exemplo a baixo, this refere-se ao objeto pessoa

const pessoa = {
    firstName: "Pidge",
    lastName: "Souza",
    id: 1,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getId: function() {
        return this.id;
    }
};

console.log(pessoa.fullName());
console.log(pessoa.getId());