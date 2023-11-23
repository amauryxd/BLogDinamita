import {app} from "./modulos/appconfig.js";
import { guardar } from "./modulos/guardar.js";
import { firebaseStorage } from "./modulos/storage.js";

guardar();
firebaseStorage(app);