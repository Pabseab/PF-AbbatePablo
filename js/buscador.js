
document.addEventListener("keyup", e=>{

    if (e.target.matches(".busqueda")){

        if (e.key ==="Escape")e.target.value = ""

        document.querySelectorAll(".tituloBusqueda").forEach(producto =>{

            producto.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?producto.classList.remove("filtro")
            :producto.classList.add("filtro")
        })

    }


})


const contenedorBusqueda = document.querySelector(".busqueda__contenedor");

function cargarProductosBusqueda() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("elementoEnContenedor");
        div.innerHTML = `
            
            <p class="tituloBusqueda">
                <img class="imgBusqueda" src=${producto.imagen}>
                ${producto.titulo}
                ${producto.subtitulo}
                <button class="btn waves-effect waves-ligth eliminar" value="${producto.id}"></button>
            </p>
           
            
            `;
    contenedorBusqueda.appendChild(div);
    })
}

cargarProductosBusqueda();
