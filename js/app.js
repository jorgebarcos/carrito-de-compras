// Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');

// Listeners
cargarEventListeners();

function cargarEventListeners() {
	// Dispara cuando se presiona "Agregar Carrito"
	cursos.addEventListener('click', compraCurso);
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
	console.log(curso);
}
