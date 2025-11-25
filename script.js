// Carrito de compras
let carrito = [];
let total = 0;

// Función para actualizar el carrito en la UI
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');
    const carritoCount = document.getElementById('carrito-count');

    listaCarrito.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);
    });

    totalElement.textContent = total.toFixed(2);
    carritoCount.textContent = carrito.length;
}

// Agregar producto al carrito
document.querySelectorAll('.agregar-carrito').forEach(button => {
    button.addEventListener('click', () => {
        const nombre = button.getAttribute('data-nombre');
        const precio = parseFloat(button.getAttribute('data-precio'));
        carrito.push({ nombre, precio });
        total += precio;
        actualizarCarrito();
    });
});

// Mostrar modal de carrito
document.getElementById('carrito-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('modal-carrito').style.display = 'block';
    document.getElementById('modal-carrito').setAttribute('aria-hidden', 'false');
});

// Cerrar modal de carrito
document.getElementById('cerrar-carrito').addEventListener('click', () => {
    document.getElementById('modal-carrito').style.display = 'none';
    document.getElementById('modal-carrito').setAttribute('aria-hidden', 'true');
});

// Vaciar carrito
document.getElementById('vaciar-carrito').addEventListener('click', () => {
    carrito = [];
    total = 0;
    actualizarCarrito();
});

// Mostrar modal de cuenta
document.getElementById('cuenta-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('modal-cuenta').style.display = 'block';
    document.getElementById('modal-cuenta').setAttribute('aria-hidden', 'false');
});

// Cerrar modal de cuenta
document.getElementById('cerrar-cuenta').addEventListener('click', () => {
    document.getElementById('modal-cuenta').style.display = 'none';
    document.getElementById('modal-cuenta').setAttribute('aria-hidden', 'true');
});

// Cerrar modales al hacer clic fuera
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
        e.target.setAttribute('aria-hidden', 'true');
    }
});

// Manejar formulario de cuenta (simulado)
document.getElementById('form-cuenta').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Cuenta creada exitosamente!');
});
