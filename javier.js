// script.js

function mostrarDescripcion(plato) {
    let descripcion = '';

    switch (plato) {
        case 'Pasta':
            descripcion = 'La pasta italiana es famosa por su variedad y sabor. Se sirve con diferentes tipos de salsas como marinara, pesto o carbonara.';
            break;
        case 'Pizza':
            descripcion = 'La pizza italiana es un símbolo de la gastronomía mundial. Su base delgada, salsa de tomate y queso mozzarella son sus ingredientes principales.';
            break;
        case 'Tiramisu':
            descripcion = 'El tiramisú es un delicioso postre italiano hecho con capas de bizcochos empapados en café y crema de mascarpone.';
            break;
        default:
            descripcion = 'Selecciona un plato para obtener más información.';
    }

    document.getElementById('descripcion-plato').innerText = descripcion;
}
