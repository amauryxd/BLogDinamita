import { signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import { auth } from "./appconfig.js"

export function logout () {

const salir = document.querySelector('#Logout')

salir.addEventListener('click', async (e) => {
    e.preventDefault();

    try {
        await signOut(auth)
    console.log("Hizo logout")
    } catch (error) {
        console.log(error)
    }    
});
}