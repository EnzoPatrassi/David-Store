// Tu número de WhatsApp (cámbialo si es necesario)
const numeroWhatsApp = "5492616916791";

// 1. AQUÍ AGREGAS TUS PRODUCTOS (Solo tienes que editar esta lista)
const listaProductos = [
    {
        nombre: "Auricular BT Modo-706 Crows Verde",
        precio: "20.000",
        imagen: "AURICULAR BT MODO-706 CROWS – VERDE.jpg",
        estado: "Nuevo",
        categoria: "auriculares"
    },
    {
        nombre: "Auricular Mod82 BT Only Verde",
        precio: "15.000",
        imagen: "AURICULAR MOD82 BT – ONLY – VERDE.jpg",
        estado: "Nuevo",
        categoria: "auriculares"
    },
    {
        nombre: "Auricular Mod83 BT Boom Amarillo",
        precio: "20.000",
        imagen: "AURICULAR MOD83 BT BOOM – ONLY – AMARILLO.jpg",
        estado: "Nuevo",
        categoria: "auriculares"
    },
    {
        nombre: "Auricular Mod83 BT Boom Verde",
        precio: "20.000",
        imagen: "AURICULAR MOD83 BT BOOM – ONLY – VERDE.jpg",
        estado: "Nuevo",
        categoria: "auriculares"
    },
    {
        nombre: "Auricular Modx-703 Radiance Beige",
        precio: "45.000",
        imagen: "AURICULAR MODX-703 RADIANCE – XAEA – BEIGE.jpg",
        estado: "Nuevo",
        categoria: "auriculares"
    },
    {
        nombre: "Auricular Modx-703 Radiance Negro",
        precio: "45.000",
        imagen: "AURICULAR MODX-703 RADIANCE – XAEA – NEGRO.jpg",
        estado: "Nuevo",
        categoria: "auriculares"
    },
    {
        nombre: "Auricular Modx-704 Zyfer Negro",
        precio: "45.000",
        imagen: "AURICULAR MODX-704 ZYFER – XAEA – NEGRO.jpg",
        estado: "Nuevo",
        categoria: "auriculares"
    },
    {
        nombre: "Auriculares BT Mody-00HG Celeste",
        precio: "25.000",
        imagen: "AURICULARES BT MODY-00HG – YEXA – CELESTE.jpg",
        estado: "Nuevo",
        categoria: "auriculares"
    },
    {
        nombre: "Auriculares BT Mody-00HG Gris",
        precio: "25.000",
        imagen: "AURICULARES BT MODY-00HG – YEXA – GRIS.jpg",
        estado: "Nuevo",
        categoria: "auriculares"
    },
    {
        nombre: "Auriculares BT Mody-00HG Rosa",
        precio: "25.000",
        imagen: "AURICULARES BT MODY-00HG – YEXA – ROSA.jpg",
        estado: "Nuevo",
        categoria: "auriculares"
    },
    {
        nombre: "Auriculares BT Mody-00HG Verde",
        precio: "25.000",
        imagen: "AURICULARES BT MODY-00HG – YEXA – VERDE.jpg",
        estado: "Nuevo",
        categoria: "auriculares"
    },
    {
        nombre: "Auriculares BT Mody-00HH Beige",
        precio: "25.000",
        imagen: "AURICULARES BT MODY-00HH – YEXA – BEIGE.jpg",
        estado: "Nuevo",
        categoria: "auriculares"
    },
    {
        nombre: "Auriculares BT Mody-00HH Blanco",
        precio: "25.000",
        imagen: "AURICULARES BT MODY-00HH – YEXA – BLANCO.jpg",
        estado: "Nuevo",
        categoria: "auriculares"
    },
    {
        nombre: "Auriculares Havit Gamer Con Cable Y Micrófono",
        precio: "30.000",
        imagen: "Auriculares Havit Gamer.jpg",
        estado: "Nuevo",
        categoria: "auriculares"
    },
    {
        nombre: "Manos Libres F9",
        precio: "10.000",
        imagen: "AURICULARES INALAMBRICOS F9.jpg",
        estado: "Usado",
        categoria: "manoslibres"
    },
    {
        nombre: "Manos Libres Top House Tw931",
        precio: "20.000",
        imagen: "Auriculares TOP HOUSE Tw931 Pro Blanco.jpg",
        estado: "Usado",
        categoria: "manoslibres"
    },
    {
        nombre: "Parlante Charge 5",
        precio: "30.000",
        imagen: "Parlante Change 5.jpeg",
        estado: "Usado",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante Dot Mini MODX-004X - XAEA - Negro",
        precio: "40.000",
        imagen: "PARLANTE PEQUEÑO “DOT MINI” XAEA NEGRO.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante Dot Mini MODX-004X - XAEA - Rojo",
        precio: "40.000",
        imagen: "PARLANTE PEQUEÑO “DOT MINI” XAEA ROJO.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante Dot Mini MODX-004X - XAEA - Azul",
        precio: "40.000",
        imagen: "PARLANTE 3” DOT MINI – MODX-004X – XAEA – AZUL.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante Dot Mini MODX-004X - XAEA - Verde",
        precio: "40.000",
        imagen: "PARLANTE 3” DOT MINI – MODX-004X – XAEA – VERDE.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante MODX-0050 XAEA Gris",
        precio: "25.000",
        imagen: "PARLANTE 3” MODX-0050 – XAEA – GRIS.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante MODX-0050 XAEA Rojo",
        precio: "25.000",
        imagen: "PARLANTE 3” MODX-0050 – XAEA – ROJO.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante MODO-022 Heat Azul",
        precio: "20.000",
        imagen: "PARLANTE 3” – MODO-022 HEAT – ONLY – AZUL.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante MODO-022 Heat Gris",
        precio: "20.000",
        imagen: "PARLANTE 3” – MODO-022 HEAT – ONLY – GRIS.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante MODO-022 Heat Negro",
        precio: "20.000",
        imagen: "PARLANTE 3” – MODO-022 HEAT – ONLY – NEGRO.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante MODO-022 Heat Rojo",
        precio: "20.000",
        imagen: "PARLANTE 3” – MODO-022 HEAT – ONLY – ROJO.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante Bloomline - MODX-0051 XAEA Azul",
        precio: "40.000",
        imagen: "PARLANTE 3” BLOOMLINE – MODX-0051 – XAEA – AZUL.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante Bloomline - MODX-0051 XAEA Negro",
        precio: "40.000",
        imagen: "PARLANTE 3” BLOOMLINE – MODX-0051 – XAEA – NEGRO.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante Bloomline - MODX-0051 XAEA Rojo",
        precio: "40.000",
        imagen: "PARLANTE 3” BLOOMLINE – MODX-0051 – XAEA – ROJO.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante Exo Mini MODX-004W - XAEA - Rojo",
        precio: "40.000",
        imagen: "PARLANTE 3” EXO MINI – MODX-004W – XAEA – ROJO.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante Exo Mini MODX-004W - XAEA - Azul",
        precio: "40.000",
        imagen: "PARLANTE 3” EXO MINI – MODX-004W – XAEA – AZUL.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante Exo Mini MODX-004W - XAEA - Camuflado",
        precio: "40.000",
        imagen: "PARLANTE 3” EXO MINI – MODX-004W – XAEA – CAMUFLADO.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante Exo Mini MODX-004W - XAEA - Negro",
        precio: "40.000",
        imagen: "PARLANTE 3” EXO MINI – MODX-004W – XAEA – NEGRO.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante X2 CH5 MODV-003U Azul",
        precio: "40.000",
        imagen: "PARLANTE 3”X2 CH5 MODV-003U – VARIOS – AZUL.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante X2 CH5 MODV-003U Camuflado",
        precio: "40.000",
        imagen: "PARLANTE 3”X2 CH5 MODV-003U – VARIOS – CAMUFLADO.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante X2 CH5 MODV-003U Negro",
        precio: "40.000",
        imagen: "PARLANTE 3”X2 CH5 MODV-003U – VARIOS – NEGRO.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante Pequeño Dual Storm MODX-000P - XAEA - Negro",
        precio: "35.000",
        imagen: "PARLANTE PEQUEÑO DUAL STORM MODX-000P – XAEA – NEGRO.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante Pequeño Esfera MODX-004I XAEA Azul",
        precio: "20.000",
        imagen: "PARLANTE PEQUEÑO ESFERA MODX-004I – XAEA – AZUL.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante Pequeño Esfera MODX-004I XAEA Gris",
        precio: "20.000",
        imagen: "PARLANTE PEQUEÑO ESFERA MODX-004I – XAEA – GRIS.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante Pequeño Esfera MODX-004I XAEA Rojo",
        precio: "20.000",
        imagen: "PARLANTE PEQUEÑO ESFERA MODX-004I – XAEA – ROJO.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante Pequeño MODX-004Y XAEA Negro",
        precio: "30.000",
        imagen: "PARLANTE PEQUEÑO MODX-004Y – XAEA – NEGRO.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante Pequeño T5 - Camuflado",
        precio: "20.000",
        imagen: "PARLANTE PEQUEÑO T5 – CAMUFLADO.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Parlante Pequeño T5 - Rojo",
        precio: "20.000",
        imagen: "PARLANTE PEQUEÑO T5 – ROJO.jpg",
        estado: "Nuevo",
        categoria: "parlantes"
    },
    {
        nombre: "Reloj Masculino LX01 MODV-005K - Marron",
        precio: "10.000",
        imagen: "RELOJ MASCULINO LX01 MODV-005K – VARIOS – MARRON.jpg",
        estado: "Nuevo",
        categoria: "relojes"
    },
    {
        nombre: "Reloj Masculino LX01 MODV-005K - Negro",
        precio: "10.000",
        imagen: "RELOJ MASCULINO LX01 MODV-005K – VARIOS – NEGRO.jpg",
        estado: "Nuevo",
        categoria: "relojes"
    },
    {
        nombre: "Reloj Masculino LX01 MODV-005K - Negro y Blanco",
        precio: "10.000",
        imagen: "RELOJ MASCULINO LX01 MODV-005K – VARIOS – NEGRO Y BLANCO.jpg",
        estado: "Nuevo",
        categoria: "relojes"
    },
    {
        nombre: "Reloj Masculino LX01 MODV-005K - Verde",
        precio: "10.000",
        imagen: "RELOJ MASCULINO LX01 MODV-005K – VARIOS – VERDE.jpg",
        estado: "Nuevo",
        categoria: "relojes"
    },
    {
        nombre: "Smart Watch GT5 MODV-00GF - Azul",
        precio: "35.000",
        imagen: "SMART WATCH GT5 MODV-00GF – VARIOS – AZUL.jpg",
        estado: "Nuevo",
        categoria: "smartwatchs"
    },
    {
        nombre: "Smart Watch GT5 MODV-00GF - Blanco",
        precio: "35.000",
        imagen: "SMART WATCH GT5 MODV-00GF – VARIOS – BLANCO.jpg",
        estado: "Nuevo",
        categoria: "smartwatchs"
    },
    {
        nombre: "Smart Watch GT5 MODV-00GF - Gris",
        precio: "35.000",
        imagen: "SMART WATCH GT5 MODV-00GF – VARIOS – GRIS.jpg",
        estado: "Nuevo",
        categoria: "smartwatchs"
    },
    {
        nombre: "Smart Watch GT5 MODV-00GF - Negro",
        precio: "35.000",
        imagen: "SMART WATCH GT5 MODV-00GF – VARIOS – NEGRO.jpg",
        estado: "Nuevo",
        categoria: "smartwatchs"
    },
    {
        nombre: "Smart Watch MODS-006 D20 – ST – Blanco",
        precio: "15.000",
        imagen: "SMART WATCH MODS-006 D20 – ST – BLANCO.jpg",
        estado: "Nuevo",
        categoria: "smartwatchs"
    },
    {
        nombre: "Smart Watch MODS-006 D20 – ST – Negro",
        precio: "15.000",
        imagen: "SMART WATCH MODS-006 D20 – ST – NEGRO.jpg",
        estado: "Nuevo",
        categoria: "smartwatchs"
    },
    {
        nombre: "Smart Watch MODS-006 D20 – ST – Plateado",
        precio: "15.000",
        imagen: "SMART WATCH MODS-006 D20 – ST – PLATEADO.jpg",
        estado: "Nuevo",
        categoria: "smartwatchs"
    },
    {
        nombre: "Smart Watch MODS-006 D20 – ST – Rosa",
        precio: "15.000",
        imagen: "SMART WATCH MODS-006 D20 – ST – ROSA.jpg",
        estado: "Nuevo",
        categoria: "smartwatchs"
    },
    {
        nombre: "Smart Watch MODS-774 - SU 30 - ST - Negro",
        precio: "30.000",
        imagen: "SMART WATCH MODS-774 – SU 30 – ST – NEGRO.jpg",
        estado: "Nuevo",
        categoria: "smartwatchs"
    },
    {
        nombre: "Smart Watch MODS-774 - SU 30 - ST - Plateado",
        precio: "30.000",
        imagen: "SMART WATCH MODS-774 – SU 30 – ST – PLATEADO.jpg",
        estado: "Nuevo",
        categoria: "smartwatchs"
    },
    {
        nombre: "Smart Watch MODS-774 - SU 30 - ST - Rosa",
        precio: "30.000",
        imagen: "SMART WATCH MODS-774 – SU 30 – ST – ROSA.jpg",
        estado: "Nuevo",
        categoria: "smartwatchs"
    },
    {
        nombre: "Manos Libres MODS-127 TWS - Blanco",
        precio: "15.000",
        imagen: "MANOS LIBRES MODS-127 TWS – STOCK – BLANCO.jpg",
        estado: "Nuevo",
        categoria: "manoslibres"
    },
    {
        nombre: "Manos Libres MODS-127 TWS - Negro",
        precio: "15.000",
        imagen: "MANOS LIBRES MODS-127 TWS – STOCK – NEGRO.jpg",
        estado: "Nuevo",
        categoria: "manoslibres"
    },
    {
        nombre: "Manos Libres MODS-127 TWS - Rosa",
        precio: "15.000",
        imagen: "MANOS LIBRES MODS-127 TWS – STOCK – ROSA.jpg",
        estado: "Nuevo",
        categoria: "manoslibres"
    },
    {
        nombre: "Manos Libres TWS - NOX - MODX-051 - XAEA - Blanco",
        precio: "40.000",
        imagen: "MANOS LIBRES TWS – NOX – MODX-051 – XAEA – BLANCO.jpg",
        estado: "Nuevo",
        categoria: "manoslibres"
    },
    {
        nombre: "Manos Libres TWS - NOX - MODX-051 - XAEA - Negro",
        precio: "40.000",
        imagen: "MANOS LIBRES TWS – NOX – MODX-051 – XAEA – NEGRO.jpg",
        estado: "Nuevo",
        categoria: "manoslibres"
    },
    {
        nombre: "Manos Libres TWS ANC - MODX-0023 - XAEA - Blanco",
        precio: "20.000",
        imagen: "MANOS LIBRES TWS ANC MODX-0023 – XAEA – BLANCO.jpg",
        estado: "Nuevo",
        categoria: "manoslibres"
    },
    {
        nombre: "Manos Libres TWS ANC - MODX-0023 - XAEA - Negro",
        precio: "20.000",
        imagen: "MANOS LIBRES TWS ANC MODX-0023 – XAEA – NEGRO.jpg",
        estado: "Nuevo",
        categoria: "manoslibres"
    },
    {
        nombre: "Manos Libres TWS ANC - MODX-0024 - XAEA - Negro",
        precio: "30.000",
        imagen: "MANOS LIBRES TWS ANC MODX-0024 – XAEA – NEGRO.jpg",
        estado: "Nuevo",
        categoria: "manoslibres"
    },
    {
        nombre: "Manos Libres TWS ANC SIMIL CUERO MODX-00AI - XAEA - Beige",
        precio: "35.000",
        imagen: "MANOS LIBRES TWS ANC SIMIL CUERO MODX-00AI – XAEA – BEIGE.jpg",
        estado: "Nuevo",
        categoria: "manoslibres"
    },
    {
        nombre: "Manos Libres TWS ANC SIMIL CUERO MODX-00AI - XAEA - Blanco",
        precio: "35.000",
        imagen: "MANOS LIBRES TWS ANC SIMIL CUERO MODX-00AI – XAEA – BLANCO.jpg",
        estado: "Nuevo",
        categoria: "manoslibres"
    },
    {
        nombre: "Manos Libres TWS ANC SIMIL CUERO MODX-00AI - XAEA - Negro",
        precio: "35.000",
        imagen: "MANOS LIBRES TWS ANC SIMIL CUERO MODX-00AI – XAEA – NEGRO.jpg",
        estado: "Nuevo",
        categoria: "manoslibres"
    },

];

