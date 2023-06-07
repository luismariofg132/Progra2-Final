const url = "http://127.0.0.1:3000/api/partidos";

const modal = document.getElementById("myModal");
// Obtener el botón que abre el modal
const btn = document.querySelector("button");

// Obtener el elemento <span> que cierra el modal
const span = document.getElementsByClassName("close")[0];

const formProcesarDatos = document.getElementById("procesarDatos");

const partido = document.getElementById("partidoSelect");
const lblEquipo1 = document.getElementById("lblEquipo1");
const lblEquipo2 = document.getElementById("lblEquipo2");
const partidoRegistrar = document.getElementById("partidoRegistrar");

const obtenerPartidos = async (partidoBuscar) => {
    const resp = await fetch(url);
    const partidos = await resp.json();
    const partidoSeleccionado = partidos.find(p => p.partido == partidoBuscar);
    return partidoSeleccionado;
}

// Función para abrir el modal
async function openModal() {

    if (partido.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes seleccionar un partido',
        });
        return;
    }

    const partidoSeleccionado = await obtenerPartidos(partido.value);

    if (partidoSeleccionado == null || partidoSeleccionado == undefined) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El partido seleccionado no existe',
        });
        return;
    }

    lblEquipo1.innerHTML = partidoSeleccionado.equipo1;
    lblEquipo2.innerHTML = partidoSeleccionado.equipo2;
    partidoRegistrar.innerHTML = partidoSeleccionado.partido;

    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = "none";
}

// Cerrar el modal si se hace clic fuera del contenido del modal
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

const extraerGoles = (jugadorGoles) => {
    let arrayResultante = [];

    // Dividir la cadena de texto en pares separados por ';'
    let pares = jugadorGoles.split(';');

    // Recorrer cada par y extraer el nombre y el número
    for (let i = 0; i < pares.length; i++) {
        let par = pares[i].split(',');

        // Crear un objeto con el nombre y el número
        let objeto = {
            nombre: par[0],
            cantidadGoles: parseInt(par[1])
        };

        // Agregar el objeto al array resultante
        arrayResultante.push(objeto);
    }

    return arrayResultante;
}

const procesarPartido = async () => {
    const partido = partidoRegistrar.textContent
    const partidoDatos = await obtenerPartidos(partido);
    const golesEquipo1 = document.getElementById("equipo1Goles").value;
    const golesEquipo2 = document.getElementById("equipo2Goles").value;
    const cantidadGolesEquipo1 = document.getElementById("equipo1").value;
    const cantidadGolesEquipo2 = document.getElementById("equipo2").value;
    const golesEquipo1Array = extraerGoles(golesEquipo1);
    const golesEquipo2Array = extraerGoles(golesEquipo2);

    // Peticion HTTP Registrar Partido
    const resp = await fetch(url + "/editPartidoFGrupos", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            uipartido: partidoDatos.partido,
            fase: partidoDatos.fase,
            equipo1: partidoDatos.equipo1,
            equipo2: partidoDatos.equipo2,
            goles1: Number(cantidadGolesEquipo1),
            goles2: Number(cantidadGolesEquipo2),
            jugadorGoles1: golesEquipo1Array,
            jugadorGoles2: golesEquipo2Array
        })
    })

    const data = await resp.json();

    console.log(data);
}

formProcesarDatos.addEventListener("submit", async (e) => {
    e.preventDefault();
    await procesarPartido();
});