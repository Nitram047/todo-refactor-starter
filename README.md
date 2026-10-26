# ToDo Refactor Starter

Proyecto inicial para **ToDo Refactor Lab**: refactorización, pruebas unitarias y Pair Programming.

## Inicio

```bash
npm install
npm test
```

Durante el desarrollo:

```bash
npm run test:watch
```

La primera prueba está preparada para fallar: es el punto de partida de la **Misión 2** y del ciclo **RED → GREEN → REFACTOR**.

## Estructura

- `src/legacy.js`: código funcional simple para analizar antes de cambiar.
- `src/taskService.js`: lógica de dominio que completarás misión por misión.
- `src/app.js`: interfaz inicial; en la Misión 9 deberá delegar la lógica a `taskService.js`.
- `tests/taskService.test.js`: suite incremental de pruebas unitarias con Vitest.

## Misión 0 · Antes de modificar código

Responde aquí:

1. ¿Dónde almacenarías ahora el estado `completada` de una tarea?
   Hoy no existe como dato: una tarea es sólo un string. Las alternativas serían un array paralelo (completadas[i]) o codificar el estado en el texto ("[x] Revisar requisitos"), ambas frágiles. La solución correcta es una propiedad del propio objeto tarea.

2. ¿Qué ocurriría si mañana cada tarea necesita prioridad, fecha o responsable?
   COn strings habria que rediseñar la estructura y cada función que accede a `tareas[i]`. Con objetos basta agregar una propiedad sin reescribir el resto.

3. ¿Qué parte del código representa datos y qué parte representa interfaz?
   _Datos:_ Aqui es el arrary `tareas` y sus elementos.
   _Intefaz:_ Metemos lo que es `mostrarTreas()`, `querySelector(#task-list)`, `innerHTML` y las plantillas

4. ¿Qué comportamiento debemos conservar durante el refactor? Los tres que mencionaremos.

### Tres comportamientos observables que NO deben cambiar

1. Al escribir un título válido y pulsar **Agregar**, la tarea aparece al final de la lista y el campo de texto se limpia.
2. Al enviar un título vacío o sólo con espacios, la tarea **no** se agrega y se muestra un mensaje de error.
3. Al pulsar **Eliminar**, la tarea desaparece de la lista y el resumen se actualiza.

## Registro RED → GREEN → REFACTOR

Documenta al menos una iteración:

Iteración 1 · Misión 2 (crearTarea)

RED: al clonar el starter, npm test falla con: Error: Misión 2 pendiente: implementar crearTarea(). La función era un stub que lanzaba excepción.
GREEN: return { id, titulo, completada: false };. Es lo mínimo que cumple la prueba.
REFACTOR: no fue necesario.

Iteración 2 · Misión 3 (agregarTarea)

RED: las dos pruebas de agregarTarea fallaron (agrega una tarea al final y no modifica el array original). La prueba crearTarea ya pasaba. Como el stub lanzaba excepción, la prueba de no mutación no comprobaba realmente el efecto secundario; eso se vio al implementar.
GREEN: return [...tareas, nuevaTarea];. Devuelve una colección nueva y no toca la original.
REFACTOR: no fue necesario.

Iteración 3 · Misión 10 (refactor)

Cambios: se extrajo la selección de tareas por filtro a la función obtenerTareasSegunFiltro() en app.js, se quitaron las líneas void ... que sólo servían de relleno, se quitó el import de Vitest que estaba dentro de taskService.js y se dio formato a las funciones.
Verificación: 16 pruebas en verde antes y después del refactor.
Pendiente: el contador de ids (siguienteId) sigue en app.js. Lo planeado era moverlo al dominio como obtenerSiguienteId(), pero no se hizo.

## Pair Programming

Misión Driver Navigator
0 · Comprender Nitram047
1 · Objetos Nitram047
2 · crearTarea Nitram047
3 · agregarTarea Nitram047 Owen Alberto
4 · buscarTarea Gwyn Nitram047
5 · Filtros Gwyn Nitram047
6 · cambiarEstado Gwyn Nitram047
7 · eliminarTarea Gwyn Nitram047
8 · obtenerResumen Gwyn Nitram047
9 · Integración UI Gwyn Nitram047
10 · Refactor Gwyn Nitram047
11 · Extensión Gwyn Nitram047

Registra por misión quién fue **Driver** y quién **Navigator**. Intercambien roles con frecuencia y no hagan commit hasta que ambos puedan explicar el código y la prueba.

Durante el desarrollo del proyecto ToDo Refactor Lab, ambos aprendimos la importancia de escribir código organizado, reutilizable y fácil de mantener. Comprendimos que no basta con conseguir que un programa funcione, sino que también es necesario estructurarlo correctamente para facilitar futuras modificaciones y evitar errores.

A lo largo de las misiones, aprendimos a representar las tareas mediante objetos con propiedades, como identificador, título y estado de finalización. Esto nos permitió comprender cómo organizar mejor la información e implementar funcionalidades para agregar, buscar, filtrar, completar y eliminar tareas. Además, reforzamos nuestros conocimientos sobre pruebas unitarias mediante el ciclo RED, GREEN y REFACTOR, entendiendo cómo comprobar el funcionamiento del código antes y después de realizar mejoras.

Algo que seguiremos mencionando es que el trabajo en pareja nos permitió compartir conocimientos, comparar diferentes formas de resolver los problemas y aprender mutuamente de nuestros errores. Mientras uno podía identificar aspectos relacionados con la lógica o la estructura del código, el otro podía aportar nuevas ideas para mejorar la solución. Esta colaboración nos ayudó a desarrollar una mayor capacidad de análisis y comunicación. Lo que se trabaja desde practicas pasadas se siguen aplicando y mejorando en las futuras.
