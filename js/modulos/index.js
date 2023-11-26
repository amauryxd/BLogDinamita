import { getDatabase , ref, set , push, get, child} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"

const dbRef = ref(getDatabase());

export function posts(){
    const postul = document.getElementById('postxd');
    get(child(dbRef, `Publicacion`)).then((snapshot) => {
        if (snapshot.exists()) {
            let data = snapshot.val();
            //console.log(data);
            for(let clave in data){
                var datoInd = data[clave];
                console.log("Clave:", clave, "Datos:", datoInd);
                postul.innerHTML += `
                <div class="container my-3 contenido rounded">
                    <div class="container py-5 contenido rounded-bottom text-center">
                        <h1 id="Tituloxd">${datoInd.Titulo}</h1>
                    </div>
                    <div class="container bg-dark rounded text-center py-3 my-2">
                        <h2 class="text-light">Introduccion</h2>
                    </div>
                    <div class="container contenido rounded py-4 my-2">
                        <div class="row">
                            <p id="introduccionxd" class="text-light d-flex justify-content-start col-lg-6">${datoInd.Introduccion}</p>
                        </div>
                    </div>
                    <div class="container bg-dark rounded text-center py-3 my-2">
                        <h2 class="text-light">desarrollo</h2>
                    </div>
                    <div class="container contenido rounded py-4 my-2">
                        <p id="contenidoxd" class="text-light d-flex justify-content-start">${datoInd.Principal}</p><img id="imgxd" src="${datoInd.Imagen}" class="img-fluid col-lg-6">
                    </div>
                    <div class="container bg-dark rounded text-center py-3 my-2">
                        <h2 class="text-light">Conclusión</h2>
                    </div>
                    <div class="container contenido rounded py-4 my-2">
                        <div class="row">                           
                            <p id="conclusionxd" class="text-light d-flex justify-content-start col-lg-6">${datoInd.Conclusion}</p>                            
                        </div>
                    </div>
                    </div>`
            }
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        });

    
}