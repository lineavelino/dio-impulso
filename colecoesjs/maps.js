//Atividade 1
function getAdmins(map) {
    let admins = [];

    for ([key, value] of map) {
        if (value === "Admin") {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set("Aline", "Admin")
usuarios.set("João", "User")
usuarios.set("Maria", "Admin")
usuarios.set("Ana", "Admin")
usuarios.set("Amora", "User")

console.log(getAdmins(usuarios));