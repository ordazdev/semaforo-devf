let colores = ['rojo', 'verde', 'amarillo'];
let indice = 0;

function cambiarLuz() {
    const semaforo = document.getElementById('semaforo');
    const color = colores[indice];
    
    switch(color) {
        case 'rojo':
            semaforo.src = 'img/ROJO.png';
            break;
        case 'verde':
            semaforo.src = 'img/AMARILLO.png';
            break;
        case 'amarillo':
            semaforo.src = 'img/VERDE.png';
            break;
    }

    indice++;
if (indice >= colores.length) {
    indice = 0;
}
}

setInterval(cambiarLuz, 3000); 