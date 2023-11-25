import { getDatabase , ref, push} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"

export function guardar(){

    const Datos = document.querySelector("#Datos");

    const titulo = document.getElementById('ArtNombre');
    const intro = document.getElementById('ArtIntro');
    const principal = document.getElementById('ArtCont');
    const conclusion = document.getElementById('ArtConcl');

    const db = getDatabase();


    Datos.addEventListener('submit', (e) => {
        e.preventDefault();
        push(ref(db, 'Publicacion/'),{
            Titulo: titulo.value,
            Introduccion: intro.value,
            Principal: principal.value,
            Conclusion: conclusion.value
          });
    })
}