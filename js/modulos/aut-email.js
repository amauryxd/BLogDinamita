import { signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./appconfig.js";
import { Mensajes} from "./mensajedeerror.js";

export function EmailEnvio () {
const SigninForm = document.querySelector("#signin-form");

SigninForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = SigninForm['signin-email'].value;
  const password = SigninForm['signin-password'].value;

  console.log(email,password)

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredential)

    
    const modal = bootstrap.Modal.getInstance(SigninForm.closest('modal'));
    modal.hide();

    Mensajes("Bienvenido" + userCredential.user.email)

  } catch (error) {
    console.log(error.code)
    console.log(error.message)
    }
});

}