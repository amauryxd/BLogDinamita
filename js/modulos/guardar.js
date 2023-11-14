import {
    getDatabase,
    ref,
    onValue,
    set,
    push,
    update,
    remove,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
export function guardar(app){
    const db = getDatabase(app);
    /*set(ref(db, 'users/' + 984652), {
        username: "pedro",
        email: "notiene",
        profile_picture : "xd"
    });*/
}