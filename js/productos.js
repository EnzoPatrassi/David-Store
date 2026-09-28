// Tu número de WhatsApp (cámbialo si es necesario)
const numeroWhatsApp = "5492616916791";

// 1. AQUÍ AGREGAS TUS PRODUCTOS
const listaProductos = [
  // --- AURICULARES (Sin características) ---
  { nombre: "Auricular BT Crows Verde", precio: "20.100", imagen: "AURICULAR BT MODO-706 CROWS – VERDE.jpg", estado: "Nuevo", categoria: "auriculares", caracteristicas: ["Batería: 150mAh"] },
  { nombre: "Auricular BT Only Verde", precio: "12.100", imagen: "AURICULAR MOD82 BT – ONLY – VERDE.jpg", estado: "Nuevo", categoria: "auriculares" },
  { nombre: "Auricular BT Boom Only Amarillo", precio: "20.500", imagen: "AURICULAR MOD83 BT BOOM – ONLY – AMARILLO.jpg", estado: "Nuevo", categoria: "auriculares", caracteristicas: ["Batería: 150mAh"] },
  { nombre: "Auricular BT Boom Only Verde", precio: "20.500", imagen: "AURICULAR MOD83 BT BOOM – ONLY – VERDE.jpg", estado: "Nuevo", categoria: "auriculares", caracteristicas: ["Batería: 150mAh"] },
  { nombre: "Auricular Radiance Xaea Beige", precio: "45.400", imagen: "AURICULAR MODX-703 RADIANCE – XAEA – BEIGE.jpg", estado: "Nuevo", categoria: "auriculares", caracteristicas: ["Batería: 400mAh"] },
  { nombre: "Auricular Radiance Xaea Negro", precio: "45.400", imagen: "AURICULAR MODX-703 RADIANCE – XAEA – NEGRO.jpg", estado: "Nuevo", categoria: "auriculares", caracteristicas: ["Batería: 400mAh"] },
  { nombre: "Auricular Zyfer Xaea Negro", precio: "44.800", imagen: "AURICULAR MODX-704 ZYFER – XAEA – NEGRO.jpg", estado: "Nuevo", categoria: "auriculares", caracteristicas: ["Batería: 400mAh"] },
  { nombre: "Auriculares BT Yexa Celeste", precio: "32.400", imagen: "AURICULARES BT MODY-00HG – YEXA – CELESTE.jpg", estado: "Nuevo", categoria: "auriculares", caracteristicas: ["Batería: 300mAh"] },
  { nombre: "Auriculares BT Yexa Gris", precio: "32.400", imagen: "AURICULARES BT MODY-00HG – YEXA – GRIS.jpg", estado: "Nuevo", categoria: "auriculares", caracteristicas: ["Batería: 300mAh"] },
  { nombre: "Auriculares BT Yexa Rosa", precio: "32.400", imagen: "AURICULARES BT MODY-00HG – YEXA – ROSA.jpg", estado: "Nuevo", categoria: "auriculares", caracteristicas: ["Batería: 300mAh"] },
  { nombre: "Auriculares BT Yexa Verde", precio: "32.400", imagen: "AURICULARES BT MODY-00HG – YEXA – VERDE.jpg", estado: "Nuevo", categoria: "auriculares", caracteristicas: ["Batería: 300mAh"] },
  { nombre: "Auriculares BT Yexa Beige", precio: "32.200", imagen: "AURICULARES BT MODY-00HH – YEXA – BEIGE.jpg", estado: "Nuevo", categoria: "auriculares", caracteristicas: ["Batería: 250mAh"] },
  { nombre: "Auriculares BT Yexa Blanco", precio: "32.200", imagen: "AURICULARES BT MODY-00HH – YEXA – BLANCO.jpg", estado: "Nuevo", categoria: "auriculares", caracteristicas: ["Batería: 250mAh"] },
  { nombre: "Auriculares Havit Gamer Con Cable Y Micrófono", precio: "30.000", imagen: "Auriculares Havit Gamer.jpg", estado: "Nuevo", categoria: "auriculares", caracteristicas: ["Batería: 200mAh"] },

  // --- MANOS LIBRES ---
  { nombre: "Manos Libres Top House", precio: "20.000", imagen: "Auriculares TOP HOUSE Tw931 Pro Blanco.jpg", estado: "Usado", categoria: "manoslibres", caracteristicas: ["Estuche: 300mAh", "Auric: 30mAh"] },
  { nombre: "Manos Libres TWS Blanco", precio: "14.900", imagen: "MANOS LIBRES MODS-127 TWS – STOCK – BLANCO.jpg", estado: "Nuevo", categoria: "manoslibres", caracteristicas: ["Estuche: 150mAh", "Auric: 25mAh"] },
  { nombre: "Manos Libres TWS Negro", precio: "14.900", imagen: "MANOS LIBRES MODS-127 TWS – STOCK – NEGRO.jpg", estado: "Nuevo", categoria: "manoslibres", caracteristicas: ["Estuche: 150mAh", "Auric: 25mAh"] },
  { nombre: "Manos Libres TWS Rosa", precio: "14.900", imagen: "MANOS LIBRES MODS-127 TWS – STOCK – ROSA.jpg", estado: "Nuevo", categoria: "manoslibres", caracteristicas: ["Estuche: 150mAh", "Auric: 25mAh"] },
  { nombre: "Manos Libres Nox Xaea Blanco", precio: "40.000", imagen: "MANOS LIBRES TWS – NOX – MODX-051 – XAEA – BLANCO.jpg", estado: "Nuevo", categoria: "manoslibres", caracteristicas: ["Estuche: 400mAh", "Auric: 40mAh"] },
  { nombre: "Manos Libres Nox Xaea Negro", precio: "40.000", imagen: "MANOS LIBRES TWS – NOX – MODX-051 – XAEA – NEGRO.jpg", estado: "Nuevo", categoria: "manoslibres", caracteristicas: ["Estuche: 400mAh", "Auric: 40mAh"] },
  { nombre: "Manos Libres Xaea Blanco", precio: "20.700", imagen: "MANOS LIBRES TWS ANC MODX-0023 – XAEA – BLANCO.jpg", estado: "Nuevo", categoria: "manoslibres", caracteristicas: ["Estuche: 380mAh", "Auric: 40mAh"] },
  { nombre: "Manos Libres Xaea Negro", precio: "20.700", imagen: "MANOS LIBRES TWS ANC MODX-0023 – XAEA – NEGRO.jpg", estado: "Nuevo", categoria: "manoslibres", caracteristicas: ["Estuche: 380mAh", "Auric: 40mAh"] },
  { nombre: "Manos Libres Xaea Rosa", precio: "28.400", imagen: "MANOS LIBRES TWS ANC MODX-0024 – XAEA – NEGRO.jpg", estado: "Nuevo", categoria: "manoslibres", caracteristicas: ["Estuche: 380mAh", "Auric: 40mAh"] },
  { nombre: "Manos Libres Xaea Beige", precio: "34.900", imagen: "MANOS LIBRES TWS ANC SIMIL CUERO MODX-00AI – XAEA – BEIGE.jpg", estado: "Nuevo", categoria: "manoslibres", caracteristicas: ["Estuche: 400mAh", "Auric: 40mAh"] },
  { nombre: "Manos Libres Xaea Blanco", precio: "34.900", imagen: "MANOS LIBRES TWS ANC SIMIL CUERO MODX-00AI – XAEA – BLANCO.jpg", estado: "Nuevo", categoria: "manoslibres", caracteristicas: ["Estuche: 400mAh", "Auric: 40mAh"] },
  { nombre: "Manos Libres Xaea Negro", precio: "34.900", imagen: "MANOS LIBRES TWS ANC SIMIL CUERO MODX-00AI – XAEA – NEGRO.jpg", estado: "Nuevo", categoria: "manoslibres", caracteristicas: ["Estuche: 400mAh", "Auric: 40mAh"] },

  // --- PARLANTES ---
  { nombre: "Parlante Dot Mini Xaea Negro", precio: "40.300", imagen: "PARLANTE PEQUEÑO “DOT MINI” XAEA NEGRO.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 10W", "Batería: 1800mAh"] },
  { nombre: "Parlante Dot Mini Xaea Rojo", precio: "40.300", imagen: "PARLANTE PEQUEÑO “DOT MINI” XAEA ROJO.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 10W", "Batería: 1800mAh"] },
  { nombre: "Parlante Dot Mini Xaea Azul", precio: "40.300", imagen: "PARLANTE 3” DOT MINI – MODX-004X – XAEA – AZUL.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 10W", "Batería: 1800mAh"] },
  { nombre: "Parlante Dot Mini Xaea Verde", precio: "40.300", imagen: "PARLANTE 3” DOT MINI – MODX-004X – XAEA – VERDE.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 10W", "Batería: 1800mAh"] },
  { nombre: "Parlante Xaea Gris", precio: "22.400", imagen: "PARLANTE 3” MODX-0050 – XAEA – GRIS.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 3W", "Batería: 800mAh"] },
  { nombre: "Parlante Xaea Rojo", precio: "22.400", imagen: "PARLANTE 3” MODX-0050 – XAEA – ROJO.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 3W", "Batería: 800mAh"] },
  { nombre: "Parlante Heat Only Azul", precio: "15.100", imagen: "PARLANTE 3” – MODO-022 HEAT – ONLY – AZUL.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 5W", "Batería: 800mAh"] },
  { nombre: "Parlante Heat Only Gris", precio: "15.100", imagen: "PARLANTE 3” – MODO-022 HEAT – ONLY – GRIS.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 5W", "Batería: 800mAh"] },
  { nombre: "Parlante Heat Only Negro", precio: "15.100", imagen: "PARLANTE 3” – MODO-022 HEAT – ONLY – NEGRO.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 5W", "Batería: 800mAh"] },
  { nombre: "Parlante Heat Only Rojo", precio: "15.100", imagen: "PARLANTE 3” – MODO-022 HEAT – ONLY – ROJO.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 5W", "Batería: 800mAh"] },
  { nombre: "Parlante Bloomline Xaea Azul", precio: "43.400", imagen: "PARLANTE 3” BLOOMLINE – MODX-0051 – XAEA – AZUL.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 10W", "Batería: 1200mAh"] },
  { nombre: "Parlante Bloomline Xaea Negro", precio: "43.400", imagen: "PARLANTE 3” BLOOMLINE – MODX-0051 – XAEA – NEGRO.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 10W", "Batería: 1200mAh"] },
  { nombre: "Parlante Bloomline Xaea Rojo", precio: "43.400", imagen: "PARLANTE 3” BLOOMLINE – MODX-0051 – XAEA – ROJO.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 10W", "Batería: 1200mAh"] },
  { nombre: "Parlante Exo Mini Xaea Rojo", precio: "40.000", imagen: "PARLANTE 3” EXO MINI – MODX-004W – XAEA – ROJO.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 8W", "Batería: 1200mAh"] },
  { nombre: "Parlante Exo Mini Xaea Azul", precio: "40.000", imagen: "PARLANTE 3” EXO MINI – MODX-004W – XAEA – AZUL.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 8W", "Batería: 1200mAh"] },
  { nombre: "Parlante Exo Mini Xaea Camuflado", precio: "40.000", imagen: "PARLANTE 3” EXO MINI – MODX-004W – XAEA – CAMUFLADO.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 8W", "Batería: 1200mAh"] },
  { nombre: "Parlante Exo Mini Xaea Negro", precio: "40.000", imagen: "PARLANTE 3” EXO MINI – MODX-004W – XAEA – NEGRO.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 8W", "Batería: 1200mAh"] },
  { nombre: "Parlante X2 CH5 Azul", precio: "42.800", imagen: "PARLANTE 3”X2 CH5 MODV-003U – VARIOS – AZUL.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 10W", "Batería: 1200mAh"] },
  { nombre: "Parlante X2 CH5 Camuflado", precio: "42.800", imagen: "PARLANTE 3”X2 CH5 MODV-003U – VARIOS – CAMUFLADO.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 10W", "Batería: 1200mAh"] },
  { nombre: "Parlante X2 CH5 Negro", precio: "42.800", imagen: "PARLANTE 3”X2 CH5 MODV-003U – VARIOS – NEGRO.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 10W", "Batería: 1200mAh"] },
  { nombre: "Parlante Pequeño Dual Storm Xaea Negro", precio: "32.400", imagen: "PARLANTE PEQUEÑO DUAL STORM MODX-000P – XAEA – NEGRO.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 5W", "Batería: 1200mAh"] },
  { nombre: "Parlante Pequeño Esfera Xaea Azul", precio: "20.300", imagen: "PARLANTE PEQUEÑO ESFERA MODX-004I – XAEA – AZUL.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 5W", "Batería: 800mAh"] },
  { nombre: "Parlante Pequeño Esfera Xaea Gris", precio: "20.300", imagen: "PARLANTE PEQUEÑO ESFERA MODX-004I – XAEA – GRIS.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 5W", "Batería: 800mAh"] },
  { nombre: "Parlante Pequeño Esfera Xaea Rojo", precio: "20.300", imagen: "PARLANTE PEQUEÑO ESFERA MODX-004I – XAEA – ROJO.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 5W", "Batería: 800mAh"] },
  { nombre: "Parlante Pequeño Xaea Negro", precio: "25.800", imagen: "PARLANTE PEQUEÑO MODX-004Y – XAEA – NEGRO.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 8W", "Batería: 1200mAh"] },
  { nombre: "Parlante Pequeño T5 Camuflado", precio: "16.500", imagen: "PARLANTE PEQUEÑO T5 – CAMUFLADO.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 3W"] },
  { nombre: "Parlante Pequeño T5 - Rojo", precio: "16.500", imagen: "PARLANTE PEQUEÑO T5 – ROJO.jpg", estado: "Nuevo", categoria: "parlantes", caracteristicas: ["Potencia: 3W"] },

  // --- SMART WATCHS ---
  { nombre: "Smart Watch GT5 Azul", precio: "36.000", imagen: "SMART WATCH GT5 MODV-00GF – VARIOS – AZUL.jpg", estado: "Nuevo", categoria: "smartwatchs", caracteristicas: ["Batería: 200mAh"] },
  { nombre: "Smart Watch GT5 Blanco", precio: "36.000", imagen: "SMART WATCH GT5 MODV-00GF – VARIOS – BLANCO.jpg", estado: "Nuevo", categoria: "smartwatchs", caracteristicas: ["Batería: 200mAh"] },
  { nombre: "Smart Watch GT5 Gris", precio: "36.000", imagen: "SMART WATCH GT5 MODV-00GF – VARIOS – GRIS.jpg", estado: "Nuevo", categoria: "smartwatchs", caracteristicas: ["Batería: 200mAh"] },
  { nombre: "Smart Watch GT5 Negro", precio: "36.000", imagen: "SMART WATCH GT5 MODV-00GF – VARIOS – NEGRO.jpg", estado: "Nuevo", categoria: "smartwatchs", caracteristicas: ["Batería: 200mAh"] },
  { nombre: "Smart Watch D20 Blanco", precio: "15.000", imagen: "SMART WATCH MODS-006 D20 – ST – BLANCO.jpg", estado: "Nuevo", categoria: "smartwatchs", caracteristicas: ["Batería: 90mAh"] },
  { nombre: "Smart Watch D20 Negro", precio: "15.000", imagen: "SMART WATCH MODS-006 D20 – ST – NEGRO.jpg", estado: "Nuevo", categoria: "smartwatchs", caracteristicas: ["Batería: 90mAh"] },
  { nombre: "Smart Watch D20 Plateado", precio: "15.000", imagen: "SMART WATCH MODS-006 D20 – ST – PLATEADO.jpg", estado: "Nuevo", categoria: "smartwatchs", caracteristicas: ["Batería: 90mAh"] },
  { nombre: "Smart Watch D20 Rosa", precio: "15.000", imagen: "SMART WATCH MODS-006 D20 – ST – ROSA.jpg", estado: "Nuevo", categoria: "smartwatchs", caracteristicas: ["Batería: 90Ah"] },
  { nombre: "Smart Watch SU Negro", precio: "30.300", imagen: "SMART WATCH MODS-774 – SU 30 – ST – NEGRO.jpg", estado: "Nuevo", categoria: "smartwatchs", caracteristicas: ["Batería: 200mAh"] },
  { nombre: "Smart Watch SU Plateado", precio: "30.300", imagen: "SMART WATCH MODS-774 – SU 30 – ST – PLATEADO.jpg", estado: "Nuevo", categoria: "smartwatchs", caracteristicas: ["Batería: 200mAh"] },
  { nombre: "Smart Watch SU Rosa", precio: "30.300", imagen: "SMART WATCH MODS-774 – SU 30 – ST – ROSA.jpg", estado: "Nuevo", categoria: "smartwatchs", caracteristicas: ["Batería: 200mAh"] },

  // --- RELOJES (Sin características) ---
  { nombre: "Reloj Marron", precio: "6.700", imagen: "RELOJ MASCULINO LX01 MODV-005K – VARIOS – MARRON.jpg", estado: "Nuevo", categoria: "relojes" },
  { nombre: "Reloj Negro", precio: "6.700", imagen: "RELOJ MASCULINO LX01 MODV-005K – VARIOS – NEGRO.jpg", estado: "Nuevo", categoria: "relojes" },
  { nombre: "Reloj Negro y Blanco", precio: "6.700", imagen: "RELOJ MASCULINO LX01 MODV-005K – VARIOS – NEGRO Y BLANCO.jpg", estado: "Nuevo", categoria: "relojes" },
  { nombre: "Reloj Verde", precio: "6.700", imagen: "RELOJ MASCULINO LX01 MODV-005K – VARIOS – VERDE.jpg", estado: "Nuevo", categoria: "relojes" },

  // --- ADAPTADORES (Sin características) ---
  { nombre: "Cable Adaptador Lightning (M) a 3.5 (H)", precio: "6.500", imagen: "CABLE ADAPTADOR IPHONE LIGHTNING (M) A PLUG 3.5 (H).jpg", estado: "Nuevo", categoria: "adaptadores" },
  { nombre: "Cable Adaptador Tipo C (M) a 3.5 (H)", precio: "6.400", imagen: "CABLE ADAPTADOR TIPO C (M) A PLUG 3.5 (H).jpg", estado: "Nuevo", categoria: "adaptadores" },
  { nombre: "Adaptador HDMI a 2 HDMI", precio: "6.700", imagen: "ADAPTADOR HDMI A 2 HDMI.jpg", estado: "Nuevo", categoria: "adaptadores" },
  { nombre: "Adaptador Hub de 4 puertos con boca cable USB", precio: "9.100", imagen: "HUB DE PUERTOS 4 BOCAS CABLE USB MODX-0011 – VARIOS – PLATEADO.jpg", estado: "Nuevo", categoria: "adaptadores" },
  { nombre: "Adaptador SIM", precio: "1.200", imagen: "ADAPTADOR SIM.jpg", estado: "Nuevo", categoria: "adaptadores" },
  { nombre: "Adaptador MICROSD a USB", precio: "4.300", imagen: "ADAPTADOR MICROSD A USB.jpg", estado: "Nuevo", categoria: "adaptadores" },
];

