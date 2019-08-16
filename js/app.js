// Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

// Listeners
cargarEventListeners();

function cargarEventListeners() {
	// Dispara cuando se presiona "Agregar Carrito"
	cursos.addEventListener('click', compraCurso);

	// Cuando se elimina un curso del carrito
	carrito.addEventListener('click', eliminarCurso);

	// Al Vaciar el carrito
	vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

// Funciones
function compraCurso(e) {
	e.preventDefault();
	// Delegation para agregar-carrito
	if (e.target.classList.contains('agregar-carrito')) {
		const curso = e.target.parentElement.parentElement;
		// Enviamos el curso seleccionado para tomar sus datos
		leerDatosCursos(curso);
	}
}
// Lee los datos del curso
function leerDatosCursos(curso) {
	const infoCurso = {
		imagen: curso.querySelector('img').src,
		titulo: curso.querySelector('h4').textContent,
		precio: curso.querySelector('.precio span').textContent,
		id: curso.querySelector('a').getAttribute('data-id')
	};

	insertarCarrito(infoCurso);
}

// Muestra el curso seleccionado en el carrito
function insertarCarrito(curso) {
	const row = document.createElement('tr');
	row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width=100>
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
	listaCursos.append(row);
}
// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
	e.preventDefault();

	let curso;
	if (e.target.classList.contains('borrar-curso')) {
		e.target.parentElement.parentElement.remove();
	}
}
// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
	// fomar lenta
	// listaCursos.innerHTML = '';
	// forma rapida (recomenda)
	while (listaCursos.firstChild) {
		listaCursos.removeChild(listaCursos.firstChild);
	}
	return false;
}
