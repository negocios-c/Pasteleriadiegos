<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Pastelería</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" type="image/png" href="icono.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>
    <header>
        
        <div class="titulo-con-logo">
            <img src="icono.png" alt="Logo" class="logo">
            <h1>TORTAS DIEGOS</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#sobre">Sobre Nosotros</a></li>
                <li><a href="#" id="carrito-link" aria-label="Abrir carrito">Carrito (<span id="carrito-count">0</span>)</a></li>
                <li><a href="#" id="cuenta-link" aria-label="Abrir cuenta">Cuenta</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="inicio" class="hero">
            </div>
        </section>

        <section id="productos">
            <h2>Productos Destacados</h2>
            <div class="productos-grid">
                <div class="producto">
                    <img src="productos/image.png" alt="Tarta de Fresa">
                    <h3>Panetón</h3>
                    <p>S/10.00</p>
                    <button class="agregar-carrito" data-nombre="Panetón" data-precio="10.00" aria-label="Agregar Panetón al carrito">Agregar al Carrito</button>
                </div>
                <div class="producto">
                    <img src="productos/image copy.png" alt="Pastel de Chocolate">
                    <h3>tiramisú</h3>
                    <p>S/12.00</p>
                    <button class="agregar-carrito" data-nombre="tiramisú" data-precio="12.00" aria-label="Agregar tiramisú al carrito">Agregar al Carrito</button>
                </div>
                <div class="producto">
                    <img src="productos/image (1).png" alt="Cupcakes">
                    <h3>Mousse de Tres Chocolates</h3>
                    <p>S/13.00</p>
                    <button class="agregar-carrito" data-nombre="Mousse de Tres Chocolates" data-precio="13.00" aria-label="Agregar Mousse de Tres Chocolates al carrito">Agregar al Carrito</button>
                </div>
            </div>
        </section>

        <section id="sobre">
            <h2>Sobre Nosotros</h2>
            <p>“En Pasteleria Diegos nos dedicamos a crear postres frescos, caseros y llenos de sabor. Cada torta y cada dulce es preparado con dedicación, ingredientes de calidad y un toque especial pensado para sorprender a cada cliente. Nuestro objetivo es ofrecer una experiencia dulce, deliciosa y memorable en cada bocado.”</p>
        </section>

    <div class="social-minimal">
    <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
    <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
    <a href="https://www.tiktok.com" target="_blank"><i class="fab fa-tiktok"></i></a>
    <a href="https://wa.me/XXXXXXXXX" target="_blank"><i class="fab fa-whatsapp"></i></a>
</div>
    </main>
    <!-- Modal para Carrito -->
    <div id="modal-carrito" class="modal" role="dialog" aria-labelledby="carrito-title" aria-hidden="true">
        <div class="modal-content">
            <span class="cerrar" id="cerrar-carrito" aria-label="Cerrar carrito">&times;</span>
            <h2 id="carrito-title">Tu Carrito</h2>
            <ul id="lista-carrito"></ul>
            <p>Total: $<span id="total">0.00</span></p>
            <button id="vaciar-carrito" aria-label="Vaciar carrito">Vaciar Carrito</button>
        </div>
    </div>

    <!-- Modal para Cuenta -->
    <div id="modal-cuenta" class="modal" role="dialog" aria-labelledby="cuenta-title" aria-hidden="true">
        <div class="modal-content">
            <span class="cerrar" id="cerrar-cuenta" aria-label="Cerrar cuenta">&times;</span>
            <h2 id="cuenta-title">Crear Cuenta</h2>
            <form id="form-cuenta">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" required aria-describedby="nombre-help">
                <small id="nombre-help">Ingresa tu nombre completo.</small>
                <label for="email">Email:</label>
                <input type="email" id="email" required aria-describedby="email-help">
                <small id="email-help">Usaremos este email para tu cuenta.</small>
                <label for="password">Contraseña:</label>
                <input type="password" id="password" required aria-describedby="password-help">
                <small id="password-help">Mínimo 8 caracteres.</small>
                <button type="submit" aria-label="Crear cuenta">Crear Cuenta</button>
            </form>
        </div>
    </div>


    <footer>
        <p>&copy; 2025 Todos los derechos reservados.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
