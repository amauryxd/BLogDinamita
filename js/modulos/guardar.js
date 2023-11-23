import { getDatabase , ref, set , push} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"

export function guardar(){

    const Datos = document.querySelector("#Datos");

    const txt = document.getElementById('ArtNombre');
    const db = getDatabase();


    Datos.addEventListener('submit', (e) => {
        e.preventDefault();
        push(ref(db, 'Publicacion/'),{
            Titulo: txt.value
          });
    })
}