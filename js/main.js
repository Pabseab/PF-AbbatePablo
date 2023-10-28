
// let carrito = [];

// let contenedor = document.querySelector("main");

// cargaAddEventListener();

// function cargaAddEventListener(){
//     contenedor.addEventListener("click", agregarProducto);
// }

// function agregarProducto(e){
//     e.preventDefault();
//     if(e.target.classList.contains("agregar")) {
//         const producto = e.target.id;
//         validarProducto(producto)
//     }

// }

// function validarProducto(productoId){
//     const productoAgregado = carrito.find(producto => producto.id == productoId);

//     if(productoAgregado){
//         const index = productos.findIndex(producto => producto.id == productoId);
//         carrito[index].cantidad++
//         // cargarProducto(producto)
//     }else{
//         const producto = productos.find(producto =>producto.id == productoId);
//         carrito.push(producto)
//         cargarProducto(producto)
//         console.log(carrito); 
//     }
// }     

// const cargarProducto = (producto) => {
//     const contenedor = document.getElementById("carrito__contenedor");
//     const div = document.createElement("div");
//     div.classList.add("productoEnCarrito");
//     div.innerHTML = `
//         <p>${producto.titulo}</p>
//         <p>${producto.subtitulo}</p>
//         <p>Precio: ${producto.precio}</p>
//         <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
//         <button class="btn waves-effect waves-ligth eliminar" value="${producto.id}">eliminar</button>
//     `
//     contenedor.appendChild(div);

    // function sumarProductos(suma) {
    //     const agregar = productos.find(producto => producto.id == suma)
    //     if(agregar){
    //         const cantidad = carrito.findIndex(producto => producto.id == suma); 
    //         cantidad.innerText = `Cantidad: ${producto.cantidad}`;
    //         console.log(cantidad);
    //     }
    // }
//};

// let contenedorLleno = document.querySelector("main");

// eliminarObjetos();

// function eliminarObjetos(){
//     contenedorLleno.addEventListener("click", eliminarProducto);
// }

// function eliminarProducto(e){
//     e.preventDefault();
//     if(e.target.classList.contains("eliminar")) {
//         const producto = e.target.id;
//         //console.log(e.target.id)
//         quitarProducto(carrito)
//     }
// }

// function quitarProducto(resta) {
//     const restar = carrito.find(producto => producto.id == resta)
//     if(restar){
//         const index = carrito.findIndex(producto => producto.id == resta); 
//         carrito[index].cantidad--
//         //cantidad.innerText = `Cantidad: ${producto.cantidad}`;
//         console.log(carrito);
//     }else{
//         const producto = productos.find(producto =>producto.id == resta);
//         carrito.pop(producto)
//         //descargarProducto(producto)
//         console.log(carrito); 
//     }
// }





let carrito = [];

const productoContenedor = document.getElementById("main");

productoContenedor.addEventListener("click", (e) => {
    if(e.target.classList.contains("agregar")){
        validarProductoCarrito(e.target.id);
    }
});

const validarProductoCarrito = (productoId) => {
    const estaRepetido = carrito.some(producto => producto.id == productoId);

    if (!estaRepetido) {
        const producto = productos.find(producto => producto.id == productoId);
        carrito.push(producto);

        cargarProductos(producto);
        actualizarTotalesCarrito(carrito);
    }else {
        const producto = carrito.find(producto =>producto.id == productoId);
        const cantidad = document.getElementById(`cantidad${producto.id}`); 
        cantidad.innerText = `Cantidad: ${producto.cantidad}`;
        producto.cantidad++
        actualizarTotalesCarrito(carrito);
    }
}

const cargarProductos = (producto) => {
    const contenedor = document.getElementById("carrito__contenedor");
    const div = document.createElement("div");
    div.classList.add("productoEnCarrito");
    div.innerHTML = `
        <img class="imgCarrito" src=${producto.imagen}>
        <p class="tituloCarrito">${producto.titulo}</p>
        <p class="subtituloCarrito">${producto.subtitulo}</p>
        <p class="precioCarrito"> Precio: ${producto.precio}</p>
        <p class="cantidadCarrito" id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
        <button class="btn waves-effect waves-ligth eliminar" value="${producto.id}"></button>
    `
    contenedor.appendChild(div);
};

const actualizarTotalesCarrito = (carrito) => {
    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const totalCompra = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

    pintarTotalesCarrito(totalCantidad, totalCompra);
    guardarCarritoStorage(carrito);
};

const pintarTotalesCarrito = (totalCantidad, totalCompra) => {
    const contadorCarrito = document.getElementById('contador-carrito');
    const precioTotal = document.getElementById('precioTotal');

    contadorCarrito.innerText = totalCantidad;
    precioTotal.innerText = totalCompra;
};

const pintarCarrito = (carrito) => {
    const contenedor = document.getElementById("carrito__contenedor");
    
    contenedor.innerHTML = "";
    
    carrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("productoEnCarrito");
        div.innerHTML = `
            <img class="imgCarrito" src=${producto.imagen}>
            <p class="tituloCarrito">${producto.titulo}</p>
            <p class="subtituloCarrito">${producto.subtitulo}</p>
            <p class="precioCarrito">Precio: ${producto.precio}</p>
            <p class="cantidadCarrito" id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
            <button class="btn waves-effect waves-ligth eliminar" value="${producto.id}"></button>
        `
    contenedor.appendChild(div);
    });
};

