import { getDatabase , ref, set , push, get, child} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"

export function leerdatos(app){
    const dbRef = ref(getDatabase());
    const $titulo = document.getElementById('Tituloxd'),
    $Intro = document.getElementById('introduccionxd'),
    $cont = document.getElementById('contenidoxd'),
    $concl = document.getElementById('conclusionxd'),
    $img = document.getElementById('imgxd');

    console.log(dbRef);
get(child(dbRef, `Publicacion`)).then((snapshot) => {
if (snapshot.exists()) {
    let data = snapshot.val();
    //console.log(data);
    for(let clave in data){
        var datoInd = data[clave];
        console.log("Clave:", clave, "Datos:", datoInd);
        $titulo.textContent = datoInd.Titulo;
        $Intro.textContent = datoInd.Introduccion;
        $cont.textContent = datoInd.Principal;
        $concl.textContent = datoInd.Conclusion;
        $img.src = datoInd.Imagen;
    }
} else {
    console.log("No data available");
}
}).catch((error) => {
console.error(error);
});
}