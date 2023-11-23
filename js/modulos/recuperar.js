import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"

export function recuperar(app){
    const emailxd = document.querySelector("#contraseña");
    const email = document.getElementById('contrarec');
    const auth = getAuth(app);

    emailxd.addEventListener('submit',(e)=>{
        (e).preventDefault();

        sendPasswordResetEmail(auth, email.value)
  .then(() => {
    // Password reset email sent!
    // ..aqui que carge que ya quedo xd
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..aqui hay que poner los errrores xd
  });

    });
}