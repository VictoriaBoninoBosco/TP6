class Tarea {
    constructor(titulo, descripcion) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completado = false;
    }

    marcarCompleta() {
        this.completado = !this.completado;
    }

    getTitulo() {
        return this.titulo;
    }

    getDescripcion() {
        return this.descripcion;
    }

    getCompletado(){
        return this.completado;
    }
}

var lista = [];

function enviar() {

    var titulo = document.getElementById("tituloTarea").value;
    var descripcion = document.getElementById("descTarea").value;

    var tarea = new Tarea(titulo, descripcion);
    lista.push(tarea);

    listarTareas();
}

function listarTareas() {
    var result = document.getElementById("result");
    result.innerHTML = "";

    for (var i = 0; i < lista.length; i++) {
        var tarea = lista[i];

        result.innerHTML += "Nombre de tarea: " + tarea.getTitulo() + "Descripcion: " + tarea.getDescripcion()
        if (tarea.getCompletado()){
            result.innerHTML += "<button onclick='completar("+ i +")'> COMPLETO </button>"
        }else{
            result.innerHTML += "<button onclick='completar("+ i +")'> INCOMPLETO </button>"
        }
        result.innerHTML += "<br>"
    }
}

function completar(indice){
    lista[indice].marcarCompleta()
    listarTareas()
}
