
function mostrarFormulario() {
    var formularioFlotante = document.getElementById("float-form");
    formularioFlotante.style.display = "block";
}
function abrirWhatsApp() {
	var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
	
    // Número de teléfono al que se enviará el mensaje
    var telefono = '5537053034';
    // Mensaje predeterminado (puedes cambiarlo si lo deseas)
    var mensaje = '¡Hola! Soy '+ name +', estoy interesado en el producto y deseo recibir información ' + email;
    //var url1 ='https://web.whatsapp.com/send?phone='+telefono+'&text=' +encodeURIComponent(mensaje)
    // Crear el enlace de WhatsApp con el número y mensaje
    var url = 'https://wa.me/' + telefono + '?text=' + encodeURIComponent(mensaje);
    // Abrir WhatsApp en una nueva ventana
    window.open(url, '_blank');
}

// Función para cerrar el formulario
function cerrarFormulario() {
    document.getElementById('float-form').style.display = 'none';
}

function actualizarCodigoTelefono() {
    var selectPais = document.getElementById('pais');
    var codigoPais = selectPais.value;
    var inputTelefono = document.getElementById('telefono');
    var spanBandera = document.getElementById('bandera');
    // Obtener el valor del atributo data-flag de la opción seleccionada
    var flagIconClass = selectPais.options[selectPais.selectedIndex].getAttribute('data-flag');
    // Actualizar el valor del teléfono con el código del país
    inputTelefono.value = '+' + codigoPais;
    // Agregar la clase de la bandera al span
    spanBandera.className = 'flag-icon flag-icon-' + flagIconClass;
}