// 1. SISTEMA GLOBAL DE CARRITO
let carrito = JSON.parse(localStorage.getItem('enzoCarrito')) || [];

function guardarCarrito() {
    localStorage.setItem('enzoCarrito', JSON.stringify(carrito));
}

function obtenerPrecioNumerico(precioStr) {
    return parseInt(precioStr.replace(/\./g, ''));
}

function actualizarContadorCabecera() {
    const contadores = document.querySelectorAll('.carrito-contador');
    let cantidadTotal = 0;
    carrito.forEach(item => cantidadTotal += item.cantidad);
    
    contadores.forEach(c => {
        c.innerText = cantidadTotal;
        if(cantidadTotal > 0) {
            c.classList.remove('hidden');
            c.classList.add('flex');
        } else {
            c.classList.add('hidden');
            c.classList.remove('flex');
        }
    });
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
    actualizarContadorCabecera();
    
    // Feedback visual breve
    const btn = event.currentTarget;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Agregado!';
    btn.classList.add('bg-green-500');
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.classList.remove('bg-green-500');
    }, 1000);
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
    actualizarContadorCabecera();
    if(document.getElementById('pagina-items-carrito')) renderizarPaginaCarrito();
}

function eliminarDelCarrito(nombreProducto) {
    carrito = carrito.filter(item => item.nombre !== nombreProducto);
    guardarCarrito();
    actualizarContadorCabecera();
    if(document.getElementById('pagina-items-carrito')) renderizarPaginaCarrito();
}


