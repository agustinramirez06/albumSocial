function cambiarPantalla(idPantallaAAbrir) {
    // 1. Le quitamos la clase 'active' a todas las pantallas para ocultarlas
    document.querySelectorAll('.vista').forEach(vista => vista.classList.remove('active'));
    
    // 2. Le ponemos 'active' solo a la pantalla que queremos ver
    document.getElementById(idPantallaAAbrir).classList.add('active');
}

// Ejemplo de uso:
// cambiarPantalla('pantalla-juego');  --> Te lleva al álbum
// cambiarPantalla('pantalla-tienda'); --> Te lleva a los sobres