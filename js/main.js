import {app} from "./modulos/appconfig.js";
import { guardar } from "./modulos/guardar.js";
import { configuracion } from "./modulos/configuracion.js";
import { firebaseStorage } from "./modulos/storage.js";

guardar();
configuracion();
firebaseStorage(app);
