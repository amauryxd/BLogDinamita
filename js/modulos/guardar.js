import { getDatabBase , ref, set } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"

export function guardar(){

    const txt = document.getElementById('ArtNombre');
    const db = getDatabase();

    btnEnviar.addEventListener('click', (e) => {

        console.log("hola")
        e.preventDefault();
        set(ref(db, 'Publicacion/' + 1), {
            Titulo: txt.value
          });
    })
}