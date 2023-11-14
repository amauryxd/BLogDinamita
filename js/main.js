import {app} from "./modulos/appconfig.js";
import { guardar } from "./modulos/guardar.js";
import { firebaseStorage } from "./modulos/storage.js";
import { autemail } from "./modulos/aut-email.js";
import { autgoogle } from "./modulos/aut-google.js";
import {registrarse} from "./modulos/registrarse.js";


//guardar(app);
//registrarse(app);
firebaseStorage(app);
autemail();
autgoogle();
