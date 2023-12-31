import {app} from "./modulos/appconfig.js";
import {EmailEnvio} from "./modulos/aut-email.js";
import { autgoogle } from "./modulos/aut-google.js";
import {registrarse} from "./modulos/registrarse.js";
import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import { auth } from "./modulos/appconfig.js";
import { logout } from "./modulos/logout.js";
import {CheckUsuario} from "./modulos/CheckUsuario.js";
import { posts } from "./modulos/index.js";

registrarse(app);
EmailEnvio(app);
autgoogle(app);
logout();
CheckUsuario();
posts();

onAuthStateChanged(auth, async (user) => {
    CheckUsuario(user)  
})
