export function Mensajes (mensaje, type = "success"){


Toastify({
    text: mensaje,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: type === "success" ? "blue" : "purple"
    },
    onClick: function(){} // Callback after click
  }).showToast();

}