// --- VARIABLES Y ELEMENTOS DEL DOM ---
const contenedor = document.getElementById('contenedor-productos');
const selectOrden = document.getElementById('select-orden');
const botonesCategoria = document.querySelectorAll('.btn-categoria');

// Elementos del carrito
const btnAbrirCarrito = document.getElementById('btn-abrir-carrito');
const btnCerrarCarrito = document.getElementById('btn-cerrar-carrito');
const overlayCarrito = document.getElementById('carrito-overlay');
const contenedorItemsCarrito = document.getElementById('contenedor-items-carrito');
const contadorCarrito = document.getElementById('carrito-contador');
const totalPrecioCarrito = document.getElementById('carrito-total-precio');
const formCheckout = document.getElementById('form-checkout');

let filtroActual = 'todos';

// 1. LÓGICA DEL CARRITO (Con guardado automático en el navegador)
let carrito = JSON.parse(localStorage.getItem('patrassiCarrito')) || [];

function guardarCarrito() {
    localStorage.setItem('patrassiCarrito', JSON.stringify(carrito));
}

function obtenerPrecioNumerico(precioStr) {
    return parseInt(precioStr.replace(/\./g, ''));
}

function agregarAlCarrito(nombreProducto) {
    const producto = listaProductos.find(p => p.nombre === nombreProducto);
    if (!producto) return;

    const itemExistente = carrito.find(item => item.nombre === nombreProducto);
    
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({
            nombre: producto.nombre,
            precio: obtenerPrecioNumerico(producto.precio),
            imagen: producto.imagen,
            cantidad: 1
        });
    }
    
    guardarCarrito();
    actualizarCarritoUI();
    abrirCarrito(); // Opcional: abre el carrito al agregar para que el usuario lo vea
}

