/*Hacer un formulario de invitación a un evento. 

Validarlo en el submit 

Nombre —> no puede estar vacío
Edad ——> debe ser entre 18 y 120 
Seleccionar estado civil —> no puede estar vacío 
Seleccionar nacionalidad (select, desplegado de opciones) —> no puede estar vacío 


Una vez enviados los datos, 
en lugar de enviarse a otra web
Se imprimen abajo, como una 
lista de confirmación de asistencia


Invitado {indice} 
Nombre: {nombre}
Edad: {edad}
Estado civil {estado civil}
Nacionalidad {nacionalidad}
Boton "Eliminar invitado"
 (Si le hacemos clic, se borra todo)
 */

var formulario = document.querySelector('form');
var nombre = document.getElementById('name');
var edad = document.getElementById('edad');
var soltero_form = formulario.elements[2];
var casado_form = formulario.elements[3];
var nacionalidad_form = formulario.elements[4];



formulario.onsubmit = function (e) {
    e.preventDefault();

    var estado = ''
    if (soltero_form.checked) {
        estado = 'solterx';
    }
    else if (casado_form.checked) {
        estado = 'en una relación';
    }
    else estado = 'vacio';

    var nacionalidad = nacionalidad_form.options[nacionalidad_form.selectedIndex].value;

    if (nacionalidad == 'arg') {
        nacionalidad = 'argentina';
    } else if (nacionalidad == 'peru') {
        nacionalidad = 'peruana';
    } else nacionalidad = 'venezolana';

    if (nombre.value.length <= 0) {
        nombre.classList.add('error');
    } else if (edad.value < 18 || edad.value > 120) {
        edad.classList.add('error');
    } else {

        function agregarInvitado(nombreInvitado, edadInvitado, estadoCivil, nacionalidad) {
            var lista = document.getElementById('lista-de-invitados');
            var invitado = document.createElement('div');
            lista.appendChild(invitado);
            invitado.style.display = 'flex';

            var nombreDato = document.createElement('div');
            invitado.appendChild(nombreDato);
            

            var nombrePersona = document.createElement('div');
            nombrePersona.textContent = 'Nombre: ';
            
            

            var edadPersona = document.createElement('div');
            edadPersona.textContent = 'Edad: ';
            edadPersona.classList.add('margen');

            var estadoPersona = document.createElement('div');
            estadoPersona.textContent = 'Estado civil: ';
            estadoPersona.classList.add('margen2');

            var nacPersona = document.createElement('div');
            nacPersona.textContent = 'Nacionalidad: ';
            nacPersona.classList.add('margen3');

            var corteLinea = document.createElement('br');

            nombreDato.appendChild(nombrePersona);
            nombreDato.appendChild(edadPersona);
            nombreDato.appendChild(estadoPersona);
            nombreDato.appendChild(nacPersona);
            nombreDato.classList.add('separados');
            nombreDato.appendChild(corteLinea);

            var datos = document.createElement('div');
            datos.classList.add('columna');
            invitado.appendChild(datos);

            var nuevoInvitado = [nombreInvitado, edadInvitado, estadoCivil, nacionalidad];
            for (var index = 0; index < nuevoInvitado.length; index++) {
                var input = document.createElement('input');
                input.value = nuevoInvitado[index];
                datos.appendChild(input);
                input.classList.add("invisible");
                var corteLinea = document.createElement('br');
                input.appendChild(corteLinea);
            }

            var boton = document.createElement('button');
            boton.textContent = 'Eliminar invitadx';
            var tacho = document.createElement('img');
            tacho.setAttribute('src', './rubbish-bin.png');
            boton.appendChild(tacho);
            datos.appendChild(boton);
            boton.onclick = function eliminarInvitado() {
                boton.parentNode.parentNode.remove()
            }

        } agregarInvitado(nombre.value, edad.value, estado, nacionalidad);

    }
}