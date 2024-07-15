/*Evento*/
$(document).ready(function () {
    //alerta
    const alertPlaceholder = document.getElementById('correo')
    const appendAlert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')

        alertPlaceholder.append(wrapper)
    }

    /* Mostrar alerta */
    const alertTrigger = document.getElementById('correoalerta')
    if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
            appendAlert('El correo ha sido enviado!', 'success')
        })
    }

    /* Tooltip*/
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })


    /*Selectores de Etiqueta*/

    $("#ingredientes").click(function () {
        $(this).css({
            "color": "red",
            "font-size": "2em"
        });
    });
    $("#preparacion").click(function () {
        $(this).css({
            "color": "red",
            "font-size": "2em"
        });
    });

});
