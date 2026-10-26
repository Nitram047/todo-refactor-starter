import { describe, it, expect } from "vitest";
import {
  crearTarea,
  agregarTarea,
  buscarTarea,
  obtenerPendientes,
  obtenerTerminadas,
  cambiarEstado,
  eliminarTarea,
  obtenerResumen
} from "../src/taskService.js";

/*
 * TODO REFACTOR LAB · SUITE STARTER
 *
 * Activa/crea pruebas misión por misión. No escribas todas las soluciones de
 * una vez. Para cada comportamiento sigue RED → GREEN → REFACTOR.
 */

describe("crearTarea", () => {
  it("crea una tarea pendiente con id y título", () => {
    // Arrange
    const id = 10;
    const titulo = "Diseñar pruebas";

    // Act
    const tarea = crearTarea(id, titulo);

    // Assert
    expect(tarea).toEqual({ id: 10, titulo: "Diseñar pruebas", completada: false });
  });
});

// MISIÓN 3: agrega al menos dos pruebas para agregarTarea().

describe("agregarTarea", () => {
  it("agrega una tarea al final", () => {
    const tareas = [{ id: 1, titulo: "A", completada: false }];
    const nueva = { id: 2, titulo: "B", completada: false };
    expect(agregarTarea(tareas, nueva)).toEqual([...tareas, nueva]);
  });
 
  it("no modifica el array original", () => {
    const tareas = [{ id: 1, titulo: "A", completada: false }];
    const resultado = agregarTarea(tareas, { id: 2, titulo: "B", completada: false });
    expect(resultado).not.toBe(tareas);
    expect(tareas).toHaveLength(1);
  });
});
// MISIÓN 4: prueba id existente e inexistente para buscarTarea().

describe("buscarTarea", () => {
  it("encuentra una tarea con un id existente", () => {
    const tareas = [
      { id: 1, titulo: "A", completada: false },
      { id: 2, titulo: "B", completada: true }
    ];
    expect(buscarTarea(tareas, 2)).toEqual({ id: 2, titulo: "B", completada: true });
  });

  it("devuelve undefined cuando se busca un id inexistente", () => {
    const tareas = [{ id: 1, titulo: "A", completada: false }];
    expect(buscarTarea(tareas, 99)).toBeUndefined();
  });
});

// MISIÓN 5: prueba colección mixta, sin coincidencias y vacía.

describe("obtenerPendientes y obtenerTerminadas", () => {
  it("filtra pendientes y terminadas en una colección mixta", () => {
    const tareas = [
      { id: 1, titulo: "A", completada: false },
      { id: 2, titulo: "B", completada: true },
      { id: 3, titulo: "C", completada: false }
    ];
    expect(obtenerPendientes(tareas)).toEqual([
      { id: 1, titulo: "A", completada: false },
      { id: 3, titulo: "C", completada: false }
    ]);
    expect(obtenerTerminadas(tareas)).toEqual([
      { id: 2, titulo: "B", completada: true }
    ]);
  });

  it("devuelve [] cuando no hay coincidencias", () => {
    const soloPendientes = [{ id: 1, titulo: "A", completada: false }];
    const soloTerminadas = [{ id: 2, titulo: "B", completada: true }];
    expect(obtenerTerminadas(soloPendientes)).toEqual([]);
    expect(obtenerPendientes(soloTerminadas)).toEqual([]);
  });

  it("devuelve [] cuando la colección está vacía", () => {
    expect(obtenerPendientes([])).toEqual([]);
    expect(obtenerTerminadas([])).toEqual([]);
  });
});

// MISIÓN 6: prueba cambio correcto, otra tarea intacta e id inexistente.

describe("cambiarEstado", () => {
  it("cambia el estado de la tarea con el id correcto sin mutar el original", () => {
    const tareas = [{ id: 1, titulo: "A", completada: false }];
    const resultado = cambiarEstado(tareas, 1);
    expect(resultado).toEqual([{ id: 1, titulo: "A", completada: true }]);
    expect(tareas[0].completada).toBe(false);
  });

  it("no altera las demás tareas de la colección", () => {
    const tareas = [
      { id: 1, titulo: "A", completada: false },
      { id: 2, titulo: "B", completada: false }
    ];
    const resultado = cambiarEstado(tareas, 1);
    expect(resultado[1]).toEqual({ id: 2, titulo: "B", completada: false });
  });

  it("conserva el contenido de la colección si el id es inexistente", () => {
    const tareas = [{ id: 1, titulo: "A", completada: false }];
    expect(cambiarEstado(tareas, 99)).toEqual(tareas);
  });
});

// MISIÓN 7: prueba eliminar existente, inexistente y colección vacía.
// MISIÓN 8: prueba obtenerResumen(), incluyendo colección vacía.

// Los imports anteriores quedan preparados para que construyas la suite de forma incremental.
void agregarTarea;
void buscarTarea;
void obtenerPendientes;
void obtenerTerminadas;
void cambiarEstado;
void eliminarTarea;
void obtenerResumen;
