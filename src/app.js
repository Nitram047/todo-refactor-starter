/*
 * MISIÓN 9 · ADAPTADOR DE INTERFAZ
 *
 * Este archivo contiene una versión inicial de interfaz basada en strings para
 * que la aplicación pueda observarse desde el comienzo. Cuando llegues a la
 * Misión 9, reemplaza la lógica de datos por llamadas a taskService.js.
 * El DOM debe leer eventos, delegar reglas al servicio y renderizar resultados.
 */

import {
  crearTarea,
  agregarTarea,
  obtenerPendientes,
  obtenerTerminadas,
  cambiarEstado,
  eliminarTarea,
  obtenerResumen,
  existeTitulo
} from "./taskService.js";

const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const message = document.querySelector("#message");
const summary = document.querySelector("#summary");
const filters = [...document.querySelectorAll("[data-filter]")];

let tareas = [
  { id: 1, titulo: "Revisar requisitos", completada: false },
  { id: 2, titulo: "Diseñar pruebas", completada: false },
  { id: 3, titulo: "Refactorizar código", completada: false }
];
let siguienteId = 4;
let filtro = "todas";

function obtenerTareasSegunFiltro(listaTareas, filtroActivo) {
  if (filtroActivo === "pendientes") return obtenerPendientes(listaTareas);
  if (filtroActivo === "terminadas") return obtenerTerminadas(listaTareas);
  return listaTareas;
}

function render() {
  list.innerHTML = "";
  const tareasVisibles = obtenerTareasSegunFiltro(tareas, filtro);

  tareasVisibles.forEach((tarea) => {
    const li = document.createElement("li");
    li.className = tarea.completada ? "task done" : "task";
    li.innerHTML = `<span class="title">${tarea.titulo}</span>
      <span class="task-actions">
        <button data-toggle="${tarea.id}">${tarea.completada ? "Reabrir" : "Completar"}</button>
        <button data-delete="${tarea.id}">Eliminar</button>
      </span>`;
    list.appendChild(li);
  });

  const resumen = obtenerResumen(tareas);
  summary.textContent = `Total: ${resumen.total} · Pendientes: ${resumen.pendientes} · Terminadas: ${resumen.terminadas}`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const titulo = input.value.trim();
  if (!titulo) {
    message.textContent = "Escribe un título antes de agregar.";
    return;
  }
  if (existeTitulo(tareas, titulo)) {
    message.textContent = "Ya existe una tarea con ese título.";
    return;
  }
  const nuevaTarea = crearTarea(siguienteId++, titulo);
  tareas = agregarTarea(tareas, nuevaTarea);
  input.value = "";
  message.textContent = "";
  render();
});

list.addEventListener("click", (event) => {
  const toggleId = event.target.dataset.toggle;
  if (toggleId !== undefined) {
    tareas = cambiarEstado(tareas, Number(toggleId));
    render();
    return;
  }

  const deleteId = event.target.dataset.delete;
  if (deleteId !== undefined) {
    tareas = eliminarTarea(tareas, Number(deleteId));
    render();
  }
});

filters.forEach(button => button.addEventListener("click", () => {
  filtro = button.dataset.filter;
  filters.forEach(b => b.classList.toggle("active", b === button));
  message.textContent = "";
  render();
}));

render();
