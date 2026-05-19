// Vista para el formulario de la Bodega
export default class Cl_vBodega {
    // Elementos del DOM
    inNombre;
    inPeso;
    inPrecio;
    btCancelar;
    btAceptar;
    vista;
    // Constructor: Busca los elementos por su ID en el HTML
    constructor() {
        this.vista = document.getElementById("Bodega");
        this.inNombre = document.getElementById("Bodega_inNombre");
        this.inPeso = document.getElementById("Bodega_inPeso");
        this.inPrecio = document.getElementById("Bodega_inPrecio");
        this.btCancelar = document.getElementById("Bodega_btCancelar");
        this.btAceptar = document.getElementById("Bodega_btAceptar");
    }
    // Obtiene el nombre limpiando espacios
    get nombre() {
        return this.inNombre.value.trim();
    }
    // Obtiene el peso como número flotante
    get peso() {
        return parseFloat(this.inPeso.value.trim());
    }
    // Obtiene el precio como número flotante
    get precio() {
        return parseFloat(this.inPrecio.value.trim());
    }
    // Asigna la función que se ejecutará al dar click en Aceptar
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    // Asigna la función que se ejecutará al dar click en Cancelar
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    // Hace visible el formulario
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    // Oculta el formulario
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vBodega.js.map