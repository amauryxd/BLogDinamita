import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import {Mensajes} from "./mensajedeerror.js";

export function recuperar(app){
    const emailxd = document.querySelector("#contraseña");
    const email = document.getElementById('contrarec');
    const auth = getAuth(app);

      emailxd.addEventListener('submit', async (e)=> {
      (e).preventDefault();

    try {
      
        const credentials = await sendPasswordResetEmail(auth, email.value)
        console.log(credentials)
        Mensajes("Email enviado")

      
    } catch (error) {
      console.log(error.code)
      console.log(error.message)

      if (error.code === 'auth/invalid-email'){
      Mensajes("El correo no existe", "error")
    }
    }
});
}