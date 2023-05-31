const tableGA = document.getElementById('tableGA');
const tableGB = document.getElementById('tableGB');
const url = 'http://127.0.0.1:3000/api/data/';

document.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch(url);
    const data = await res.json();
    const equiposGA = data.filter(equipo => equipo.Grupo === 'A');
    const equiposGB = data.filter(equipo => equipo.Grupo === 'B');
    tableGA.innerHTML = '';
    tableGB.innerHTML = '';

    equiposGA.forEach((equipo, index) => {
        const jugadores = equipo.Jugadores.map((jugador, index) => `${index + 1}) ${jugador.nombre}`).join('<br>');
        tableGA.innerHTML += `
        <tr>
            <td>${equipo.Equipo}</td>
            <td>${jugadores}</td>
        </tr>
        `;
    });

    equiposGB.forEach((equipo, index) => {
        const jugadores = equipo.Jugadores.map((jugador, index) => `${index + 1}) ${jugador.nombre}`).join('<br>');
        tableGB.innerHTML += `
        <tr>
            <td>${equipo.Equipo}</td>
            <td>${jugadores}</td>
        </tr>
        `;
    });

});
