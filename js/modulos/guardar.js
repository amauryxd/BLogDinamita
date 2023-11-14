export function guardar(){
    db.collection("Usuarios").add({
        Nombre: document.getElementById("Nombre").value,
        Contraseña: document.getElementById("Contraseña").value,
    })
    .then((docRef) => {
        alert("registro exitoso")
    })
    .catch((error) => {
        alert("error en el registro")
    });
}