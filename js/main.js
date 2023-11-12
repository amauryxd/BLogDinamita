import {app} from "./modulos/appconfig.js";
import { guardar } from "./modulos/guardar.js";
import { configuracion } from "./modulos/configuracion.js";
import { firebaseStorage } from "./modulos/storage.js";
import { autemail } from "./modulos/aut-email.js";
import { autgoogle } from "./modulos/aut-google.js";
import './modulos/registrarse.js';

guardar();
configuracion();
firebaseStorage(app);
autemail();
autgoogle();
