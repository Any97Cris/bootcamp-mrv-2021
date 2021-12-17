function getAdmins(map) {
    const admins = [];
    for([key, value] of map){
        if (value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set("Cris", "Admin");
usuarios.set("Samuelson", "Admin");
usuarios.set("Paulo", "User");
usuarios.set("Pisge", "User");

console.log(getAdmins(usuarios));