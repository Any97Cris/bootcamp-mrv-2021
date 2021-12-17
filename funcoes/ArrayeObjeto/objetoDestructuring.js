//Objeto Destructuring
//Entre chaves{}, podemos filtrar apenas os dados que nos interessam em um obejeto.
const user = {
    id:42,
    displayName: 'Nerd',
    fullName: {
        firstName: 'Pidge',
        lastName: 'Holt'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName:{firstName: first, lastName: last}}){
    return `${first} ${last}`;
}

console.log(userId(user));

console.log(getFullName(user));