// 2. LÓGICA PARA INDEX.HTML (Catálogo)
const contenedorCatalogo = document.getElementById('contenedor-productos');
const selectOrden = document.getElementById('select-orden');
const botonesCategoria = document.querySelectorAll('.btn-categoria');
let filtroActual = 'todos';

if (contenedorCatalogo) {
    function actualizarVistaCatalogo() {
        let filtrados = listaProductos.filter(p => filtroActual === 'todos' || p.categoria === filtroActual);
        
        const orden = selectOrden.value;
        if (orden === "precio-menor") filtrados.sort((a, b) => obtenerPrecioNumerico(a.precio) - obtenerPrecioNumerico(b.precio));
        else if (orden === "precio-mayor") filtrados.sort((a, b) => obtenerPrecioNumerico(b.precio) - obtenerPrecioNumerico(a.precio));
        else if (orden === "az") filtrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
        else if (orden === "za") filtrados.sort((a, b) => b.nombre.localeCompare(a.nombre));

        let html = "";
        filtrados.forEach(p => {
            const etiquetaColor = p.estado.toLowerCase() === 'nuevo' ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
            
            // Inyectamos las características rojas si las tiene
            let htmlCaracteristicas = "";
            if (p.caracteristicas && p.caracteristicas.length > 0) {
                htmlCaracteristicas = `<div class="flex flex-wrap justify-center gap-1 mb-2 mt-1">`;
                p.caracteristicas.forEach(carac => {
                    htmlCaracteristicas += `<span class="bg-red-500 text-white text-[10px] font-black uppercase px-2 py-1 rounded-md border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">${carac}</span>`;
                });
                htmlCaracteristicas += `</div>`;
            }
            
            html += `
            <article class="bg-white rounded-2xl overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition flex flex-col relative">
                <span class="absolute top-3 right-3 px-3 py-1 text-xs font-black uppercase rounded-lg ${etiquetaColor} z-10 border border-black">${p.estado}</span>
                
                <div class="h-48 bg-white p-4 border-b-2 border-slate-100 flex items-center justify-center">
                    <img src="images/${p.imagen}" alt="${p.nombre}" class="max-h-full object-contain hover:scale-110 transition">
                </div>
                
                <div class="p-4 flex flex-col flex-grow text-center">
                    <h2 class="font-black text-blue-950 mb-1 leading-tight">${p.nombre}</h2>
                    ${htmlCaracteristicas}
                    <div class="mt-auto">
                        <p class="text-2xl font-black text-black mb-3">$${p.precio}</p>
                        <!-- BOTÓN CON BORDES NEGROS -->
                        <button onclick="agregarAlCarrito('${p.nombre}')" class="w-full bg-orange-500 text-white border-2 border-black font-black py-2 rounded-full hover:bg-orange-600 transition shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            <i class="fa-solid fa-cart-plus mr-1"></i> Agregar
                        </button>
                    </div>
                </div>
            </article>`;
        });
        contenedorCatalogo.innerHTML = html;
    }

    selectOrden.addEventListener('change', actualizarVistaCatalogo);
    botonesCategoria.forEach(boton => {
        boton.addEventListener('click', () => {
            botonesCategoria.forEach(b => {
                b.classList.remove('bg-cyan-200');
                b.classList.add('bg-white');
            });
            boton.classList.remove('bg-white');
            boton.classList.add('bg-cyan-200');
            filtroActual = boton.dataset.filtro;
            actualizarVistaCatalogo();
        });
    });

    actualizarVistaCatalogo();
}


