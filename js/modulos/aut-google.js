import {GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import {auth} from "./appconfig.js"
import { Mensajes} from "./mensajedeerror.js";

export function autgoogle(){

    const googleButton = document.querySelector('#GoogleSignIn')

    googleButton.addEventListener('click', async (e) =>{
        
        const google = new GoogleAuthProvider()

        try {
            const credentials = await signInWithPopup(auth, google)
            console.log(credentials)

            const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'));
            modal.hide();

            Mensajes("Bienvenido " + credentials.user.displayName, 'success')

        } catch (error) {
            console.log(error)
        }
    })

}