let horarios = ["09:00", "10:00", "11:00", "12:00", "13:00"];
let horarioNoDisponible = "11:00";
let selectHorario = document.getElementById("horario");

for (let i = 0; i < horarios.length; i++) {
    let opcion = document.createElement("option");
    opcion.value = horarios[i];
    opcion.textContent = horarios[i];

    if (horarios[i] == horarioNoDisponible) {
        opcion.disabled = true;
        opcion.textContent = horarios[i] + " - No disponible";
    }

    selectHorario.appendChild(opcion);
}

let fechaHoy = new Date().toISOString().split("T")[0];

document.getElementById("fecha").min = fechaHoy;


document.getElementById("formCita").addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorCorreo").textContent = "";
    document.getElementById("errorEspecialidad").textContent = "";
    document.getElementById("errorFecha").textContent = "";
    document.getElementById("errorHorario").textContent = "";

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let especialidad = document.getElementById("especialidad").value;
    let fecha = document.getElementById("fecha").value;
    let horario = document.getElementById("horario").value;

    let hayError = false;

    if (nombre.length < 3 || nombre.length > 40) {
        document.getElementById("errorNombre").textContent =
            "El nombre debe tener entre 3 y 40 caracteres.";

        hayError = true;
    }

    if (correo == "" || !correo.includes("@")) {
        document.getElementById("errorCorreo").textContent =
            "Ingrese un correo válido.";

        hayError = true;
    }

    if (especialidad == "") {
        document.getElementById("errorEspecialidad").textContent =
            "Seleccione una especialidad.";

        hayError = true;
    }
    if (fecha == "") {

        document.getElementById("errorFecha").textContent =
            "Seleccione una fecha.";

        hayError = true;

    } else if (fecha < fechaHoy) {

        document.getElementById("errorFecha").textContent =
            "La fecha no puede ser anterior a hoy.";

        hayError = true;
    }

    if (horario == "") {

        document.getElementById("errorHorario").textContent =
            "Seleccione un horario.";

        hayError = true;

    } else if (horario == "11:00") {

        document.getElementById("errorHorario").textContent =
            "El horario 11:00 no está disponible.";

        hayError = true;
    }

    if (hayError) {
        return;
    }
    let solicitud = {
        nombre: nombre,
        correo: correo,
        especialidad: especialidad,
        fecha: fecha,
        horario: horario
    };

    sessionStorage.setItem("solicitud", JSON.stringify(solicitud));

    window.location.href = "confirmacion-cita.html";

});