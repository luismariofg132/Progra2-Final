# PROYECTO FINAL PROGRAMACION II UTP 2023-1

### Desarrolladores

- Juan Dario Malagon Marin - j.malagon@utp.edu.co
- Luis Mario Franco Gomez - mario.franco@utp.edu.co

### Docente

- Luis Eduardo Muñoz Guerrero


## Torneo Relanpago de Futbol

\- 8 equipos en total.

\- 2 grupos de 4 equipos, se juega todos contra todos y clasifican los 2 primeros del grupo.

\- 3 jornadas de cada juego.

\- Los 4 equipos clasificados jugarán semifinales. 

1ro del grupo A vs 2do del grupo B y 2do del grupo A vs 1ro del grupo B.

-El campeonato se debe de jugar en un solo lugar (UTP). 

\- Los dos que ganen jugarán la final y los dos perdedores jugarán por el tercer puesto.

-Se debe de mostrar en una tabla mostrando los goles y tarjetas (amarilla , roja) que llevan los jugadores además si tiene amonestación o tuvo una expulsión.

-Se debe de mostrar goleador y valla menos vencida

\- Partidos: Se debe de ingresar el marcador de los partidos, ingresar las tarjetas amarillas y rojas, e ingresar el número de goles de cada jugador. 

Equipos:


|<p>**GRUPO A:**</p><p>- Nacional</p><p>- Pereira</p><p>- Huila</p><p>- Once Caldas</p>|<p> **GRUPO B:**</p><p></p><p>- Millonarios </p><p>- Pasto</p><p>- Unión Magdalena</p><p>- Cali</p>|
| :- | :- |





Jugadores \* Equipos



|<p>**Atlético Nacional**</p><p></p><p>- (1) Kevin Leonardo Mier (Arquero)</p><p>- (2) Cristian Zapata</p><p>- (3) Jarlan Barrera</p><p>- (4) Jefferson Duque</p><p>- (5) Dorlan Pabón </p>|<p>**Deportivo Pereira**</p><p></p><p>- (1) Aldair Quintana (arquero)</p><p>- (2) Carlos Ramirez</p><p>- (3) Jhonny Vasquez</p><p>- (4) Juan Pablo Zuluaga</p><p>- (5) Angelo Rodriguez</p>|
| :- | :- |
|<p>**Huila**</p><p>-(1) John Figueroa (arquero)</p><p>- (2) Leonardo Escorcia</p><p>- (3) Blas Díaz</p><p>- (4) Yosimarc Torres</p><p>- (5) Faber Gil</p>|<p>**Once Caldas**</p><p></p><p>- (1) Debinson Fernando Mateus (Arquero)</p><p>- (2) Nahuel Gallardo</p><p>- (3) Andres Felipe Correa</p><p>- (4) Sherman Cardenas</p><p>- (5) Dayro Moreno</p>|
|<p>**Millonarios**</p><p></p><p>- (1) Alvaro Montero (arquero)</p><p>- (2) Andrés Llinás</p><p>- (3) David Macalister</p><p>- (4) Daniel Castaño</p><p>- (5) Leonardo Castro</p>|<p>**Pasto**</p><p></p><p>- (1) Diego Martinez (arquero)</p><p>- (2) Christian Mafla</p><p>- (3) Adrián Estacio</p><p>- (4) Johan Caicedo</p><p>- (5) Edwar López</p>|
|<p>**Unión Magdalena**</p><p></p><p>- (1) Carlos Bejarano (arquero)</p><p>- (2) Juan Camilo Angulo</p><p>- (3) Wilder Guisao</p><p>- (4) Alexander Mejia</p><p>- (5) Yamil Romero</p>|<p>**Cali**</p><p>- (1) Kevin Dawson (arquero)</p><p>- (2) Aldair Gutierrez </p><p>- (3) Germán Mera </p><p>- (4) Daniel Mantilla </p><p>- (5) Kevin Velasco</p>|




Fechas: 



|**Fecha 1:**|**FECHA 2:**|**FECHA 3:**|
| :- | :- | :- |
|<p>**Grupo A:**</p><p></p><p>Pereira vs Once Caldas </p><p>Nacional Vs Huila</p><p></p><p>**GRUPO B:** </p><p>Millonarios vs Pasto</p><p>Unión Magdalena vs Cali</p>|<p>**GRUPO A:**</p><p></p><p>Huila vs Pereira</p><p>Once Caldas vs Nacional</p><p></p><p>**GRUPO B:**</p><p></p><p>Cali vs Millonarios</p><p>Pasto vs Unión Magdalena</p>|<p>**GRUPO A:** </p><p></p><p>Pereira vs Nacional</p><p>Huila vs Once Caldas</p><p></p><p>**GRUPO B:**</p><p></p><p>Cali vs Pasto</p><p>Unión Magdalena vs Millonarios</p>|


**SEMIFINALES:** 

- 1ro grupo A vs 2do grupo B
- 1ro grupo B vs 2do grupo A

**TERCER PUESTO:** 

Perdedor entre: 1ro grupo A vs 2do grupo B **vs** Perdedor entre: 1ro grupo B vs 2do grupo A

**FINAL:** 

Ganador entre: 1ro grupo A vs 2do grupo B **vs** Ganador entre: 1ro grupo B vs 2do grupo A

![Imagen1](https://github.com/luismariofg132/Progra2-Final/assets/70932146/8b6df345-e4a7-4025-97bf-1043e91e7222)


[Plantilla:Tabla de posiciones equipo/doc - Wikipedia, la enciclopedia libre](https://es.wikipedia.org/wiki/Plantilla:Tabla_de_posiciones_equipo/doc) 


**Código** 

El programa debe de tener estructuras como; jugador, equipo, campeonato…...etc 

Ejemplo 



|<p>struct partido{</p><p>int goles</p><p>bool tarjetaamarilla</p><p>bool tarjetaroja</p><p>}</p>|<p>struct jugadores{</p><p>char nombre</p><p>int Cedula</p><p>int numcamisa</p><p>}</p><p>struct campeonato{</p><p></p><p>}</p>|<p>struct cuartos{</p><p></p><p>}</p><p></p><p>struct equipo{</p><p>char nombreequipo</p><p>int Nit</p><p>}</p>|
| :- | :- | :- |


**Existe un usuario que permite el:**  

- **registro de jugadores** 
- **registro de partidos** 


**(el usuario tiene un nombre y una clave para ingresar al sistema** 

**usuario:   pepitoperez**

**clave   :    \*\*\*\*\***  


|<p>**Jugadores: Se puede  eliminar, adicionar y modificar los jugadores** </p><p>**(Siempre y cuando se mantengan los mismos 5 jugadores se pueden generar modificaciones)**</p>|
| :- |
|<p>**Equipos: Se puede eliminar, adicionar y modificar el nombre los equipos** </p><p>**(Siempre y cuando se mantengan los mismos 8 equipos se pueden generar modificaciones)**</p>|
|**Partidos: Se debe de ingresar el marcador de los partidos, ingresar las tarjetas amarillas y rojas, e ingresar el número de goles de cada jugador (Ya se añadió)**|
|**El programa debe de tener octavos, cuartos, semifinal y final (Ya está definido)**|
|**La cédula o identificación de los jugadores es innecesaria (Falta por aclarar)**|
|**Faltan campos (Por definir)**|



