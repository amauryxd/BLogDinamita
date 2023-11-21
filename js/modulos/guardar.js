import { getDatabase , ref, set } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"

export function guardar(){

    const Datos = document.querySelector("#Datos");

    const txt = document.getElementById('ArtNombre');
    const db = getDatabase();


    Datos.addEventListener('click', (e) => {
        e.preventDefault();
        set(ref(db, 'Publicacion/' + 6), {
            Titulo: txt.valuee
          });
    })
}