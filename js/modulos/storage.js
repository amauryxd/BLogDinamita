import {
    getStorage,
    ref as refStorage,
    uploadBytesResumable,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-storage.js";
export function firebaseStorage(app){
    const storage = getStorage(app),
    docsRef = refStorage(storage, "docs"),
    d = document,
    $progressAdvance = d.getElementById("progress-advance"),
    $appStorage = d.getElementById("app-storage");


    d.addEventListener("change",(e) => {
        if(e.target.matches("#uploader")){
            alert("Deberia subor un archivo se supone");

            let fileList = Array.from(e.target.files);

            fileList.forEach((file) => {
                const filesRef = refStorage(storage,"files/"+file.name), uploadTask = uploadBytesResumable(filesRef, files);

                uploadTask.on(
                    "state_changed",
                    (snapshot) =>{
                        let progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes)*100);

                        $progressAdvance.classList.remove = `w-${progress-1}`;
                        $progressAdvance.classList.add = `w-${progress}`;
                        $progressAdvance.innerHTML = `${progress}%`;
                    },
                    (err) => {
                        $appStorage.innerHTML`<div class="alert alert-danger" role="alert">Error al subor el arhivo ${err.code} - ${err.message}</div>`;
                    },
                    () =>{
                        $progressAdvance.classList.remove = "w-100";
                        $progressAdvance.classList.add = "w-0";
                        $progressAdvance.innerHTML = "0%";
                        e.target.value = "";

                        getDownloadURL(uploadTask.snapshot.ref)
                        .then((downloadURL) => {
                            $appStorage.innerHTML += 
                            `
                            <img src="${downloadURL}">
                            `;
                        })
                        .catch((err)=> {
                            $appStorage.innerHTML += `<div class="alert alert-danger" role="alert">Error al subor el arhivo ${err.code} - ${err.message}</div>`
                        });
                    }
                );
            });
        }
    });
}