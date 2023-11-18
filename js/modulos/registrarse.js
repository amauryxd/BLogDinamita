import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import { auth } from "./appconfig.js";
import { Mensajes} from "./mensajedeerror.js";

export function registrarse () {
const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = signUpForm['Nombre'].value;
  const password = signUpForm['Contraseña'].value;

  console.log(email,password)

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential)

    const signupModal = document.querySelector('#signupModal')
    const modal = bootstrap.Modal.getInstance(signupModal)
    modal.hide()

    Mensajes("Bienvenido" + userCredential.user.email)

  } catch (error) {
    console.log(error.code)
    console.log(error.message)

    if (error.code === 'auth/email-already-in-use'){
      Mensajes("Este correo ya fue utilizado", "error")
    }
    else if (error.code === 'auth/network-request-failed'){
      Mensajes("Este correo no es valido o ya fue utilizado", "error")
    } 
    else if (error.code === 'auth/weak-password'){
      Mensajes("Esta contraseña es muy débil", "error")
      }
      else if (error.code){
      Mensajes(error.message, "error")
      }
    }
});

}