function cambiarCantidad(nombreProducto, operacion) {
    const item = carrito.find(i => i.nombre === nombreProducto);
    if (!item) return;

    if (operacion === 'suma') item.cantidad++;
    if (operacion === 'resta') item.cantidad--;

    if (item.cantidad <= 0) {
        carrito = carrito.filter(i => i.nombre !== nombreProducto);
    }
    
    guardarCarrito();
    actualizarCarritoUI();
}

function eliminarDelCarrito(nombreProducto) {
    carrito = carrito.filter(item => item.nombre !== nombreProducto);
    guardarCarrito();
    actualizarCarritoUI();
}

function actualizarCarritoUI() {
    contenedorItemsCarrito.innerHTML = '';
    let total = 0;
    let cantidadTotal = 0;

    if (carrito.length === 0) {
        contenedorItemsCarrito.innerHTML = '<p class="carrito-vacio">El carrito está vacío</p>';
    } else {
        carrito.forEach(item => {
            total += item.precio * item.cantidad;
            cantidadTotal += item.cantidad;
            
            // Re-formatear precio con puntos
            const precioMostrado = (item.precio * item.cantidad).toLocaleString('es-AR');

            contenedorItemsCarrito.innerHTML += `
                <div class="item-carrito">
                    <img src="images/${item.imagen}" alt="${item.nombre}">
                    <div class="item-carrito-info">
                        <h4>${item.nombre}</h4>
                        <p>$${precioMostrado}</p>
                        <div class="controles-cantidad">
                            <button class="btn-cantidad" onclick="cambiarCantidad('${item.nombre}', 'resta')">-</button>
                            <span>${item.cantidad}</span>
                            <button class="btn-cantidad" onclick="cambiarCantidad('${item.nombre}', 'suma')">+</button>
                            <button class="btn-eliminar" onclick="eliminarDelCarrito('${item.nombre}')"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    totalPrecioCarrito.innerText = total.toLocaleString('es-AR');
    contadorCarrito.innerText = cantidadTotal;
}

// 2. GENERADOR DEL TICKET PARA WHATSAPP
formCheckout.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (carrito.length === 0) {
        alert("¡Tu carrito está vacío! Agrega algunos productos primero.");
        return;
    }

    const nombre = document.getElementById('cliente-nombre').value;
    const apellido = document.getElementById('cliente-apellido').value;
    const dni = document.getElementById('cliente-dni').value;
    const telefono = document.getElementById('cliente-telefono').value;

    // Armar el mensaje tipo Ticket
    let texto = `*NUEVO PEDIDO - PATRASSI TECH*\n\n`;
    texto += `👤 *Datos del cliente:*\n`;
    texto += `- Nombre: ${nombre} ${apellido}\n`;
    texto += `- DNI: ${dni}\n`;
    texto += `- Tel: ${telefono}\n\n`;
    
    texto += `🛍️ *Detalle de la compra:*\n`;
    let total = 0;
    
    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        texto += `▪️ ${item.cantidad}x ${item.nombre} ($${subtotal.toLocaleString('es-AR')})\n`;
    });
    
    texto += `\n💰 *TOTAL A PAGAR: $${total.toLocaleString('es-AR')}*`;
    
    // Redirigir a WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
    
    // Limpiar carrito después de enviar (Opcional, pero recomendado)
    carrito = [];
    guardarCarrito();
    actualizarCarritoUI();
    cerrarCarrito();
    formCheckout.reset();
});

// 3. MOTOR DE RENDERIZADO DEL CATÁLOGO
function actualizarVista() {
    let productosFiltrados = listaProductos.filter(producto => {
        return filtroActual === 'todos' || producto.categoria === filtroActual;
    });

    const orden = selectOrden.value;
    if (orden === "precio-menor") {
        productosFiltrados.sort((a, b) => obtenerPrecioNumerico(a.precio) - obtenerPrecioNumerico(b.precio));
    } else if (orden === "precio-mayor") {
        productosFiltrados.sort((a, b) => obtenerPrecioNumerico(b.precio) - obtenerPrecioNumerico(a.precio));
    } else if (orden === "az") {
        productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (orden === "za") {
        productosFiltrados.sort((a, b) => b.nombre.localeCompare(a.nombre));
    }

    let html = "";
    productosFiltrados.forEach(producto => {
        const claseEstado = producto.estado.toLowerCase() === "nuevo" ? "estado-nuevo" : "estado-usado";

        // Ahora el botón llama a la función de agregar al carrito en lugar de enviar el mensaje directamente
        html += `
        <article class="producto card-3d" data-categoria="${producto.categoria}">
            <div class="img-container">
                <span class="etiqueta-estado ${claseEstado}">${producto.estado}</span>
                <img src="images/${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="producto-info">
                <h2>${producto.nombre}</h2>
            </div>
            <div class="producto-footer">
                <p class="precio">$${producto.precio}</p>
                <button onclick="agregarAlCarrito('${producto.nombre}')" class="boton-whatsapp">
                    <i class="fa-solid fa-cart-plus"></i> Agregar al carrito
                </button>
            </div>
        </article>
        `;
    });

    contenedor.innerHTML = html;
}

// 4. EVENTOS (Filtros, Modal, etc.)
function abrirCarrito() { overlayCarrito.classList.add('activo'); }
function cerrarCarrito() { overlayCarrito.classList.remove('activo'); }

btnAbrirCarrito.addEventListener('click', abrirCarrito);
btnCerrarCarrito.addEventListener('click', cerrarCarrito);
overlayCarrito.addEventListener('click', (e) => {
    if (e.target === overlayCarrito) cerrarCarrito(); // Cierra si hacés clic afuera del modal
});

selectOrden.addEventListener('change', actualizarVista);

botonesCategoria.forEach(boton => {
    boton.addEventListener('click', () => {
        botonesCategoria.forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');
        filtroActual = boton.dataset.filtro;
        actualizarVista();
    });
});

// INICIAR TODO
document.addEventListener('DOMContentLoaded', () => {
    actualizarVista();
    actualizarCarritoUI();
});