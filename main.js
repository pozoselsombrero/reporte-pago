document.addEventListener('DOMContentLoaded', () => {
    // Referencia al formulario (se añadió un id="payment-report-form" en el HTML)
    const form = document.getElementById('payment-report-form');

    if (form) {
        // Ejemplo de funcionalidad: prevenir el envío y realizar validación del lado del cliente.
        // NOTA: Para FormSubmit, usualmente se quiere que se envíe, 
        // pero este es el punto de entrada para cualquier lógica de JS.
        form.addEventListener('submit', (event) => {
            // Ejemplo de validación de campo (podrías añadir más lógica aquí)
            const emailField = document.getElementById('email');
            
            if (!emailField.value.includes('@')) {
                console.error('La dirección de correo electrónico no es válida.');
                // event.preventDefault(); // Descomentar para detener el envío si hay error
                // alert('Por favor, ingresa un correo electrónico válido.');
            }
            
            console.log('Reporte de pago intentando enviar...');
            // Si event.preventDefault() no es llamado, el formulario se envía al action (FormSubmit).
        });
    }

    // Inicialización de la animación (la clase .fade-in-page se maneja por CSS, 
    // pero se podría agregar lógica adicional aquí si fuera necesario).
    console.log('El formulario de reporte de pago está listo.');
});