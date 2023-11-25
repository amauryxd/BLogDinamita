import { getDatabase , ref, push} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"
import {
    getStorage,
    ref as refStorage,
    uploadBytesResumable,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";



export function guardar(app){
    const storage = getStorage(app);
    const Datos = document.querySelector("#Datos");

    const titulo = document.getElementById('ArtNombre');
    const intro = document.getElementById('ArtIntro');
    const principal = document.getElementById('ArtCont');
    const conclusion = document.getElementById('ArtConcl');
    const archivos = document.getElementById('uploader');
    let linkimg;

    const db = getDatabase();

    Datos.addEventListener('submit', (e) => {
        e.preventDefault();
        let fileList = Array.from(archivos.files);

        fileList.forEach((file)=> {
            const filesRef = refStorage(storage,"files/"+file.name), uploadTask = uploadBytesResumable(filesRef, file);
            uploadTask.on("state_changed", (snapshot)=>{
                //aqui va que se estan subiendo los cambios
                console.log("se esta subiendo creo");
            },
            (err) => {
                console.log("salio un error :c "+err.code+" mas esto: "+err.message);
                //aqui que algo salio mal y no se subio el arhivo
            },
            ()=>{
                getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadURL)=>{
                    linkimg = downloadURL;
                    subirtodo(db,titulo,intro,principal,conclusion,linkimg);
                })
                .catch((err)=>{
                    //aqui que salio otro error
                    console.log("saliounerrorxd "+err.code+" mas esto: "+err.message);
                });
            }
            )
        });
        /*
        push(ref(db, 'Publicacion/'),{
            Titulo: titulo.value,
            Introduccion: intro.value,
            Principal: principal.value,
            Conclusion: conclusion.value,
            Imagen: linkimg
        });
    */
    })
}

function subirtodo(db,titulo,intro,principal,conclusion,linkimg){
    push(ref(db, 'Publicacion/'),{
        Titulo: titulo.value,
        Introduccion: intro.value,
        Principal: principal.value,
        Conclusion: conclusion.value,
        Imagen: linkimg
    });
}
