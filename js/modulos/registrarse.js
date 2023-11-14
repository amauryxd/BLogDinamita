import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./appconfig.js";

export function registrarse () {
const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signUpForm["Nombre"].value;
  const password = signUpForm["Contraseña"].value;

  console.log(email,password)

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential)
  } catch (error) {
    console.log(error)
    
  }

});

}
