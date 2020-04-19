const cotizador = new API('c7abf805e7da65eaaaa4cf503b14d5f561801a567a3438fd647fd354516c31ee');
const ui = new Interfaz();


/* Leer formulario */
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
    
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
    
    if (monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
        /* Mostrar alerta de error */
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');
    } else {
        /* Todo bien */
        cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
            .then((data) => {
                ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptoMonedaSeleccionada);
            })

    }
})