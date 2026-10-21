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
   ¿?

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

- **RED:** ¿qué prueba escribiste y por qué falló?
- **GREEN:** ¿cuál fue el cambio mínimo que la hizo pasar?
- **REFACTOR:** ¿qué mejoraste sin cambiar el comportamiento?

## Pair Programming

Registra por misión quién fue **Driver** y quién **Navigator**. Intercambien roles con frecuencia y no hagan commit hasta que ambos puedan explicar el código y la prueba.
