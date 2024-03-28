const tareasAgregadas = [
  { id: 1, descripcion: "Pasear el perro", estado: false },
  { id: 2, descripcion: "Pasear el gato", estado: false },
  { id: 3, descripcion: "Pasearme", estado: false },
];

const tareaInput = document.querySelector("#addTodo");
const botonTarea = document.querySelector("#agregarTarea");
const listaTareas = document.querySelector("#tareas");
let id2 = tareasAgregadas.length + 1;

botonTarea.addEventListener("click", () => {
  const descripcionTarea = tareaInput.value;
  tareasAgregadas.push({
    id: id2,
    descripcion: descripcionTarea,
    estado: false,
  });
  id2 = id2 + 1;

  tareaInput.value = "";
  tareaInput.focus();
  recargar();
});

function borrar(id) {
  const index = tareasAgregadas.findIndex((ele) => ele.id === id);
  tareasAgregadas.splice(index, 1);
  recargar();
}

function cambiar(id) {
  const index = tareasAgregadas.findIndex((ele) => ele.id === id);
  tareasAgregadas[index].estado = !tareasAgregadas[index].estado;
  recargar();
}

function recargar() {
  let html = "";
  for (let tarea of tareasAgregadas) {
    html += tarea.estado
      ? `<li>${tarea.id} ${tarea.descripcion} <button onclick="cambiar(${tarea.id})">Completada</button> <button onclick="borrar(${tarea.id})">x</button></li>`
      : `<li>${tarea.id} ${tarea.descripcion} <button onclick="cambiar(${tarea.id})">No Completada</button> <button onclick="borrar(${tarea.id})">x</button></li>`;
  }
  listaTareas.innerHTML = html;

  const contador = tareasAgregadas.length;
  const conteoLista = document.getElementById("conteo");
  conteoLista.innerHTML = `<p>Total Tareas: ${contador} </p>`;

  const tareasCompletadas = tareasAgregadas.filter(
    (completo) => completo.estado
  );
  const conteoCompleto = tareasCompletadas.length;
  const contarSi = document.getElementById("tareasC");
  contarSi.innerHTML = `<p>Tareas Completadas: ${conteoCompleto}`;
}
