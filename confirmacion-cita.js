let datos = sessionStorage.getItem("solicitud");
if (datos == null) {
    document.getElementById("datosCita").style.display = "none";
    document.getElementById("mensaje").innerHTML =
        '<div class="alert alert-warning">' +
        'No hay una solicitud registrada. ' +
        '<a href="cita.html">Regresar al formulario</a>' +
        '</div>';
} else {
    let solicitud = JSON.parse(datos);
    document.getElementById("mostrarNombre").textContent =

        solicitud.nombre;
    document.getElementById("mostrarEspecialidad").textContent =

        solicitud.especialidad;
    document.getElementById("mostrarFecha").textContent =

        solicitud.fecha;
    document.getElementById("mostrarHorario").textContent =
        solicitud.horario;
}

