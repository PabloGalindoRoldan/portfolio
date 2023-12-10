let button = document.getElementById('traductor')
button.addEventListener('click', traducir)

function traducir(event){
    event.preventDefault()

    let titulo = document.getElementById('titulo');
    titulo.innerHTML = "Hola, soy Pablo Galindo";

    let subtitulo = document.getElementById('subtitulo');
    subtitulo.innerHTML = "Desarrollador";

    let proyectos = document.getElementById('proyectos');
    proyectos.innerHTML = "Estos son algunos de mis proyectos";

    let trabajemos = document.getElementById('trabajemos');
    trabajemos.innerHTML = "Trabajemos juntos";

    let ayudarte = document.getElementById('ayudarte');
    ayudarte.innerHTML = "Como puedo ayudarte?";

    let cita = document.getElementById('cita');
    cita.innerHTML = '"Las oportunidades no suceden, las creamos"';
}