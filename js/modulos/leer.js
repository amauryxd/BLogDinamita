import { getDatabase , ref, set , push} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"

export function leerdatos(){
    const dbRef = ref(getDatabase());
get(child(dbRef, `users/${userId}`)).then((snapshot) => {
if (snapshot.exists()) {
    console.log(snapshot.val());
} else {
    console.log("No data available");
}
}).catch((error) => {
console.error(error);
});
}