// 3. LÓGICA PARA CARRITO.HTML
const contenedorPaginaCarrito = document.getElementById('pagina-items-carrito');
const totalPaginaCarrito = document.getElementById('pagina-total-precio');
const formCheckoutPagina = document.getElementById('form-checkout-pagina');

if (contenedorPaginaCarrito) {
    function renderizarPaginaCarrito() {
        contenedorPaginaCarrito.innerHTML = '';
        let total = 0;

        if (carrito.length === 0) {
            contenedorPaginaCarrito.innerHTML = '<div class="text-center py-8 text-slate-500 font-bold"><i class="fa-solid fa-basket-shopping text-4xl mb-3"></i><p>Tu carrito está vacío</p><a href="index.html" class="inline-block mt-4 text-blue-600 underline">Volver al catálogo</a></div>';
            totalPaginaCarrito.innerText = "0";
            return;
        }

        carrito.forEach(item => {
            const subtotal = item.precio * item.cantidad;
            total += subtotal;

            contenedorPaginaCarrito.innerHTML += `
            <div class="flex items-center gap-4 p-4 border-2 border-slate-100 rounded-xl">
                <img src="images/${item.imagen}" alt="${item.nombre}" class="w-20 h-20 object-contain">
                <div class="flex-grow">
                    <h4 class="font-black text-blue-950 leading-tight">${item.nombre}</h4>
                    <p class="font-black text-red-500">$${subtotal.toLocaleString('es-AR')}</p>
                </div>
                <div class="flex items-center gap-2">
                    <button type="button" onclick="cambiarCantidad('${item.nombre}', 'resta')" class="bg-slate-200 w-8 h-8 rounded-lg font-black border border-black hover:bg-slate-300">-</button>
                    <span class="font-bold w-4 text-center">${item.cantidad}</span>
                    <button type="button" onclick="cambiarCantidad('${item.nombre}', 'suma')" class="bg-slate-200 w-8 h-8 rounded-lg font-black border border-black hover:bg-slate-300">+</button>
                    <button type="button" onclick="eliminarDelCarrito('${item.nombre}')" class="bg-red-100 text-red-500 w-8 h-8 rounded-lg font-black border border-red-500 hover:bg-red-200 ml-2"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>`;
        });

        totalPaginaCarrito.innerText = total.toLocaleString('es-AR');
    }

    formCheckoutPagina.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (carrito.length === 0) {
            alert("El carrito está vacío.");
            return;
        }

        const nombre = document.getElementById('cliente-nombre').value;
        const dni = document.getElementById('cliente-dni').value;
        const tel = document.getElementById('cliente-telefono').value;
        const pago = document.getElementById('cliente-pago').value;

        let texto = `*NUEVO PEDIDO - ENZO HOUSE*\n\n`;
        texto += `👤 *Cliente:*\n- Nombre: ${nombre}\n- DNI: ${dni}\n- Tel: ${tel}\n- Medio de pago: ${pago}\n\n`;
        texto += `🛍️ *Detalle:*\n`;
        
        let total = 0;
        carrito.forEach(item => {
            const subtotal = item.precio * item.cantidad;
            total += subtotal;
            texto += `▪️ ${item.cantidad}x ${item.nombre} ($${subtotal.toLocaleString('es-AR')})\n`;
        });
        
        texto += `\n💰 *TOTAL A PAGAR: $${total.toLocaleString('es-AR')}*`;
        
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
        window.open(url, '_blank');
        
        carrito = [];
        guardarCarrito();
        renderizarPaginaCarrito();
        actualizarContadorCabecera();
        formCheckoutPagina.reset();
    });

    renderizarPaginaCarrito();
}

// INICIAR COMÚN
document.addEventListener('DOMContentLoaded', actualizarContadorCabecera);