const eliminarProducto = (productoId) => {
    const productoIndex = carrito.findIndex(producto => producto.id == productoId);
        if (carrito[productoIndex].cantidad > 1) {
            carrito[productoIndex].cantidad--
        } else {
            carrito.splice(productoIndex, 1);
        };
    
    //carrito.splice(productoIndex, 1)
    pintarCarrito(carrito); 
    actualizarTotalesCarrito(carrito);
};

const guardarCarritoStorage = (carrito) => {
    localStorage.setItem("carrito",JSON.stringify(carrito))
};

const obtenerCarritoStorage = () => {
    return JSON.parse(localStorage.getItem("carrito"));

};

const actualizarCarrito = () => {
    if (localStorage.getItem("carrito")) {
        carrito = obtenerCarritoStorage();
        pintarCarrito(carrito);
        actualizarTotalesCarrito(carrito);
    }
};











// const carritoVacio = (productoId) => {
//     const productoIndex = carrito.findIndex(producto => producto.id == productoId);
//         if (carrito[productoIndex] = 0) {
//             productoIndex.classList.show("carrito__vacio")
//         } else {
//             productoIndex.classList.hide("carrito__vacio")
//         };
//    };







// let boton = document.getElementById("libros");
// addEventListener("click", (e) => {
//     console.log(e);
// })









// let boton = document.getElementById("iniciarcompra")
// addEventListener("click", comprar)

// function comprar() {
//         const listaProductos = productos.map(producto => {
//             return "- "+producto.titulo+" $"+producto.precio
//         });
//         console.log(listaProductos);
//         comprarProductos(listaProductos)
//     }



//     const comprarProductos = (listaProductos) => {
//         let libroID = "";
//         let libroCantidad = 0;
//         let seguirComprando = false;

//         do {
//             libroID = prompt("¿Qué Libro desea comprar?"+"\n\n"+listaProductos.join("\n"));
//             libroCantidad = parseInt(prompt("¿Cuantos desea comprar?")); 

//             const encontrado = productos.some(producto => producto.titulo.toLowerCase() === libroID.toLowerCase());

//             if (encontrado) {
//                 const producto = productos.find(producto => producto.titulo.toLowerCase() === libroID.toLowerCase());
//                 if (libroCantidad > 0) {
//                     carrito.push({
//                         libroID,
//                         libroCantidad,
//                         precioSubtotal: producto.precio * libroCantidad, 
//                     });
//                 }else{
//                     console.log("cantidad no Valida")
//                 }
//             } else {
//                 alert("El producto no se encuentra en el catálogo.")
//             }

//             seguirComprando = confirm("¿Desea seguir comprando?");

//         } while (seguirComprando);

//         confirmarCompra();

//     }


// const eliminarProductoCarrito = (productoAEliminar) => {
    
//     carrito.forEach((producto, index) => {
//         if (producto.libroID === productoAEliminar) {
//             if (producto.libroCantidad > 1) {
//                 producto.libroCantidad--
//             } else {
//                 carrito.splice(index, 1)
//             }
//         }
//     });
//     confirmarCompra();
// }

// const confirmarCompra = () => {
//     const listaCarrito = carrito.map(producto => {
//         return "-Titulo: "+producto.libroID+" | Cantidad: "+producto.libroCantidad+ "| Subtotal: $ "+producto.precioSubtotal 
//     });

//     console.log(listaCarrito);

//     const confirmarCompra = confirm("Carrito: "+"\n\n"+listaCarrito.join("\n")
//         +"\n\nPara continuar presione Aceptar o Cancelar para eliminar productos del carrito"
//     );

//     if (confirmarCompra) {
//         alert("Elegir El Medio de Pago")
//     } else {
//         const productoAEliminar = prompt("Ingrese el nombre del producto a eliminar:");
//         eliminarProductoCarrito(productoAEliminar);
//     }
// }




// comprar ();

// const medioDePago = () => {
//     const listaTarjetas = tarjetas.map(tarjeta => {
//         return "- "+tarjeta.nombre
//     });
//     console.log(listaTarjetas);
//     usarTarjetas(listaTarjetas)
// }


// const usarTarjetas = (listaTarjetas) => {
//     let elegirTarjeta = "";
//     let elegirOtroMedioDePago = false;

//     do {
//         elegirTarjeta = prompt("¿Con que tarjeta desea Pagar?"+"\n\n"+listaTarjetas.join("\n"));

//         const tarjEncontrado = tarjetas.some(tarjeta => tarjeta.nombre.toLowerCase() === elegirTarjeta.toLowerCase()); 
        
//         if (tarjEncontrado) {            
//             console.log(elegirTarjeta);
//             alert("Realizar pago con tarjeta: " +elegirTarjeta);
//             irAlCheckout = confirm("Ir al Checkout");
//             break;
//         } else {
//             alert("La tarjeta no se acepta");     
//         }

//         elegirOtroMedioDePago = confirm("Desea elegir otro medio de pago");

//     } while (elegirOtroMedioDePago);

// }

// const precioSubtotal = medioDePago();

// const listaCarrito = () => {

//     const total = carrito.reduce((a,b) => a+b.precioSubtotal,0);

//     console.log(total);
//     alert("El valor total de la compra es => $ " +total);

// }

// listaCarrito();
