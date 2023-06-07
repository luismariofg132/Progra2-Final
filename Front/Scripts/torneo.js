const url = "https://api-progra-final.onrender.com/api/partidos";

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

const btnProcesarSemifinales = document.getElementById("btnProcesarSemifinales");
const btnProcesarFinal = document.getElementById("btnProcesarFinal");

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

    if (partidoDatos.fase == "final") {
        if (cantidadGolesEquipo1 > cantidadGolesEquipo2) {
            Swal.fire({
                icon: 'success',
                title: '¡Ganador!',
                text: partidoDatos.equipo1,
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: '¡Ganador!',
                text: partidoDatos.equipo2,
            });
        }
    }

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


}

formProcesarDatos.addEventListener("submit", async (e) => {
    e.preventDefault();
    await procesarPartido();
});

function obtenerEquiposMasGoles(partidos) {
    const equipos = {}; // Objeto para almacenar los goles por equipo

    // Recorrer los partidos y contar los goles por equipo
    for (let i = 0; i < partidos.length; i++) {
        const partido = partidos[i];
        const equipoLocal = partido.equipo1;
        const equipoVisitante = partido.equipo2;
        const golesLocal = partido.goles1;
        const golesVisitante = partido.goles2;

        // Contar los goles del equipo local
        if (equipos[equipoLocal]) {
            equipos[equipoLocal] += golesLocal;
        } else {
            equipos[equipoLocal] = golesLocal;
        }

        // Contar los goles del equipo visitante
        if (equipos[equipoVisitante]) {
            equipos[equipoVisitante] += golesVisitante;
        } else {
            equipos[equipoVisitante] = golesVisitante;
        }
    }

    // Ordenar los equipos por la cantidad de goles (de mayor a menor)
    const equiposOrdenados = Object.keys(equipos).sort(
        (equipoA, equipoB) => equipos[equipoB] - equipos[equipoA]
    );

    // Obtener los dos equipos con más goles
    const equipo1 = equiposOrdenados[0];
    const equipo2 = equiposOrdenados[1];

    return [equipo1, equipo2];
}

btnProcesarSemifinales.addEventListener("click", async (e) => {
    e.preventDefault();

    const resp = await fetch(url);
    const partidos = await resp.json();

    const equiposMasGoles1a6 = obtenerEquiposMasGoles(partidos.slice(0, 6));
    const equiposMasGoles7a12 = obtenerEquiposMasGoles(partidos.slice(6, 12));

    const resp2 = await fetch(url + "/editPartidoFGrupos", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            uipartido: "13",
            fase: "Semifinal",
            equipo1: equiposMasGoles1a6[0],
            equipo2: equiposMasGoles1a6[1],
            goles1: 0,
            goles2: 0,
            jugadorGoles1: [],
            jugadorGoles2: []
        })
    })

    const resp3 = await fetch(url + "/editPartidoFGrupos", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            uipartido: "14",
            fase: "Semifinal",
            equipo1: equiposMasGoles7a12[0],
            equipo2: equiposMasGoles7a12[1],
            goles1: 0,
            goles2: 0,
            jugadorGoles1: [],
            jugadorGoles2: []
        })
    })

    const data = await resp2.json();
    const data2 = await resp3.json();

    window.location.reload();
});

btnProcesarFinal.addEventListener("click", async (e) => {
    e.preventDefault();

    const resp = await fetch(url);
    const partidos = await resp.json();

    const equiposMasGoles13a14 = obtenerEquiposMasGoles(partidos.slice(12, 14));

    const resp2 = await fetch(url + "/editPartidoFGrupos", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            uipartido: "15",
            fase: "Final",
            equipo1: equiposMasGoles13a14[0],
            equipo2: equiposMasGoles13a14[1],
            goles1: 0,
            goles2: 0,
            jugadorGoles1: [],
            jugadorGoles2: []
        })
    })

    const data = await resp2.json();

    window.location.reload();
});