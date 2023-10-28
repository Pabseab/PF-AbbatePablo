//Modal Carrito de Compra

const modal = document.querySelector(".modal");
const openModal = document.querySelector(".abrir__carrito");
const closeModal = document.querySelector(".cerrar__carrito");
const modalCarrito = document.querySelector(".modal")

openModal.addEventListener("click", (e) => {
	e.preventDefault()
	modal.classList.add("modal--show");
});

closeModal.addEventListener("click", (e) => {
	e.preventDefault()
	modal.classList.remove("modal--show");
});

modalCarrito.addEventListener("click", (e) => {
	e.stopPropagation()
	if (e.target.classList.contains("eliminar")) {
		eliminarProducto(e.target.value);
	}
});

//Modal Buscador

const modalBusqueda = document.querySelector(".modalBusqueda");
const openModalBusqueda = document.querySelector(".busqueda2");
const closeModalBusqueda = document.querySelector(".cerrarBusqueda");
//const modalCarrito = document.querySelector(".modal")

openModalBusqueda.addEventListener("click", (e) => {
	e.preventDefault()
	modalBusqueda.classList.add("modalBusqueda--show");
});

closeModalBusqueda.addEventListener("click", (e) => {
	e.preventDefault()
	modalBusqueda.classList.remove("modalBusqueda--show");
});

//modalCarrito.addEventListener("click", (e) => {
//	e.stopPropagation()
//	if (e.target.classList.contains("eliminar")) {
//		eliminarProducto(e.target.value);
//	}
//});