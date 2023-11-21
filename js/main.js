import {app} from "./modulos/appconfig.js";
import { guardar } from "./modulos/guardar.js";
import { firebaseStorage } from "./modulos/storage.js";
import {EmailEnvio} from "./modulos/aut-email.js";
import { autgoogle } from "./modulos/aut-google.js";
import {registrarse} from "./modulos/registrarse.js";
import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import { auth } from "./modulos/appconfig.js";
import { logout } from "./modulos/logout.js";
import {CheckUsuario} from "./modulos/CheckUsuario.js";


guardar();
registrarse(app);
firebaseStorage(app);
EmailEnvio(app);
autgoogle(app);
logout();
CheckUsuario();

onAuthStateChanged(auth, async (user) => {
    CheckUsuario(user)  
})
