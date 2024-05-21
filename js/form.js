function validarFormulario() {
    
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const seccion = document.getElementsByName('seccion');
    const provincias = document.getElementById('provincias');
    let radio=false;

    if (nombre.value==""){
        alert('Debe ingresar un nombre');
        return false;
    }

    if (email.value==""){
        alert('Debe ingresar un email');
        return false;
    }
            
    if (provincias.value==""){
        alert('Debe elejir una provincia');
        return false;
    }

    for (var i = 0; i < seccion.length; i++) {                  
        if(seccion[i].checked) {
            radio=true;
        }
    }
    if(!radio){
        alert('Debe seleccionar una seccion');
        return false;
    }
    alert('Sus datos han sido validados y enviados');
}
